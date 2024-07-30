const express = require('express');
const { OAuth2Client } = require('google-auth-library');
require('dotenv').config();
const { CLIENT_ID, PASSWORD, SECRET_KEY } = process.env;
const cors = require('cors');
const nodemailer = require("nodemailer")
const zod = require("zod")
const otpGenerator = require("otp-generator")
const app = express();
const jwt = require("jsonwebtoken")
const client = new OAuth2Client(CLIENT_ID);
const {User, inputSchema} = require("./db.js")
const bodyParser = require("body-parser");

app.use(express.json())
app.use(cors());
app.use(bodyParser.json())

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
            res.status(200).json({token: token, email: email, name: name})
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

app.listen(3000, () => console.log('Server running on port 3000'));
