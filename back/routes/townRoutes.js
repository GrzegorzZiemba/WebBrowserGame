import express from "express";
import Town from "../models/townModel.js";
import auth from "../middleware/auth.js";
import User from "../models/userModel.js";
import Sawmill from "../models/buildingsModels/sawmillModel.js";
import StoneMine from "../models/buildingsModels/stoneMineModel.js";
import IronOreMine from "../models/buildingsModels/ironOreMineModel.js";
import TrainingQueue from "../models/trainingQueue.js"
import checkQueue from "../middleware/checkQueue.js";
import build from "../middleware/build.js";
import ArmyModel from "../models/armyModel.js";

const router = express.Router();

router.post("/town", auth, async (req, res) => {
	
	if (auth) {
		try {
			const town = await Town.findById({ _id: req.user.town });
			const sawmill = await Sawmill.findById({ _id: town.sawmill });
			const stoneMine = await StoneMine.findById({ _id: town.stoneMine });
			const ironOreMine = await IronOreMine.findById({ _id: town.ironOreMine });
			const army = await ArmyModel.findById({_id: town.army })
			var isTrainingQueue = await TrainingQueue.find({townId: town._id});
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
				position: "EHE",
				archer: army.archer,
				knigth: army.knigth,
				horseRider: army.horseRider,
				trainingHorsemans: isTrainingQueue[0]?.trainingHorsemanTime?.length,
				trainingKnights: isTrainingQueue[0]?.trainingKnightTime?.length,
				trainingArchers: isTrainingQueue[0]?.trainingArcherTime?.length	,
				som: "23242"
				
			});
		} catch (e) {
			res.status(400).send(e);
		}
	} else {
		
	}
});

router.post("/town/upgrade/:id", auth, async (req, res) => {
	const now = new Date();

	
	if (auth) {
		const id = req.user._id;
		const buildingName = req.body.building;
		
		const loggedUser = await User.findById({ _id: id });
		
		const findTown = await Town.findById({ _id: loggedUser.town });
		
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

router.post("/kingdoms/:id", async (req, res) => {
	
	
	
	const towns = await Town.find().limit(3).skip(3*parseInt(req.params.id));
	console.log("Wywołanie listy królestw")
	const townsIds = towns.map((id) => [
		{ wood: id.wood, stone: id.stone, ironOre: id.ironOre, id: id._id, army: id.army },
	]);
	
	res.send(townsIds);
});

export default router;
