import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

//Import Validation
import RegisterValidation from "../config/RegisterValidation.js";

//Register Masyrakat
export const Register = async (req, res) => {
  const { error } = RegisterValidation(req.body);
  const { full_name, email, password, call_number, blood_type, location } = req.body;

  const id_user = Math.floor(Math.random() * 170323);

  if (error)
    return res.status(400).json({
      status: res.statusCode,
      message: error.details[0].message,
    });

    // if email exist
    const emailExist = await prisma.users.findUnique({
      where: {
        email: email,
      },
    });
    if (emailExist)
      return res.status(400).json({
        status: res.statusCode,
        message: "Email Sudah digunakan !",
      });
      

  // Hash Password
  const salt = await bcrypt.genSalt(8);
  const hashPassword = await bcrypt.hash(password, salt);

  //Create User
  try {
    const SaveUser = await prisma.users.create({
      data: {
        id_user: id_user,
        full_name: full_name,
        email: email,
        password: hashPassword,
        call_number: call_number,
        blood_type: blood_type,
        location: location,
        image_profile: "/images/profileMain.jpg"
      },
    });
    res.json(SaveUser);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

//Login Masyrakat
export const Login = async (req, res) => {
  const { email, password } = req.body;

  const user = await prisma.users.findUnique({
    where: {
      email: email,
    },
  });
  if (!user)
    return res.status(400).json({
      status: res.statusCode,
      message: "Email Anda Salah!",
    });

  // check password
  const validPwd = await bcrypt.compare(password, user.password);
  if (!validPwd)
    return res.status(400).json({
      status: res.statusCode,
      message: "Password Anda Salah!",
    });

  // membuat token menggunkan JWT
  const token = jwt.sign(
    {
      _id: user._id,
    },
    process.env.SECRET_KEY,
    {
      expiresIn: '3d'
    }
  );

  // Get Data Diri for getting Information 
  const personal_information = await prisma.users.findUnique({
    where: {
      email: email,
    },
    select: {
      id_user: true,
      full_name: true,
      email: true,
      call_number: true,
      blood_type: true,
      location: true,
      image_profile: true,
    }
  });

  

  res.header("x-auth-token", token).json({
    message: "success",
    accessToken: token,
    personal_information: personal_information
  });

  //console JWT token
  // console.log("Your JWT Token", token);
};
