import React  from "react";
import {  useSelector } from "react-redux";
import SawmillImage from "../images/Sawmill.png"
import stoneMine from "../images/stoneMine.png"
import ironOreMine from "../images/ironOreMine.png"
import Building from "./Building";


const Buildings = () => {
	const town = useSelector((state) => state.town.town);

  return (
   <>
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
      buildingName="Sawmill"
      buildingImage={SawmillImage}
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
         buildingName="stoneMfafwaine"
         buildingImage={stoneMine}
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
         buildingImage={ironOreMine}
      />
   </>
  )
}

export default Buildings