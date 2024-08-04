require('dotenv').config();
const {SECRET_KEY} = process.env;
const jwt = require("jsonwebtoken")

async function authMiddleware(req, res, next){
    let token = req.headers.authorization
    try{
        jwt.verify(token, SECRET_KEY)
        next()
    }
    catch(e){
        console.log("jwt not provided");

    }
}

module.exports = {
    authMiddleware
}