import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";
dotenv.config();

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    requried: true,
    trim: true,
  },
  email: {
    type: String,
    unique: true,
    requried: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Please provide valid email");
      }
    },
  },
  password: {
    type: String,
    required: true,
    minlength: 9,
    trim: true,
  },
  experience: { type: Number, default: 1 },

  ironOreMine: { type: mongoose.Types.ObjectId, ref: "IronOreMine" },

  sawmill: { type: mongoose.Types.ObjectId, ref: "Sawmill" },

  stoneMine: { type: mongoose.Types.ObjectId, ref: "StoneMine" },

  army: { type: mongoose.Types.ObjectId, ref: "ArmyModel" },
  barrack: { type: mongoose.Types.ObjectId, ref: "BarrackModel" },

  position: { type: Number },
  resources: { type: mongoose.Types.ObjectId, ref: "Resources" },

  tokens: {
    type: String,
  },
});

// Match user entered password to hashed password in database
userSchema.methods.generateAuthToken = async function () {
  const user = this;
  const token = jwt.sign({ _id: user._id.toString() }, process.env.SECRET_JWT);
  user.tokens = token;
  await user.save();

  //   res.cookie('jwt', token, {
  // 	httpOnly: true,
  // 	secure: process.env.NODE_ENV !== 'development', // Use secure cookies in production
  // 	sameSite: 'strict', // Prevent CSRF attacks
  // 	maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
  //   });

  return token;
};

userSchema.statics.loginUser = async (email, password) => {
  const user = await User.findOne({ email });

  if (!user) {
    throw new Error("Cannot login");
  }

  const checkPass = await bcrypt.compare(password, user.password);

  if (!checkPass) {
    throw new Error("Cannot login");
  }

  return user;
};

const User = mongoose.model("User", userSchema);

export default User;
