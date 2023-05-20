import express from "express";
import { 
    NewBloodRequest
} from "../Controller/BloodControler.js";
import VerifyTokenUser from "../Controller/VerifyTokenUser.js";

//Init Router
const router = express.Router();

//Users
router.post('/api/NewBloodRequest', NewBloodRequest);
export default router;
