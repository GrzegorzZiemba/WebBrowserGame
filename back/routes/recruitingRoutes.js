import express from "express";
import auth from "../middleware/auth.js";

import train from "../middleware/trainingMiddlewares/train.js";
import trainQueue from "../middleware/trainingMiddlewares/trainQueue.js";
import ArmyModel from "../models/armyModel.js";
import Town from "../models/townModel.js";
import User from "../models/userModel.js";
const router = express.Router();

router.post("/kingdoms/recruit", auth , async (req, res) => {
	console.log("REKRUTACJAAA")
	if(auth){
		console.log(req.body)
		console.log("ZALOGOWANY")
		const town = await Town.find({_id: req.user.town})
		const army = await ArmyModel.find({_id: town.army})
		// trainQueue();
		if (req.body.archer >0 ) {
			console.log("Archer to train")

			train(town, army._id , "archer", req.body.archer);

		}
		if (req.body.knight> 0 ) {
			console.log("Knight to train")
			train(town, army._id , "knight", req.body.knight);
		}
		if (req.body.horseRiders > 0) {
			console.log("horseRider to train")
			train(town, army._id , "horserider", req.body.horseRiders);

		}
	}
	else{
		console.log("Coś poszło nie tak...")

	}
	
});

export default router;
