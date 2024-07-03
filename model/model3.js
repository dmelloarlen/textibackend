import mongoose from "mongoose";

const UserGetSchema=new mongoose.Schema({
    userId:String,
    name:String,
    email:String
})

const UserGetModel=mongoose.model("users",UserGetSchema)

export default UserGetModel