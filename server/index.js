const express = require('express');
const { OAuth2Client, auth } = require('google-auth-library');
require('dotenv').config();
const { CLIENT_ID, PASSWORD, SECRET_KEY, ADMIN_ID, ADMIN_PASSWORD, DEFAULT_PASS } = process.env;
const cors = require('cors');
const nodemailer = require("nodemailer")
const zod = require("zod")
const otpGenerator = require("otp-generator")
const app = express();
const jwt = require("jsonwebtoken")
const client = new OAuth2Client(CLIENT_ID);
const {User, inputSchema, Question} = require("./db.js")
const bodyParser = require("body-parser");
const  {authMiddleware}  = require("./authMiddleware")

app.use(express.json())
app.use(bodyParser.json())

app.use(cors())

let newUser;

app.post('/auth/google', async (req, res) => {
  const { token } = req.body;

  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: CLIENT_ID,
    });
    const payload = ticket.getPayload();

    console.log(payload);

    res.status(200).json(payload);
  } catch (error) {
    res.status(400).json({ error: 'Invalid Token' });
  }
});

app.post("/otp", async (req,res)=>{
  let existCheck = await User.exists({
      email: req.body.email
  })

  if(existCheck == null){
      if(inputSchema.safeParse(req.body).success){
          if(typeof(req.body.age)=="number"){
              newUser = new User({
                  firstName: req.body.firstName,
                  lastName: req.body.lastName,
                  email: req.body.email,
                  password: req.body.password,
                  age: req.body.age,
                  gender: req.body.gender,  
              })

              const otp = otpGenerator.generate(6, { lowerCaseAlphabets: false, upperCaseAlphabets: false, specialChars: false});
              const transporter = nodemailer.createTransport({
                  service: 'gmail',
                  auth: {
                      user: 'aptidote01@gmail.com',
                      pass: PASSWORD
                  }
              });
              const mailOptions = {
                  from: 'aptidote01@gmail.com',
                  to: req.body.email,
                  subject: 'OTP Verification',
                  text: `Hello, this is Tejas from Aptidote ©, your OTP for verification is: ${otp}`
              };
              transporter.sendMail(mailOptions, (error, info) => {
                  if (error) {
                      console.error('Error sending email:', error);
                  } else {
                      console.log('Email sent:', info.response);
                  }
              });
              res.status(200).json({
                  otp: otp
              })
          }else{
              res.status(404).json({
                  msg:"Enter proper age"
              })
          }
      }else{
          res.status(404).json({
              msg: "input error",
              data: inputSchema.safeParse(req.body)
          })
      }
  }else{
      res.status(404).json({msg: "user already exists:"})
  }
})

app.post("/newuser", async(req,res)=>{
    let data = await newUser.save()
    res.status(200).json({data})
})

app.post("/signin", async(req,res)=>{   
    let exist;
    if(zod.string().email().safeParse(req.body.id).success){
        exist = await User.exists({
            email: req.body.id,
            password: req.body.password
        })
        if(exist != null){
                let token = jwt.sign({id: req.body.id}, SECRET_KEY)
                let user = await User.find({email: req.body.id})
                let email = req.body.id
                let name = user[0].firstName
                let isAdmin = false;
                if(req.body.id == ADMIN_ID && req.body.password == ADMIN_PASSWORD){
                    isAdmin = true
                }
                res.status(200).json({token: token, email: email, name: name, isAdmin: isAdmin})
        }
        else{
            res.status(404).json({
                msg: "user does not exist"
            })
        }
    }
    else{
        res.status(404).json({
            msg:"Enter correct email"
        })
    }
})

app.post("/verifyUser", async (req,res)=>{
    let token = req.body.token
    let data = jwt.decode(token)
    let user = new User({
        firstName: data.given_name,
        lastName: data.family_name,
        email: data.email,
        password:DEFAULT_PASS,
        age: 0,
        gender: ""
    })
    let exist;
    if(zod.string().email().safeParse(data.email).success){
        exist = await User.exists({
            email: data.email
        })
        if(exist != null){
            res.status(200).json({token: token, email: data.email, name: data.given_name, isAdmin: false})
        }
        else{
            let data = await user.save()
            res.status(200).json({token: token, email: data.email, name: data.given_name, isAdmin: false})
        }
    }
    else{
        res.status(404).json({
            msg:"Some Error"
        })
    }
})

app.get("/getqb", async (req, res)=>{
    let data = await Question.find({})
    res.status(200).json({data})
})

app.post("/postQuestion", authMiddleware, async (req, res)=>{
    let data = new Question(req.body)
    let re = await data.save()
    res.status(200).json(re)
})

app.listen(3000, () => console.log('Server running on port 3000'));