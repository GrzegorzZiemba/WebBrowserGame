import TrainingQueue from "../models/trainingQueue.js";
import substractingCost from "./substractingCost.js";
import { horseRider, archer, knight } from "./armyStats.js";
import BuildingQueue from "../models/buildingModel.js";
// Create - training abililty
function addSeconds(numOfSeconds, date) {
	date.setSeconds(date.getSeconds() + numOfSeconds);

	return date;
}

export default async function (town, army, unit, qty) {
	if (unit === "knight") {
		const costIron = knight.costIronOre * qty;
		const costWood = knight.costWood * qty;
		const costStone = knight.costStone * qty;
		let time = knight.timeBuild * qty;
		if (
			town.stone > costStone &&
			town.wood > costWood &&
			town.ironOre > costIron
		) {
			const now = new Date();
			const nowBuilding = await TrainingQueue.find({ id: town._id });
			if (nowBuilding.lenght > 1) {
				time = nowBuilding.traingTime + time;
			} else {
				console.log("Not Build");
			}
		}
	}
}
