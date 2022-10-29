// Create here building queue
import mongoose from "mongoose";

const trainingQueue = new mongoose.Schema({
	townId: { type: mongoose.Types.ObjectId, ref: "Town" },
	trainingKnightTime: [ {type: Number}],
	trainingArcherTime: [{type:Number}],
	trainingHorsemanTime: [{type:Number}],
	training: String,
	trainingUnitId: mongoose.Types.ObjectId,
});

const TrainingQueue = mongoose.model("TrainingQueue", trainingQueue);

export default TrainingQueue;
