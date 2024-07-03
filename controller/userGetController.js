import UserGetModel from "../model/model3.js";

export const UserGet=async(req,res)=>{
    try {
        const get=await UserGetModel.find()
        res.json(get)
    } catch (error) {
        res.status(500).json({message:"internal error"});
    }
}