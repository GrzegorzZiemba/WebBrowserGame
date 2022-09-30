import mongoose from "mongoose";

const ironOreMine = new mongoose.Schema({
	production: { type: Number, default: 1 },
	level: { type: Number, default: 1 },
	productionTime: { type: Number, default: 68 },
	stone: { type: Number, default: 20 },
	wood: { type: Number, default: 31 },
	ironOre: { type: Number, default: 11 },
	buildTime: { type: Number, default: 400 },
	building: { type: Boolean, default: false },
	finishTime: { type: Date },
});

const IronOreMine = mongoose.model("IronOreMine", ironOreMine);

export default IronOreMine;
