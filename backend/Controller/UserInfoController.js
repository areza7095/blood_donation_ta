import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

//Get User Info
export const GetUserInfo = async (req, res) => {

  try {
    const response = await prisma.users.findMany({
      select:{
        full_name: true,
        blood_type: true,
        location: true,
        image_profile: true
      }
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }

};
