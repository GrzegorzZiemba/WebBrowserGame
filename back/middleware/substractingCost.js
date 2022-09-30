export default async function (town, buildingType) {
	const townStone = town.stone - buildingType.stone;
	const townWood = town.wood - buildingType.wood;
	const townIronOre = town.ironOre - buildingType.ironOre;
	await town.update({
		stone: townStone,
		wood: townWood,
		ironOre: townIronOre,
	});
}
