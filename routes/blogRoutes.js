import express from "express";
import {
  createBlog,
  getAllBlogs,
  updateBlog,
  deleteBlog,
  getOneBlog,
} from "../controllers/blogControllers.js";

import uploadBlogImage from "../upload/UploadImage.js";
const router = express.Router();

router.post("/", uploadBlogImage.single("image"), createBlog);
router.get("/", getAllBlogs);
router.get("/:id", getOneBlog);
router.put("/:id", updateBlog);
router.delete("/:id", deleteBlog);

export default router;
