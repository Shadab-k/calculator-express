const mongoose = require("mongoose")
const dotenv=require('dotenv')
dotenv.config()
const mongoURL=process.env.mongoURL
const connectToMongo = ()=>{
    mongoose.connect(mongoURL).then(()=>{console.log('connected to mongo')}).catch((error)=>{console.log('error connecting to mongo ',error)})
        console.log("Successfully Connected To MongoDB")
    }

module.exports=connectToMongo;