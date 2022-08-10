import mongoose from "mongoose";
const contactSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Your Name is required"],
  },
  email: {
    type: String,
    required: [true, "Your email is required "],
    unique: true,
    minlength: 3,
    maxLength: 50,
  },
  message: {
    type: String,
    minlength: 2,
    maxLength: 255,
  },
});
export default mongoose.model("Contacts", contactSchema);
