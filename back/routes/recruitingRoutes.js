import express from "express";

import train from "../middleware/trainingMiddlewares/train.js";
import trainQueue from "../middleware/trainingMiddlewares/trainQueue.js";
import Town from "../models/townModel.js";
import User from "../models/userModel.js";
const router = express.Router();

router.post("/kingdoms/recruit", async (req, res) => {
	// trainQueue();
	if (req.body.archer === true) {
		train("634d710f64cf19ea94ed0130", "634d710f64cf19ea94ed0126", "archer", 30);

	}
	if (req.body.knight === true) {
		train("634d710f64cf19ea94ed0130", "634d710f64cf19ea94ed0126", "knight", 30);
	}
	if (req.body.horseRider === true) {
		train("634d710f64cf19ea94ed0130", "634d710f64cf19ea94ed0126", "horserider", 30);

	}
});

export default router;
