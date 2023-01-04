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
		" Knights " +
			attackingKnights * knight.strength +
			"  vs  " +
			defendingKnights * knight.strength
	);
	console.log(
		" Archers " +
			attackingArchers * archer.strength +
			"  vs  " +
			defendingArchers * archer.strength
	);
	console.log(
		" HorseRiders " +
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

	// let healthAttackingUnits =
	// 	attackingKnights * knight.health +
	// 	attackingArchers * archer.health +
	// 	attackingHorsemans * horseRider.health;
	// let healthDefendingUnits =
	// 	defendingKnights * knight.health +
	// 	defendingArchers * archer.health +
	// 	defendingHorsemans * horseRider.health;

	// console.log("Health of units ");
	// console.log(healthAttackingUnits);
	// console.log(healthDefendingUnits);

	for (let i = 1; i < 4; i++) {
		// console.log(
		// 	`Defender gets ${strenghtOfAttackingUnits} hp from attacking units and left ${
		// 		healthDefendingUnits - strenghtOfAttackingUnits
		// 	}/ ${healthDefendingUnits}`
		// );
		// defending Knights

		if (
			(defendingKnights == 0 &&
				defendingArchers == 0 &&
				defendingHorsemans == 0) ||
			(attackingArchers == 0 &&
				attackingKnights == 0 &&
				attackingHorsemans == 0)
		) {
			console.log("FINISHED ");
			return;
		}

		// DEFENDING lOSES
		else {
			if (strenghtOfDefendingUnits > 0) {
				console.log(strenghtOfDefendingUnits + "STRENGht OF DEFENDING UNITS");
				if (defendingKnights > 0) {
					let knightHealth = defendingKnights * knight.health;
					let remainingDefendingKnightsHealth =
						knightHealth - strenghtOfAttackingUnits;
					let remainingDefendingKnights = Math.ceil(
						remainingDefendingKnightsHealth / knight.health
					);
					console.log(defendingKnights + " qty");
					defendingKnights =
						remainingDefendingKnights < 0 ? 0 : remainingDefendingKnights;

					if (defendingKnights == 0) {
						strenghtOfAttackingUnits = strenghtOfAttackingUnits - knightHealth;
					} else {
						strenghtOfAttackingUnits = 0;
					}
				}

				if (defendingArchers > 0 && strenghtOfAttackingUnits > 0) {
					let knightHealth = defendingArchers * archer.health;
					let remainingDefendingArchersHealth =
						knightHealth - strenghtOfAttackingUnits;
					let remainingDefendingArchers = Math.ceil(
						remainingDefendingArchersHealth / archer.health
					);
					console.log(
						remainingDefendingArchers + " REAMINING DEFENDING ARCHERS"
					);
					defendingArchers =
						remainingDefendingArchers < 0 ? 0 : remainingDefendingArchers;

					if (defendingArchers == 0) {
						strenghtOfAttackingUnits = strenghtOfAttackingUnits - knightHealth;
					} else {
						strenghtOfAttackingUnits = 0;
					}
				}
				if (defendingHorsemans > 0 && strenghtOfAttackingUnits > 0) {
					let knightHealth = defendingHorsemans * horseRider.health;
					let remainingDefendingHordefendingHorsemansHealth =
						knightHealth - strenghtOfAttackingUnits;
					let remainingDefendingHordefendingHorsemans = Math.ceil(
						remainingDefendingHordefendingHorsemansHealth / horseRider.health
					);

					defendingHorsemans =
						remainingDefendingHordefendingHorsemans < 0
							? 0
							: remainingDefendingHordefendingHorsemans;
					if (defendingHorsemans == 0) {
						return;
					}
				}
			}
			console.log(strenghtOfAttackingUnits + " Strength of attacking units");
			if (strenghtOfAttackingUnits > 0) {
				if (attackingKnights > 0) {
					let knightHealth = attackingKnights * knight.health;
					let remainingAttackingKnightsHealth =
						knightHealth - strenghtOfDefendingUnits;
					let remainingAttackingKnights = Math.ceil(
						remainingAttackingKnightsHealth / knight.health
					);
					console.log(attackingKnights + " qty");

					attackingKnights =
						remainingAttackingKnights < 0 ? 0 : remainingAttackingKnights;
					console.log(attackingKnights + " ATTACKIng KNIGHT");
					if (attackingKnights == 0) {
						strenghtOfDefendingUnits = strenghtOfDefendingUnits - knightHealth;
					} else {
						strenghtOfDefendingUnits = 0;
					}
				}
				if (attackingArchers > 0 && strenghtOfDefendingUnits > 0) {
					let knightHealth = attackingArchers * archer.health;
					let remainingAttackingArchersHealth =
						knightHealth - strenghtOfDefendingUnits;
					let remainingAttackingArchers = Math.ceil(
						remainingAttackingArchersHealth / archer.health
					);
					console.log(
						remainingAttackingArchers + " REAMINING DEFENDING ARCHERS"
					);

					attackingArchers =
						remainingAttackingArchers < 0 ? 0 : remainingAttackingArchers;
					if (attackingArchers == 0) {
						strenghtOfDefendingUnits = strenghtOfDefendingUnits - knightHealth;
					} else {
						strenghtOfDefendingUnits = 0;
					}
				}
				if (attackingHorsemans > 0 && strenghtOfDefendingUnits > 0) {
					let knightHealth = attackingHorsemans * horseRider.health;
					let remainingAttackingHorsemansHealth =
						knightHealth - strenghtOfDefendingUnits;
					let remainingAttackingHorsemans = Math.ceil(
						remainingAttackingHorsemansHealth / horseRider.health
					);

					attackingHorsemans =
						remainingAttackingHorsemans < 0 ? 0 : remainingAttackingHorsemans;
					if (attackingHorsemans == 0) {
						strenghtOfDefendingUnits = strenghtOfDefendingUnits - knightHealth;
					} else {
						strenghtOfDefendingUnits = 0;
					}
				}
			}
			console.log(defendingKnights);
			console.log(defendingArchers);
			console.log(defendingHorsemans);

			console.log("====");
			console.log(attackingKnights);
			console.log(attackingArchers);
			console.log(attackingHorsemans);
		}
	}
	console.log(" +++++ Result ++++++");
	console.log(strenghtOfAttackingUnits);
	console.log(strenghtOfDefendingUnits);
}
