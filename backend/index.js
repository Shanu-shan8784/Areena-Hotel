require("dotenv").config()
const express = require("express")
const MongoDBConnetion = require("./Connection/connection.js")

const User = require('./Models/user.js'); // path to your schema file

async function createUser() {
    try {
        const newUser = new User({ name: "John Doe" });
        await newUser.save();
        console.log("User saved! Check your MongoDB Atlas now.");
    } catch (err) {
        console.error("Error saving user:", err);
    }
}

MongoDBConnetion(process.env.Mongo_url)

createUser()

const app = express()
PORT = process.env.PORT||8009



app.use("/",routes)



app.listen(PORT,()=>{
    console.log("Sever is started at port ",PORT)
})