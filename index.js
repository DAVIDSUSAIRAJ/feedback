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
app.use(cors())

mongoose.connect(process.env.MONGODB_URI).then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log("server is running and mongodb connected");
    })
}).catch((error)=>console.log(error))


app.use("/CRUD/cruds",taskRoute)