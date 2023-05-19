import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";
import path from 'path';
import { fileURLToPath } from 'url';

//Init Dot Env
dotenv.config();

//import Router
import AuthRoute from "./routes/AuthRoute.js";


//Init Express
const app = express();

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

//init multer
const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, new Date().getTime() + "-" + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/jpg"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app.use(cors({
  credentials: true,
  origin: 'http://localhost:8000'
}));
app.use(multer({storage: fileStorage, fileFilter: fileFilter}).single('image_profile'));
app.use('/images', express.static(path.join(__dirname, 'images')))
app.use(AuthRoute);


// listen
app.listen(process.env.PORT, () => {
  console.log(`Server running in ${process.env.PORT}`);
});
