import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app=express();
dotenv.config();
app.use(express.json());
app.use (cors({
  origin : "*",
})
);
mongoose.connect(process.env.DB_URL
).then(()=>{
    console.log("DataBase is connected!!");
}).catch((err)=>{
  console.log(err.message)
    console.log("Something error on database connectioni");
})
app.use("/api/user",userroutes);
app.use("/api/expense",expenseroutes);

app.listen(3000, () => {
  console.log(`server is run at 3000`);
});