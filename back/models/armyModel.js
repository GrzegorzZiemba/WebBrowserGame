import mongoose from "mongoose";

const armyModel = new mongoose.Schema({
	archer: { type: Number, default: 0 },
	knigth: { type: Number, default: 0 },
	horseRider: { type: Number, default: 0 },

	town: { type: mongoose.Types.ObjectId, ref: "town" },
});

const ArmyModel = mongoose.model("armyModel", armyModel);

export default ArmyModel;
