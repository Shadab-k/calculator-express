const express = require('express')
const connectToMongo = require('./server')
const app=express()
let cors = require("cors");

const dotenv=require('dotenv')
dotenv.config()

const port=process.env.REACT_APP_PORT

app.listen(port,()=>{
    console.log(`Server running at http://localhost:${port}`)
})


//Middleware
 app.use(express.json())
 app.use(express.urlencoded({extended: false}));
 app.use(cors());
//  app.use(bodyParser.json());


// Routes
app.use('/data',require('./routes/create-data'))


connectToMongo()