import User from "../model/model1.js";
import bcryptjs from 'bcryptjs'


export const signup=async(req,res)=>{

        try {
            const {name,email,password,profile}=req.body;
            const user=await User.findOne({email})
            if(user){
                return res.status(400).json({message:"User already exists!"});
            }
            const hashPass=await bcryptjs.hash(password,10);
            const createUser=new User({
                name:name,
                email:email,
                password:hashPass,
                profile:profile
            });
            await createUser.save()
            res.status(201).json({message:"created successfully!!!!!!!!!",user});
        } catch (error) {
           console.log("error"+error.message)
           res.status(500).json({message:"internal error"});
        }
}
var id;
export const login=async(req,res)=>{

        try {
            const {email,password}=req.body;
            // console.log(email)
            const user=await User.findOne({email});
            const match=await bcryptjs.compare(password,user.password)
            if(!user || !match){
                return res.status(400).json({message:"Invalid email or password!!!!!!!!!"});
            }else{
                id=user._id;
                res.status(200).json({message:"Login successful",
                user:{
                    _id:user._id,
                    name:user.name,
                    email:user.email
                },
            });            
        }   
        } catch (error) {
           res.status(500).json({message:"internal error"});

        }
}
