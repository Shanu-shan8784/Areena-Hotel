const mongoose = require("mongoose")

async function MongoDBConnetion(url){
    try {
        const connection = await mongoose.connect(url)
    console.log("Database is connected Successfully ")
    return connection
    } catch (error) {
        console.log("This is error in connectin ",error)
    }
}

module.exports = MongoDBConnetion