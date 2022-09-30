import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { upagradeTown } from "../store/actions/townActions";
import { getTown } from "../store/actions/townActions";
import Login from "../Forms/Login";
import Building from "./Building";
function addSeconds(numOfSeconds, date) {
	date.setSeconds(date.getSeconds() + numOfSeconds);

	return date;
}
const Kingdom = () => {
	let now = new Date();
	const town = useSelector((state) => state.town.town);
	const buildDate = new Date(town.sawmillFinishTime);
	console.log("Ja sie robie ?");
	const dispatch = useDispatch();
	const userId = localStorage.getItem("userId");

	const userToken = localStorage.getItem("userInfo");

	console.log(town);

	useEffect(() => {
		dispatch(getTown(localStorage.getItem("userInfo")));
		console.log("to");
		const interval = setInterval(
			() => {
				now = new Date();
				dispatch(getTown(localStorage.getItem("userInfo")));
			},

			2000
		);

		return () => clearInterval(interval);
	}, []);

	console.log(town);
	return (
		<>
			{userId ? (
				<>
					{" "}
					<div>
						{" "}
						<h2>Wood: {town.wood} </h2>
						<h2>Stone: {town.stone}</h2>
						<h2>IronOre: {town.ironOre}</h2>
					</div>
					<Building
						wood={town.wood}
						stone={town.stone}
						ironOre={town.ironOre}
						costWood={town.sawmillWood}
						costStone={town.sawmillStone}
						costIronOre={town.sawmillIronOre}
						buildingLevel={town.sawmillLevel}
						buildingProduction={town.sawmillProduction}
						buildingIsBuild={town.sawmillIsBuild}
						buildDate={new Date(town.sawmillFinishTime)}
						now={new Date()}
						buildingName="sawmill"
					/>
					<Building
						wood={town.wood}
						stone={town.stone}
						ironOre={town.ironOre}
						costWood={town.stoneMineWood}
						costStone={town.stoneMineStone}
						costIronOre={town.stoneMineIronOre}
						buildingLevel={town.stoneMineLevel}
						buildingProduction={town.stoneMineProduction}
						buildingIsBuild={town.stoneMineIsBuild}
						buildDate={new Date(town.stoneMineFinishTime)}
						now={new Date()}
						buildingName="stoneMine"
					/>
					<Building
						wood={town.wood}
						stone={town.stone}
						ironOre={town.ironOre}
						costWood={town.ironOreMineWood}
						costStone={town.ironOreMineStone}
						costIronOre={town.ironOreMineIronOre}
						buildingLevel={town.ironOreMineLevel}
						buildingProduction={town.ironOreMineProduction}
						buildingIsBuild={town.ironOreMineIsBuild}
						buildDate={new Date(town.ironOreMineFinishTime)}
						now={new Date()}
						buildingName="ironOreMine"
					/>
				</>
			) : (
				<Login />
			)}
		</>
	);
};

export default Kingdom;
