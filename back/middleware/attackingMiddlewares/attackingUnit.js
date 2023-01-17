import { archer, knight, horseRider } from "../armyStats.js";
import ArmyModel from "../../models/armyModel.js";

export default async function attackingUnit(
	defenderArmy,
	attackingKnights,
	attackingArchers,
	attackingHorsemans,
	attackedId,
	defenderId
) {
	// if time passes /\

	// assigning units to variables
	var defendingKnights = defenderArmy.knigth;
	var defendingArchers = defenderArmy.archer;
	var defendingHorsemans = defenderArmy.horseRider;
	var attackingKnights = attackingKnights;
	var attackingArchers = attackingArchers;
	var attackingHorsemans = attackingHorsemans;

	// fight simulation

	// strenght of attacking units
	let strenghtOfAttackingUnits =
		attackingKnights * knight.strength +
		attackingArchers * archer.strength +
		attackingHorsemans * horseRider.strength;
	// strenght of defending units
	let strenghtOfDefendingUnits =
		defendingKnights * knight.strength +
		defendingArchers * archer.strength +
		defendingHorsemans * horseRider.strength;

	// recalucalte that strengh to another variable to be able to check loses
	let remainingStrengthOfAttackingUnits = strenghtOfAttackingUnits;
	let remainingStrengthOfDefendingUnits = strenghtOfDefendingUnits;

	// starting find simulation
	for (let i = 1; i < 4; i++) {
		// checking if units can find (if is there any units on attacking or defending army)
		if (
			(defendingKnights == 0 &&
				defendingArchers == 0 &&
				defendingHorsemans == 0) ||
			(attackingArchers == 0 &&
				attackingKnights == 0 &&
				attackingHorsemans == 0)
		) {
			return;
		} else {
			// DEFENDING lOSES - how much units defending units lost
			if (strenghtOfDefendingUnits > 0) {
				if (defendingKnights > 0) {
					let knightHealth = defendingKnights * knight.health;
					let remainingDefendingKnightsHealth =
						knightHealth - remainingStrengthOfAttackingUnits;
					let remainingDefendingKnights = Math.ceil(
						remainingDefendingKnightsHealth / knight.health
					);
					console.log(defendingKnights + " qty");
					defendingKnights =
						remainingDefendingKnights < 0 ? 0 : remainingDefendingKnights;

					if (defendingKnights == 0) {
						remainingStrengthOfAttackingUnits =
							remainingStrengthOfAttackingUnits - knightHealth;
					} else {
						remainingStrengthOfAttackingUnits = 0;
					}
				}

				if (defendingArchers > 0 && remainingStrengthOfAttackingUnits > 0) {
					let knightHealth = defendingArchers * archer.health;
					let remainingDefendingArchersHealth =
						knightHealth - remainingStrengthOfAttackingUnits;
					let remainingDefendingArchers = Math.ceil(
						remainingDefendingArchersHealth / archer.health
					);

					defendingArchers =
						remainingDefendingArchers < 0 ? 0 : remainingDefendingArchers;

					if (defendingArchers == 0) {
						remainingStrengthOfAttackingUnits =
							remainingStrengthOfAttackingUnits - knightHealth;
					} else {
						remainingStrengthOfAttackingUnits = 0;
					}
				}
				if (defendingHorsemans > 0 && remainingStrengthOfAttackingUnits >= 0) {
					let knightHealth = defendingHorsemans * horseRider.health;
					let remainingDefendingHordefendingHorsemansHealth =
						knightHealth - remainingStrengthOfAttackingUnits;
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
			// end of DEFENDING LOSES

			///////////

			// ATTACKING lOSES - how much units ATTACKING units lost

			if (strenghtOfAttackingUnits > 0) {
				if (attackingKnights > 0) {
					let knightHealth = attackingKnights * knight.health;
					let remainingAttackingKnightsHealth =
						knightHealth - remainingStrengthOfDefendingUnits;
					let remainingAttackingKnights = Math.ceil(
						remainingAttackingKnightsHealth / knight.health
					);

					attackingKnights =
						remainingAttackingKnights < 0 ? 0 : remainingAttackingKnights;

					if (attackingKnights == 0) {
						remainingStrengthOfDefendingUnits =
							remainingStrengthOfDefendingUnits - knightHealth;
					} else {
						remainingStrengthOfDefendingUnits = 0;
					}
				}
				if (attackingArchers > 0 && remainingStrengthOfDefendingUnits >= 0) {
					let knightHealth = attackingArchers * archer.health;
					let remainingAttackingArchersHealth =
						knightHealth - remainingStrengthOfDefendingUnits;
					let remainingAttackingArchers = Math.ceil(
						remainingAttackingArchersHealth / archer.health
					);

					attackingArchers =
						remainingAttackingArchers < 0 ? 0 : remainingAttackingArchers;
					if (attackingArchers == 0) {
						remainingStrengthOfDefendingUnits =
							remainingStrengthOfDefendingUnits - knightHealth;
					} else {
						remainingStrengthOfDefendingUnits = 0;
					}
				}
				if (attackingHorsemans > 0 && remainingStrengthOfDefendingUnits >= 0) {
					let knightHealth = attackingHorsemans * horseRider.health;
					let remainingAttackingHorsemansHealth =
						knightHealth - remainingStrengthOfDefendingUnits;
					let remainingAttackingHorsemans = Math.ceil(
						remainingAttackingHorsemansHealth / horseRider.health
					);

					attackingHorsemans =
						remainingAttackingHorsemans < 0 ? 0 : remainingAttackingHorsemans;
					if (attackingHorsemans == 0) {
						remainingStrengthOfDefendingUnits =
							remainingStrengthOfDefendingUnits - knightHealth;
					} else {
						remainingStrengthOfDefendingUnits = 0;
					}
				}
			}
			// END OF ATTACKING lOSES
		}

		// find armys - what armies and id they have
		const defender = await ArmyModel.findById({ _id: defenderId });
		const attacker = await ArmyModel.findById({ _id: attackedId });
		//end find armys

		////////////

		// defender unit lost
		await defender.update({
			archer: defendingArchers,
			knigth: defendingKnights,
			horseRider: defendingHorsemans,
		});

		await defender.save();

		// end of defender units lost\

		////////////////

		// attacker units lost

		console.log(attacker.knigth + attackingKnights);

		// end of attacker units lost
	}
}
