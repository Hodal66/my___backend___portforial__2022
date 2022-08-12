import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../config/cloudinaryConfig.js";

const blogStorage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "blogs",
  },
});

const uploadBlogImage = multer({
  storage: blogStorage,
});

export default uploadBlogImage;
