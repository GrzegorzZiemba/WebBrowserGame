import mongoose from "mongoose";

const sawmill = new mongoose.Schema({
	production: { type: Number, default: 1 },
	level: { type: Number, default: 1 },
	productionTime: { type: Number, default: 41 },
	stone: { type: Number, default: 6 },
	wood: { type: Number, default: 9 },
	ironOre: { type: Number, default: 0 },
	buildTime: { type: Number, default: 200 },
	building: { type: Boolean, default: false },
	finishTime: { type: Date },
});

const Sawmill = mongoose.model("Sawmill", sawmill);

export default Sawmill;
