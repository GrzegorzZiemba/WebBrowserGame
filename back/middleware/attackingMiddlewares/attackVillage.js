// import Town from "../../models/townModel.js";
// import ArmyModel from "../../models/armyModel.js";
// import auth from "../auth.js";

// import attackingUnit from "./attackingUnit.js";

// export default async function attackVillage(units, attackerId, defenderId) {
// 	var result;
// 	var time = 45;
// 	const attacker = await Town.findById({ _id: attackerId });
// 	const attackerPosition = attacker.position;
// 	const attackerArmy = await ArmyModel.findById({ _id: attacker.army });
// 	const defender = await Town.findById({ _id: defenderId });
// 	const defenderPosition = defender.position;
// 	const defenderArmy = await ArmyModel.findById({ _id: defender.army });
// 	// position checker to be able to check where it should go :D
// 	if (attackerPosition > defenderPosition) {
// 		result = attackerPosition - defenderPosition;
// 	} else {
// 		result = defenderPosition - attackerPosition;
// 	}
// 	console.log(result);
// 	if (result > 100) {
// 		time = 26;
// 	} else if (result > 10) {
// 		time = 35;
// 	}

// 	const sendedKnights = units.knight;
// 	let attackingKnights = attackerArmy.knigth;

// 	const sendedArchers = units.archer;
// 	let attackingArchers = attackerArmy.archer;
// 	const sendedHorsemans = units.horseRider;
// 	let attackingHorsemans = attackerArmy.horseRider;

// 	if (
// 		sendedKnights < attackingKnights &&
// 		sendedArchers < attackingArchers &&
// 		sendedHorsemans < attackingHorsemans
// 	) {
// 		console.log("LETS GO ! ");
// 		attackingKnights = sendedKnights;
// 		attackingArchers = sendedArchers;
// 		attackingHorsemans = sendedHorsemans;
// 		attackingUnit(
// 			defenderArmy,
// 			attackingKnights,
// 			attackingArchers,
// 			attackingHorsemans,
// 			attacker.army,
// 			defender.army
// 		);
// 	} else {
// 		console.log("TO MUCH UNITS MY LEAGE");
// 	}
// 	console.log((time * result) / 60 + " that long it should take in minutes");
// }

// // defense and helth check
