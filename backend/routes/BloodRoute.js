import express from "express";
import { 
    GetBloodRequest,
    NewBloodRequest
} from "../Controller/BloodControler.js";
import VerifyTokenUser from "../Controller/VerifyTokenUser.js";

//Init Router
const router = express.Router();

//Users
router.post('/api/NewBloodRequest', NewBloodRequest);
router.get('/api/GetBloodRequest', GetBloodRequest);
export default router;
