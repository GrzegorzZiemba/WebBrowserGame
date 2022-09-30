export default async function (town, buildingType) {
	const level = buildingType.level + 1;
	const production = Math.floor((buildingType.production + level) * 1.1);
	const stone = Math.floor(buildingType.stone * 1.4);
	const wood = Math.floor(buildingType.wood * 1.5);
	const ironOre = Math.floor((buildingType.ironOre + 1) * 1.2);
	const buildTime = Math.floor(buildingType.buildTime * 1.2);
	console.log(buildingType);
	await buildingType.update({
		level: level,
		production: production,
		stone: stone,
		wood: wood,
		ironOre: ironOre,
		buildTime: buildTime,
	});
}
