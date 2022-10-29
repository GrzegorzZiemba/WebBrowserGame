// import TrainingQueue from "../../models/trainingQueue.js";
// import substractingCost from "../substractingCost.js";
// import { horseRider, archer, knight } from "../armyStats.js";
// import BuildingQueue from "../../models/buildingModel.js";
// import Town from "../../models/townModel.js";
// import mongoose from "mongoose";
import { trainUnit } from "./trainUnit.js";
// Create - training abililty




export default  function (town, army, unit, qty) {

	trainUnit(town, army, unit, qty)
	
}
