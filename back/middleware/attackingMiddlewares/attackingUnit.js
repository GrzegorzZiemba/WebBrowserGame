import { archer, knight, horseRider } from "../armyStats.js";

export default async function attackingUnit(
	defenderArmy,
	attackingKnights,
	attackingArchers,
	attackingHorsemans
) {
	// if time passes /\

	var defendingKnights = defenderArmy.knigth;
	var defendingArchers = defenderArmy.archer;
	var defendingHorsemans = defenderArmy.horseRider;

	// fight simulation

	console.log(
		attackingKnights * knight.strength +
			"  vs  " +
			defendingKnights * knight.strength
	);
	console.log(
		attackingArchers * archer.strength +
			"  vs  " +
			defendingArchers * archer.strength
	);
	console.log(
		attackingHorsemans * horseRider.strength +
			"  vs  " +
			defendingHorsemans * horseRider.strength
	);

	// strenght of attack
	let strenghtOfAttackingUnits =
		attackingKnights * knight.strength +
		attackingArchers * archer.strength +
		attackingHorsemans * horseRider.strength;
	let strenghtOfDefendingUnits =
		defendingKnights * knight.strength +
		defendingArchers * archer.strength +
		defendingHorsemans * horseRider.strength;

	console.log(strenghtOfAttackingUnits);
	console.log(strenghtOfDefendingUnits);

	let healthAttackingUnits =
		attackingKnights * knight.health +
		attackingArchers * archer.health +
		attackingHorsemans * horseRider.health;
	let healthDefendingUnits =
		defendingKnights * knight.health +
		defendingArchers * archer.health +
		defendingHorsemans * horseRider.health;

	console.log("Health of units ");
	console.log(healthAttackingUnits);
	console.log(healthDefendingUnits);

	for (let i = 1; i < 4; i++) {
		console.log(
			`Defender gets ${strenghtOfAttackingUnits} hp from attacking units and left ${
				healthDefendingUnits - strenghtOfAttackingUnits
			}/ ${healthDefendingUnits}`
		);
		// defending Knights

		if (defendingKnights > 0) {
			let knightHealth = defendingKnights * knight.health;
			let remainingDefendingKnightsHealth =
				knightHealth - strenghtOfAttackingUnits;
			let remainingDefendingKnights = Math.ceil(
				remainingDefendingKnightsHealth / 80
			);
			console.log("round " + i);
			console.log(
				`${Math.floor(
					strenghtOfAttackingUnits / 80
				)} unfortunately dead so and 1 got injured for ${
					Math.floor(strenghtOfAttackingUnits / 80) * 80 -
					strenghtOfAttackingUnits
				}`
			);
			defendingKnights = remainingDefendingKnights;
			console.log(defendingKnights + " LEFT");
		}
		if (attackingKnights > 0) {
			let knightHealth = attackingKnights * knight.health;
			let remainingAttackingKnightsHealth =
				knightHealth - strenghtOfDefendingUnits;
			let remainingAttackingKnights = Math.ceil(
				remainingAttackingKnightsHealth / 80
			);
			console.log("round " + i);
			console.log(remainingAttackingKnights);
			console.log(
				`${Math.floor(
					strenghtOfDefendingUnits / 80
				)} unfortunately dead so and 1 got injured for ${
					Math.floor(strenghtOfDefendingUnits / 80) * 80 -
					strenghtOfDefendingUnits
				}`
			);
			attackingKnights =
				remainingAttackingKnights < 0 ? 0 : remainingAttackingKnights;
			console.log(attackingKnights + " LEFT");
		}

		console.log(
			`Defender gets ${strenghtOfDefendingUnits} hp from attacking units and left ${
				healthAttackingUnits - strenghtOfDefendingUnits
			}/ ${healthAttackingUnits}`
		);
	}
}
