import express from "express";
import { 
    GetUserInfo
} from "../Controller/UserInfoController.js";
import VerifyTokenUser from "../Controller/VerifyTokenUser.js";

//Init Router
const router = express.Router();

//Users
router.get('/api/GetUserInfo', GetUserInfo);
export default router;
