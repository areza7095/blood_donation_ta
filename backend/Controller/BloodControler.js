import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

//New Blood
export const NewBloodRequest = async (req, res) => {
  const { id_user, city, hospital, blood_type, call_number, notes } = req.body;

  console.log(req.body)
  //Create New Blood Req
  try {
    const SaveUser = await prisma.blood_donors.create({
      data: {
        id_user: id_user,
        city: city,
        hospital: hospital,
        blood_type: blood_type,
        call_number: call_number,
        notes: notes
      },
    });
    res.json(SaveUser);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

//Get Blood Req
export const GetBloodRequest = async (req, res) => {

  try {
    const response = await prisma.blood_donors.findMany({
      include:{
        id_User: true
      }
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }

};
