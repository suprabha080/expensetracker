import user from "../module/usermodule.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config()
const userRegister=async(requestAnimationFrame,res)=>{
    const{email,password,fullName}=requestAnimationFrame.body;
    if(!email||!password||!fullName){
        res.status(400).json({
            message:"please provide all data"
        });
        return;

    }
    const createUser =await User.create({
        fullName:fullName,
        email:email,
        password:bcrypt.hashSync(password,10)

    });
    return;
}
const useLogin=async(req,res)=>{
    const{email,password}=req.body;
    if(!email||!password){
        res.status(400).json({
            message:"please enter email and password"
        
    });
    return;
}
const finduser=await user.findone({
    email:email
});
if(!finduser){
    res.status(404).json({
        message:"uswr with this email is not found try another email!"
    });
    return;
}
const checkpassword=bcrypt.compareSync(password,finduser.password);
if(!checkpassword){
    res.status(401).json({
        message:"password is incorrect"
    });
    return;
}
const token=jwt.sign({
      userId : findUser._id,
        name : findUser.fullName
},Process.env.JWT_SECRET_KEY,{
    expiresIn:"10d"
})

res.json({
    message:"login succesfull",
    token:token
})
}
const fetchProfile = async(req,res)=>{
    const userId = req.user.id;
    const findInformation = await User.findById(userId).select("-password")
    res.status(200).json({
        message : "profile fetch success",
        data : findInformation
    })
}


