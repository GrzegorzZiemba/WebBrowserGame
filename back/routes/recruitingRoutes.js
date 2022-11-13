import express from "express";
import auth from "../middleware/auth.js";

import train from "../middleware/trainingMiddlewares/train.js";
import trainQueue from "../middleware/trainingMiddlewares/trainQueue.js";
import ArmyModel from "../models/armyModel.js";
import Town from "../models/townModel.js";
import User from "../models/userModel.js";
const router = express.Router();

router.post("/kingdoms/recruit", auth , async (req, res) => {
	
	if(auth){
		
		
		const town = await Town.find({_id: req.user.town})
		const army = await ArmyModel.find({_id: town.army})
		if (req.body.archer >0 ) {
			

			train(town, army._id , "archer", req.body.archer);

		}
		if (req.body.knight> 0 ) {
			
			train(town, army._id , "knight", req.body.knight);
		}
		if (req.body.horseRiders > 0) {
			
			train(town, army._id , "horserider", req.body.horseRiders);

		}
	}
	else{
		

	}
	
});

export default router;
