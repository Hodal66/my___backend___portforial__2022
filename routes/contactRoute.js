import express from "express";
const router = express.Router();
import {
  createContact,
  getAllContacts,
  getOneContact,
  deleteContact,
  updateContact,
} from "../controllers/contactController.js";

router.post("/", createContact);
router.get("/", getAllContacts);
router.get("/:id", getOneContact);
router.put("/:id", updateContact);
router.delete("/:id", deleteContact);

export default router;
