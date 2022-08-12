import mongoose from "mongoose";
const userSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "Your firstname is required"],
    minLength: 3,
    maxLength: 50,
  },
  lastName: {
    type: String,
    required: [true, "Your lastname is required"],
    minLength: 3,
    maxLength: 50,
  },
  email: {
    type: String,
    required: [true, "Your email is required"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Your password is required"],
    minLength: 4,
    maxLength: 255,
  },
  confirmPassword: {
    type: String,
    required: [true, "Your Comfirmation password is required"],
    minLength: 4,
    maxLength: 255,
  },
});
export default mongoose.model("User", userSchema);
