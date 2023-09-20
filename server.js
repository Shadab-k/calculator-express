const mongoose = require("mongoose")
const dotenv=require('dotenv')
dotenv.config()
const mongoURL=process.env.mongoURL
const connectToMongo = ()=>{
    mongoose.connect(mongoURL);
        console.log("Successfully Connected To MongoDB")
    }

module.exports=connectToMongo;