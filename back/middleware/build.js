import BuildingQueue from "../models/buildingModel.js";
import substractingCost from "./substractingCost.js";
function addSeconds(numOfSeconds, date) {
	date.setSeconds(date.getSeconds() + numOfSeconds);

	return date;
}

export default async function (town, buildingType, buildingName) {
	if (
		town.stone > buildingType.stone &&
		town.wood > buildingType.wood &&
		town.ironOre > buildingType.ironOre &&
		!buildingType.building
	) {
		const now = new Date();

		const finishedDate = addSeconds(buildingType.buildTime, now);
		console.log(finishedDate);
		const queue = new BuildingQueue({
			id: town._id,
			buildingTime: finishedDate,

			building: buildingName,
			buildingId: buildingType._id,
		});

		await buildingType.update({
			building: true,
			finishTime: finishedDate,
		});
		await queue.save();

		substractingCost(town, buildingType);

		return "Done";
	} else {
		console.log(town.stone);
		console.log(buildingType.stone);
		return "Not Done";
	}
}
