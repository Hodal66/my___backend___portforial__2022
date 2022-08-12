import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import contactsRoutes from "./routes/contactRoute.js";
import blogRoutes from "./routes/blogRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import createImageUlr from "./routes/uploadImageRoute.js";
import mongoDB from "./config/db.js";

const app = express();
const port = process.env.PORT;

mongoDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/contacts", contactsRoutes);
app.use("/api/v1/blogs", blogRoutes);
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/image", createImageUlr);

app.listen(port, () => {
  console.log(`🔥 Server is running at ${port}`);
});
