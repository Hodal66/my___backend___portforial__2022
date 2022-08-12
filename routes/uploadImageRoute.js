import express from "express";
const router = express.Router();
import createImage from "../controllers/CreateImage.js";
import uploadBlogImage from "../upload/UploadImage.js";

router.post("/", uploadBlogImage.single("image"), createImage);

export default router;
