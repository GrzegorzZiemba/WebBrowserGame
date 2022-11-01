import React from "react";
import { useDispatch } from "react-redux";
import { upagradeTown } from "../store/actions/townActions";

const Building = ({
	wood,
	stone,
	ironOre,
	costWood,
	costStone,
	costIronOre,
	buildingLevel,
	buildingProduction,
	buildingIsBuild,
	buildDate,
	now,
	buildingName,
}) => {
	const dispatch = useDispatch();
	const userId = localStorage.getItem("userId");
	const isAvailable =
		(wood >= costWood) & (stone >= costStone) & (ironOre >= costIronOre)
			? true
			: false;
	const userToken = localStorage.getItem("userInfo");
	return (
		<div
			style={{
				border: "1px solid black",
				padding: "20px",
				margin: "10px",
			}}
		>
			{buildingName} LEVEL:{buildingLevel} / PRODUCTION:
			{buildingProduction}{" "}
			{buildingIsBuild ? (
				<>
					<h1>Buduje sie</h1>
					<h2>{parseInt((buildDate - now) / 1000, 10)}</h2>
				</>
			) : // TimeChecker(town.sawmillBuildingTime)
			isAvailable ? (
				<button
					onClick={() => {
						dispatch(upagradeTown(userId, userToken, buildingName));
					}}
				>
					Build
				</button>
			) : (
				<>
					<h2>
						Wood: {wood} / {costWood}{" "}
					</h2>
					<h2>
						Stone: {stone} / {costStone}
					</h2>
					<h2>
						IronOre: {ironOre} / {costIronOre}
					</h2>
				</>
			)}
		</div>
	);
};

export default Building;
