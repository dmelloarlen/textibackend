import notesModel from "../model/model4.js";

export const updateContent=async(req,res)=>{
    try {
        const {userId,date,title,disc}=req.body;
        const feid=req.params.id;
        const notesGet=await notesModel.findByIdAndUpdate(({_id:feid}),req.body)
        const addContent=new Content({
            userId:userId,
            date:date,
            title:title,
            disc:disc
        });
        await addContent.save()
        if(notesGet.length==0){
            res.send("id not found")
        }else{
            res.send("notesGet")       
         }
    } catch (error) {
        res.status(500).json({message:"Internal error"})        
    }
}