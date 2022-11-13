import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTown } from "../store/actions/townActions";
import Building from "../components/Building";
import Army from "../components/Army";
import Logins from "../components/Logins";
import KingdomNavbar from "../components/KingdomNavbar";
import {  Container } from "react-bootstrap";

const Kingdom = () => {
	const town = useSelector((state) => state.town.town);
	const dispatch = useDispatch();
	const userId = localStorage.getItem("userId");



	useEffect(() => {
		dispatch(getTown(localStorage.getItem("userInfo")));
		const interval = setInterval(
			() => {
				dispatch(getTown(localStorage.getItem("userInfo")));
			},

			2000
		);

		return () => clearInterval(interval);
	});

	return (
		<>
			{userId ? (
				<>
				<KingdomNavbar/>
				<Container>
		
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
					<br/>					<h1>Build an army</h1>
						<Army />
					
					
				</Container>
				</>
			) : (
				<Logins />
			)}
		</>
	);
};

export default Kingdom;
