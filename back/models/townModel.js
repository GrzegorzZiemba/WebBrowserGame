import mongoose from "mongoose";

const townSchema = new mongoose.Schema({
	experience: { type: Number, default: 1 },
	ironOre: { type: Number, default: 10 },
	ironOreMine: { type: mongoose.Types.ObjectId, ref: "IronOreMine" },
	wood: { type: Number, default: 5 },
	sawmill: { type: mongoose.Types.ObjectId, ref: "Sawmill" },
	stone: { type: Number, default: 14 },
	stoneMine: { type: mongoose.Types.ObjectId, ref: "StoneMine" },

	army: { type: mongoose.Types.ObjectId, ref: "ArmyModel" },
	barrack: { type: mongoose.Types.ObjectId, ref: "BarrackModel" },
	building: { type: Number, default: 0 },
});

const Town = mongoose.model("Town", townSchema);

export default Town;
