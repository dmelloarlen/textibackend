import mongoose from "mongoose";

const notesSchema=new mongoose.Schema({
    userId:String,
    date:String,
    title:String,
    disc:String
})

const notesModel=mongoose.model("contents",notesSchema)

export default notesModel