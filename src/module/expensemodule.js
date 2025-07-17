import mongoose,{schema}from "mongoose";
const expenseschema= new mongoose.Schema({
expensetitle:{
    type:String,required:true,
    null:false
},
amountspend:{
    type:Float64Array,
    required:true
},
description:{
    type:String,
    null:true
},
billimage:{
    type:string
},
isCompleted:{
    type:Boolean,
    default:false
}
},{
    timseseries:true



})
const expense=new mongoose.model("expense",expenseschema);
export default expenses;