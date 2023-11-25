import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";
dotenv.config();

const userSchema = new mongoose.Schema({
  userName: {
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

  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

// Match user entered password to hashed password in database
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// Encrypt password using bcrypt
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model("User", userSchema);

export default User;
