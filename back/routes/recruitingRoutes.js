import express from "express";

import train from "../middleware/train.js";
import Town from "../models/townModel.js";
import User from "../models/userModel.js";
const router = express.Router();

router.post("/kingdoms/recruit", async (req, res) => {
	if (req.body.archer === true) {
		console.log("Recruiting archers + " + req.body.archerQty);
	}
	if (req.body.knight === true) {
		train();
	}
	if (req.body.horseRider === true) {
		console.log("Recruiting HorseRiders + " + req.body.horseRiderQty);
	}
});

export default router;
