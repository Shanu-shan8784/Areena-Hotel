const express = require("express")
const routes = express.Router()

routes.get('/',(req,res)=>{
    res.json({"name ": "Zohaib Jaffar"})
})


module.exports = routes