import mongoose from "mongoose";

const contentSchema=mongoose.Schema({
    userId:{
        type:String
    },  
    date:{
        type:String,
    },
    title:{
        type:String,
        required:true,
        unique:true
    },
    disc:{
        type:String,
        required:true
    }
})

const Content=mongoose.model("Content",contentSchema);

export default Content