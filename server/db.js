require('dotenv').config();
const { DB_URL, SECRET_KEY } = process.env;
const mongoose = require("mongoose")
const zod = require("zod")
mongoose.connect(DB_URL)

const inputSchema = zod.object({
    firstName: zod.string(),
    lastName: zod.string(),
    email: zod.string().email(),
    password: zod.string().min(6),
    age: zod.number(),
    gender: zod.string()    
})

const userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    age: Number,
    gender: String,  
})
const User = mongoose.model("User", userSchema)

module.exports = {
    User,
    inputSchema,
}