import express from "express";
import User from "../models/userModel.js";
import mongoose from "mongoose";
import Town from "../models/townModel.js";
import Sawmill from "../models/buildingsModels/sawmillModel.js";
import StoneMine from "../models/buildingsModels/stoneMineModel.js";
import IronOreMine from "../models/buildingsModels/ironOreMineModel.js";
import ArmyModel from "../models/armyModel.js";
import BarrackModel from "../models/barrackModel.js";

const router = express.Router();
router.post("/createkingdom", async (req, res) => {
	const user = req.body;

	const val = await User.find({ email: user.email });
	console.log(val.length);
	if (val.length == 0) {
		const army = new ArmyModel();
		await army.save();
		console.log(user);
		const sawmill = new Sawmill();
		console.log(sawmill);
		await sawmill.save();
		const stoneMine = new StoneMine();
		await stoneMine.save();
		const ironOreMine = new IronOreMine();
		await ironOreMine.save();
		const barrack = new BarrackModel();
		await barrack.save();
		console.log();
		const town = new Town({
			ironOreMine: ironOreMine._id,
			sawmill: sawmill._id,
			stoneMine: stoneMine._id,
			barrack: barrack._id,
			army: army._id,
		});
		console.log(town);
		await town.save();
		const userThat = new User({
			...user,
			town: town._id,
		});
		await userThat.save();
		const token = await userThat.generateAuthToken();
		console.log("Przed Send");
		res.status(201).send({ user, token });
	} else {
		res.status(400).send({ error: "You did something Wrung" });
	}
});

router.post("/user/login", async (req, res) => {
	try {
		console.log("testing");
		console.log(req.body);
		const user = await User.loginUser(req.body.email, req.body.password);
		console.log(user);
		const token = await user.generateAuthToken();
		const mail = user.email;
		const id = user._id.toString();
		console.log("=============");
		console.log(id);

		res.send({ mail, token, id });
	} catch (e) {
		res.status(400).send({ error: "Cannot login" });
	}
});

router.post("/logout", async (req, res) => {
	const myId = JSON.parse(req.body.id);
	const id = mongoose.Types.ObjectId(myId);
	try {
		const user = await User.findById({ _id: id });
		user.tokens = [];
		user.save();
		res.status(200).send({ text: "Logged Out" });
	} catch (e) {
		res.status(400).send({ error: "Cannot logout" });
	}
});

export default router;
