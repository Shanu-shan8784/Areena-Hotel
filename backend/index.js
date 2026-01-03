require("dotenv").config()
const express = require("express")
const routes = require('./Routes/routes.js')



const app = express()
PORT = process.env.PORT||8009



app.use("/",routes)



app.listen(PORT,()=>{
    console.log("Sever is started at port ",PORT)
})