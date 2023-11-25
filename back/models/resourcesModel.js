import mongoose from "mongoose";

const resources = new mongoose.Schema({
  wood: { type: Number, default: 3000 },
  iron: { type: Number, default: 1200 },
  stone: { type: Number, default: 1000 },
});

const Resources = mongoose.model("resources", resources);

export default Resources;
