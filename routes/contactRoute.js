import { express } from "express";
const router = express.Router();
import createContact from "../controllers/contactController";

router.get("/", createContact);

export default router;
