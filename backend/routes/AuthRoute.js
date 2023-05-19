import express from "express";
import { 
    Login,
    Register,

} from "../Controller/AuthController.js";
import VerifyTokenUser from "../Controller/VerifyTokenUser.js";

//Init Router
const router = express.Router();

//Users
router.post('/api/register', Register);
router.post('/api/login', Login);
router.post('/api/verifyToken', VerifyTokenUser);

export default router;
