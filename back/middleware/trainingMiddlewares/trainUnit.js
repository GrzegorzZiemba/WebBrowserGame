import TrainingQueue from "../../models/trainingQueue.js";
import substractingCost from "../substractingCost.js";
import { horseRider, archer, knight } from "../armyStats.js";
import BuildingQueue from "../../models/buildingModel.js";
import Town from "../../models/townModel.js";
import mongoose from "mongoose";
export async function trainUnit(trainingTown, army, unit, qty){
    var costIron;
    var costWood;
    var costStone;
    var timeToRecruit;
    var recruitmentType;	
	
    if(unit==="knight"){
        costIron = knight.costIronOre * qty;
        costWood = knight.costWood * qty;
        costStone = knight.costStone * qty;
        timeToRecruit = knight.timeBuild ;
        recruitmentType = 'trainingKnightTime'
    }
    if(unit==="archer"){
        costIron = archer.costIronOre * qty;
        costWood = archer.costWood * qty;
        costStone = archer.costStone * qty;
        timeToRecruit = archer.timeBuild ;      
        recruitmentType = ['trainingArcherTime']

    }
    if(unit==="horserider"){
        costIron = horseRider.costIronOre * qty;
        costWood = horseRider.costWood * qty;
        costStone = horseRider.costStone * qty;
        timeToRecruit = horseRider.timeBuild ;
        recruitmentType = 'trainingHorsemanTime'

     
    }
	

	if (
        trainingTown[0].stone > costStone &&
        trainingTown[0].wood > costWood &&
        trainingTown[0].ironOre > costIron
	) {
     
		
        
        if(trainingTown[0]._id){
            const nowBuilding = await TrainingQueue.find({
                townId: trainingTown[0]._id
                });
        
                const newTownStoneAccountancy = trainingTown[0].stone - costStone;
                const newTownWoodAccountancy = trainingTown[0].wood - costWood;
                const newTownironOreAccountancy = trainingTown[0].ironOre - costIron;
                
                
                
                await trainingTown[0].update({
                    stone: newTownStoneAccountancy,
                    wood: newTownWoodAccountancy,
                    ironOre: newTownironOreAccountancy
                })

       
            
            
        
            if(nowBuilding === null){
                const trainingField = new TrainingQueue({townId:trainingTown[0]._id})
                await trainingField.save()
                for (var i = 0; i < qty; i++) trainingField[recruitmentType].push(timeToRecruit);
                await trainingField.save()
            }
            else{
                
                for (var i = 0; i < qty; i++) nowBuilding[0][recruitmentType].push(timeToRecruit);
                    await nowBuilding[0].update({[recruitmentType]: nowBuilding[0][recruitmentType]})
                    
                }
            }}
    else {
        
    }
}   
        