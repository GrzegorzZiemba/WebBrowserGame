// Create here building queue
import mongoose from "mongoose";

const trainingQueue = new mongoose.Schema({
	id: { type: mongoose.Types.ObjectId, ref: "Town" },
	trainingTime: Date,
	training: String,
	trainingUnitId: mongoose.Types.ObjectId,
});

const TrainingQueue = mongoose.model("TrainingQueue", trainingQueue);

export default TrainingQueue;
