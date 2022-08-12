import * as cloudinary from "cloudinary";
import dotenv from "dotenv";
dotenv.config();

cloudinary.config({
  cloud_name: process.env.API_CLOUDINARY_NAME,
  api_key: process.env.API_CLOUDINARY_KEY,
  api_secret: process.env.API_SECRET_CLOUDINARY_KEY,
  secure: true,
});
export default cloudinary;
