import Town from "../models/townModel.js";
import Sawmill from "../models/buildingsModels/sawmillModel.js";
import IronOreMine from "../models/buildingsModels/ironOreMineModel.js";
import StoneMine from "../models/buildingsModels/stoneMineModel.js";

let controlNumber = 0;
export default setInterval(async function () {
	const data = await Town.find({});

	data.forEach(async (document) => {
		const woodElement = await Sawmill.findById(document.sawmill);
		if (!woodElement.building) {
			const woodStock = document.wood;
			const woodProduction = woodElement.production;
			const sumWood = woodStock + woodProduction;
			await document.update({
				wood: sumWood,
			});
		}

		if (controlNumber == 1 || controlNumber == 3) {
			const stoneElement = await StoneMine.findById(document.stoneMine);
			if (!stoneElement.building) {
				const stoneStock = document.stone;
				const stoneProduction = stoneElement.production;
				const sumStone = stoneStock + stoneProduction;
				await document.update({
					stone: sumStone,
				});
			}
		}

		if (controlNumber >= 3) {
			const ironOreElement = await IronOreMine.findById(document.ironOreMine);
			if (!ironOreElement.building) {
				const ironOreStock = document.ironOre;
				const ironOreProduction = ironOreElement.production;
				const sumIronOre = ironOreStock + ironOreProduction;
				await document.update({
					ironOre: sumIronOre,
				});
			}

			controlNumber = 0;
		}
		console.log("====");
	});
	controlNumber += 1;
}, 12000);
