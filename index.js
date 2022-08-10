import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import contactsRoutes from "./routes/contactRoute.js";
// import MongoDB from "./config/db";
const app = express();
const port = process.env.PORT;

try {
  const conn = mongoose.connect(process.env.MONGO_DB_URL);
  console.log(`MongoDb is runnning`);
} catch (error) {
  console.log(error.message);
  process.exit(1);
}
app.use("/", contactsRoutes);

app.listen(port, () => {
  console.log(`🔥 Server is running at ${port}`);
});
