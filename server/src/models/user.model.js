import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    fullName: { 
      type: String,
      default: '',
    },
    mobileNumber:{
      type: String,
      default: '',
    },
    alternateEmail:{
      type: String,
      default: '',
    },
    resumeURL:{
      type: String,
      default: '',
    },
    resumeFilename:{
      type: String,
      default: '',
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
