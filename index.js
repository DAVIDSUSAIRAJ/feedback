const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose")
const app  = express();
const cors = require("cors");
const taskRoute = require("./routers/feedbackRouters");

app.use((req,res,next)=>{
    next();
})

app.use(express.json())
app.use(cors())//browser and server  connection; for that reson
app.use("/CRUD/cruds",taskRoute)
mongoose.connect(process.env.MONGODB_URI).then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log("server is running and mongodb connected");
    })
}).catch((error)=>console.log(error))



//CRUD IS A DATABASE NAME
//cruds is collection name