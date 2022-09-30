import mongoose from "mongoose";

const barrackModel = new mongoose.Schema({
	level: { type: Number, default: 1 },
	stone: { type: Number, default: 1200 },
	wood: { type: Number, default: 1000 },
	ironOre: { type: Number, default: 450 },
	town: { type: mongoose.Types.ObjectId, ref: "town" },
});

const BarrackModel = mongoose.model("barrackModel", barrackModel);

export default BarrackModel;
