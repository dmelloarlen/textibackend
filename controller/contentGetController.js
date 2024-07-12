import notesModel from "../model/model4.js";

export const contentGet=async(req,res)=>{
    try {
        const notesGet=await notesModel.find()
        res.json(notesGet)
    } catch (error) {
        res.status(500).json({message:"Internal error"})        
    }
}


// import notesModel from "../model/model4.js";

export const contentGet2=async(req,res)=>{
    try {
        const feid=req.params._id;
        const notesGet=await notesModel.findOne(({_id:feid}))
        if(notesGet.length==0){
            res.send("id not found")
        }else{
            res.send(notesGet)
        }
    } catch (error) {
        res.status(500).json({message:"Internal error"})        
    }
}