import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors"

import userRoute from "./route/userRoute.js"
import contentRoute from "./route/contentRoute.js"
import userGetRoute from "./route/userGetRoute.js"
import contentGetRoute from "./route/contentGetRoute.js"

const app=express();

app.use(express.json());
app.use(cors());
dotenv.config();

const port=process.env.PORT || 4001;
const uri=process.env.MONG_URI;


// connection to mongo
mongoose.connect(process.env.MONG_URI)
    .then(()=>{
        app.listen(process.env.PORT,()=>{
            console.log("Server is running!!!")
        })
    })
    .catch((error)=>{
        console.log(error)
    })


app.use("/user",userRoute)
app.use("/content",contentRoute)
app.use("/user",userGetRoute)
app.use("/content",contentGetRoute)

