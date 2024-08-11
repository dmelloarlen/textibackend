import notesModel from "../model/model4.js";

export const deleteContent=async(req,res)=>{
    try {
        const feid=req.params._id;
        const notesGet=await notesModel.findByIdAndDelete(({_id:feid}))
        if(notesGet.length==0){
            res.send("id not found")
        }else{
            res.json({message:"Data deleted sucessfully!!"})
        }
    } catch (error) {
        res.status(500).json({message:"Internal error"})        
    }
}
