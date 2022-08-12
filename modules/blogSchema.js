import mongoose from "mongoose";
const blogSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "The tittle is required"],
      minlength: 5,
      maxLength: 150,
    },
    description: {
      type: String,
      required: [true, "description is required!!"],
      minlength: 10,
    },
    author: {
      type: String,
      required: [true, "author is required!!"],
      minlength: 2,
      maxLength: 20,
    },
    image: {
      type: String,
      required: [true, "Image is required"],
    },
  },
  {
    timestamps: true,
  }
);
export default mongoose.model("Blogs", blogSchema);
