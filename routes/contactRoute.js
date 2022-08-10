import express from "express";
const router = express.Router();
import createContact from "../controllers/contactController.js";

router.get("/", createContact);

export default router;
