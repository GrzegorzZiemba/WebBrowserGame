import mongoose from "mongoose";

const buildingQueue = new mongoose.Schema({
	id: { type: mongoose.Types.ObjectId, ref: "Town" },
	buildingTime: Date,
	building: String,
	buildingId: mongoose.Types.ObjectId,
});

const BuildingQueue = mongoose.model("BuildingQueue", buildingQueue);

export default BuildingQueue;
