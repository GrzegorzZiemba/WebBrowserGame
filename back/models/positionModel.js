import mongoose from "mongoose";

const positionModel = new mongoose.Schema({
position: [{type: Number}]	
});

const PositionModel = mongoose.model("positionModel", positionModel);

export default PositionModel;
