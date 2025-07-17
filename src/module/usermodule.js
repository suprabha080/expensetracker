import mongoose from "mongoose";
const userschema =mongoose.Schema({
    email:{
        type:String,
        required:true,
        null:false,
        unique:true,
    },
    fullName:{
        type:String,
        required:true,
        null:false,

    },
    password:{
        type:String,
        required:true,
        null:false,
    },
})
const user=mongoose.model("user",userschema);
export default user;