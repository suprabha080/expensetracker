import express from "express";
import{userRegister,userLogin} from "../controller/usercontroller.js";
import { isLoggin } from "../middleware/authmiddleware.js";
import { fetchProfile } from "../controller/usercontroller.js";



const router=express.Router();
router.route("/register").post(userRegister);
router.route("/login").post(userLogin)
router.route("/profile").post(isLoggin,fetchProfile)
export default router;
