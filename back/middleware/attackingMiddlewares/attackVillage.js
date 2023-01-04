import Town from "../../models/townModel.js";
import ArmyModel from "../../models/armyModel.js";
import auth from "../auth.js";
import { archer, knight, horseRider } from "../armyStats.js";
import attackingUnit from "./attackingUnit.js";

export default async function attackVillage(units, attackerId, defenderId) {
	var result;
	var time = 45;
	const attacker = await Town.findById({ _id: attackerId });
	const attackerPosition = attacker.position;
	const attackerArmy = await ArmyModel.findById({ _id: attacker.army });
	const defender = await Town.findById({ _id: defenderId });
	const defenderPosition = defender.position;
	const defenderArmy = await ArmyModel.findById({ _id: defender.army });
	// position checker to be able to check where it should go :D
	if (attackerPosition > defenderPosition) {
		result = attackerPosition - defenderPosition;
	} else {
		result = defenderPosition - attackerPosition;
	}
	console.log(result);
	if (result > 100) {
		time = 26;
	} else if (result > 10) {
		time = 35;
	}

	const sendedKnights = units.knight;
	let attackingKnights = attackerArmy.knigth;

	const sendedArchers = units.archer;
	let attackingArchers = attackerArmy.archer;
	const sendedHorsemans = units.horseRider;
	let attackingHorsemans = attackerArmy.horseRider;

	if (
		sendedKnights < attackingKnights &&
		sendedArchers < attackingArchers &&
		sendedHorsemans < attackingHorsemans
	) {
		console.log("LETS GO ! ");
		attackingKnights = sendedKnights;
		attackingArchers = sendedArchers;
		attackingHorsemans = sendedHorsemans;
		attackingUnit(
			defenderArmy,
			attackingKnights,
			attackingArchers,
			attackingHorsemans
		);
	} else {
		console.log("TO MUCH UNITS MY LEAGE");
	}
	console.log((time * result) / 60 + " that long it should take in minutes");

	// // if time passes /\

	// const defendingKnights = defenderArmy.knigth
	// const defendingArchers = defenderArmy.archer
	// const defendingHorsemans = defenderArmy.horseRider

	// // fight simulation

	// console.log(attackingKnights * knight.strength + "  vs  " + defendingKnights* knight.strength)
	// console.log(attackingArchers * archer.strength + "  vs  " + defendingArchers * archer.strength)
	// console.log(attackingHorsemans * horseRider.strength + "  vs  " + defendingHorsemans * horseRider.strength)

	// // strenght of attack
	// let strenghtOfAttackingUnits = (attackingKnights * knight.strength) + (attackingArchers * archer.strength) + (attackingHorsemans * horseRider.strength)
	// let strenghtOfDefendingUnits = (defendingKnights * knight.strength) + (defendingArchers * archer.strength) + (defendingHorsemans * horseRider.strength)

	// console.log(strenghtOfAttackingUnits)
	// console.log(strenghtOfDefendingUnits)

	// let healthAttackingUnits = (attackingKnights * knight.health)  + (attackingArchers * archer.health) + (attackingHorsemans * horseRider.health)
	// let healthDefendingUnits = (defendingKnights * knight.health)  + (defendingArchers * archer.health)  +(defendingHorsemans * horseRider.health)

	// console.log("Health of units ")
	// console.log(healthAttackingUnits)
	// console.log(healthDefendingUnits)

	// for(let i = 1 ; i<4; i++ ){
	//     console.log(`Defender gets ${strenghtOfAttackingUnits} hp from attacking units and left ${healthDefendingUnits - strenghtOfAttackingUnits}/ ${healthDefendingUnits}`)
	//     if(defendingKnights > 0){
	//         let knightHealth = defendingKnights * knight.health
	//         let remainingKnightHealth = knightHealth - strenghtOfAttackingUnits;
	//         console.log("round "  + i)
	//         console.log(`${Math.floor(strenghtOfAttackingUnits / 80)} unfortunately dead so and 1 got injured for ${Math.floor(strenghtOfAttackingUnits / 80) * 80 - strenghtOfAttackingUnits}`)

	//     }

	//     console.log(`Defender gets ${strenghtOfDefendingUnits} hp from attacking units and left ${healthAttackingUnits - strenghtOfDefendingUnits}/ ${healthAttackingUnits}`)
	// }
}

// defense and helth check
