import mongoose from "mongoose";

const worldMap = new mongoose.Schema({
	maxCities: { type: Number, defauklt: 10 },
	town: { type: mongoose.Types.ObjectId, ref: "town" },
});

const WorldMap = mongoose.model("WorldMap", worldMap);

export default WorldMap;
