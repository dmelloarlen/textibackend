import Content from "../model/model2.js";

export const notes=async(req,res)=>{

    try{
        const {userId,date,title,disc}=req.body;
        const content=await Content.findOne({title})
        if(content){
            return res.status(400).json({message:"Note with same title found"})
        }
        const addContent=new Content({
            userId:userId,
            date:date,
            title:title,
            disc:disc
        });
        await addContent.save();
        res.status(201).json({message:"created successfully!!!!!!!!!"});
    }catch(error){
        res.status(500).json({message:"internal error"});
    }
}