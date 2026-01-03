require("dotenv").config()
const express = require("express")




const app = express()
PORT = process.env.PORT||8009




app.listen(PORT,()=>{
    console.log("Sever is started at port ",PORT)
})