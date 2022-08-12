import expressAsyncHandler from "express-async-handler";
import blogSchema from "../modules/blogSchema.js";
const createImage = async (req, res) => {
  console.log("+++++++++++++++before");
  const image = req.file.path;

  console.log("after++++++++++++++++++++++");
  res.send("saved url", image);
};
export default createImage;
