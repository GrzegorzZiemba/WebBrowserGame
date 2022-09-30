import mongoose from "mongoose";

const stoneMine = new mongoose.Schema({
	production: { type: Number, default: 1 },
	level: { type: Number, default: 1 },
	productionTime: { type: Number, default: 55 },
	stone: { type: Number, default: 12 },
	wood: { type: Number, default: 19 },
	ironOre: { type: Number, default: 1 },
	buildTime: { type: Number, default: 300 },
	building: { type: Boolean, default: false },
	finishTime: { type: Date },
});

const StoneMine = mongoose.model("StoneMine", stoneMine);

export default StoneMine;
