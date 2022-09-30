import express from "express";
import Town from "../models/townModel.js";
import auth from "../middleware/auth.js";
import User from "../models/userModel.js";
import Sawmill from "../models/buildingsModels/sawmillModel.js";
import StoneMine from "../models/buildingsModels/stoneMineModel.js";
import IronOreMine from "../models/buildingsModels/ironOreMineModel.js";
import build from "../middleware/build.js";
const router = express.Router();

router.post("/town", auth, async (req, res) => {
	console.log("Town");
	if (auth) {
		try {
			const town = await Town.findById({ _id: req.user.town });
			const sawmill = await Sawmill.findById({ _id: town.sawmill });
			const stoneMine = await StoneMine.findById({ _id: town.stoneMine });
			const ironOreMine = await IronOreMine.findById({ _id: town.ironOreMine });
			res.status(201).send({
				exp: town.experience,
				ironOre: town.ironOre,
				wood: town.wood,
				stone: town.stone,
				sawmillProduction: sawmill.production,
				sawmillLevel: sawmill.level,
				sawmillBuildingTime: sawmill.buildTime,
				sawmillIsBuild: sawmill.building,
				sawmillFinishTime: sawmill.finishTime,
				sawmillWood: sawmill.wood,
				sawmillStone: sawmill.stone,
				sawmillIronOre: sawmill.ironOre,
				stoneMineProduction: stoneMine.production,
				stoneMineLevel: stoneMine.level,
				stoneMineBuildingTime: stoneMine.buildTime,
				stoneMineIsBuild: stoneMine.building,
				stoneMineFinishTime: stoneMine.finishTime,
				stoneMineWood: stoneMine.wood,
				stoneMineStone: stoneMine.stone,
				stoneMineIronOre: stoneMine.ironOre,
				ironOreMineProduction: ironOreMine.production,
				ironOreMineLevel: ironOreMine.level,
				ironOreMineBuildingTime: ironOreMine.buildTime,
				ironOreMineIsBuild: ironOreMine.building,
				ironOreMineFinishTime: ironOreMine.finishTime,
				ironOreMineWood: ironOreMine.wood,
				ironOreMineStone: ironOreMine.stone,
				ironOreMineIronOre: ironOreMine.ironOre,
			});
		} catch (e) {
			res.status(400).send(e);
		}
	} else {
		console.log("please authenticate");
	}
});

router.post("/town/upgrade/:id", auth, async (req, res) => {
	const now = new Date();

	console.log("Building");
	if (auth) {
		const id = req.user._id;
		const buildingName = req.body.building;
		console.log(req.body);
		const loggedUser = await User.findById({ _id: id });
		console.log(loggedUser);
		const findTown = await Town.findById({ _id: loggedUser.town });
		console.log(findTown);
		if (req.body.building === "sawmill") {
			const sawmill = await Sawmill.findById({ _id: findTown.sawmill });
			build(findTown, sawmill, buildingName);

			res.status(201).send({
				wood: sawmill.wood,
				stone: sawmill.stone,
				ironOre: sawmill.ironOre,
			});
		}

		if (req.body.building === "stoneMine") {
			const stoneMine = await StoneMine.findById({ _id: findTown.stoneMine });
			const returnedData = build(findTown, stoneMine, buildingName);
			res.send(returnedData);
		}
		if (req.body.building === "ironOreMine") {
			const ironOreMine = await IronOreMine.findById({
				_id: findTown.ironOreMine,
			});
			const returnedData = build(findTown, ironOreMine, buildingName);
			res.send(returnedData);
		}
	}
});

router.get("/kingdoms/:id", async (req, res) => {
	console.log(req.body);
	console.log(req.param);
	console.log(req.params.id);
	const towns = await Town.find().limit(2).skip(parseInt(req.params.id));
	const townsIds = towns.map((id) => [
		{ wood: id.wood, stone: id.stone, ironOre: id.ironOre, id: id._id },
	]);
	console.log(towns);
	res.send(townsIds);
});

export default router;
