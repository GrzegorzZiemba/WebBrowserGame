import ArmyModel from "../../models/armyModel.js";
import Town from "../../models/townModel.js";
import TrainingQueue from "../../models/trainingQueue.js"



export default setInterval(async function() {
    const checkQueueLength = await TrainingQueue.countDocuments({});
    
    if(checkQueueLength > 0){
        const queue = await TrainingQueue.find({});

        queue.forEach(async (el)=> {
            if(el.trainingArcherTime.length > 0){
                const archerArray = [...el.trainingArcherTime ];
                archerArray[0] = archerArray[0] - 1
                 
                if(archerArray[0] <= 0){
                    const town  = await Town.findById(el.townId)
                    const army = await ArmyModel.findById(town.army)
                    let archerQty = army.archer + 1 
                    await army.update({archer: archerQty})
                    archerArray.shift()
                     
                    await el.update({
                        trainingArcherTime: archerArray
                    })
                }
                else{
                    await el.update({
                        trainingArcherTime: archerArray
                    })
                }
            }
            if(el.trainingKnightTime.length > 0){
                const knightArray = [...el.trainingKnightTime ];
                knightArray[0] = knightArray[0] - 1
                 
                if(knightArray[0] <= 0){
                    const town  = await Town.findById(el.townId)
                    const army = await ArmyModel.findById(town.army)
                    let knightQty = army.knigth + 1 
                    await army.update({knigth: knightQty})
                    knightArray.shift()
                     
                    await el.update({
                        trainingKnightTime: knightArray
                    })
                }
                else{
                    await el.update({
                        trainingKnightTime: knightArray
                    })
                }
            }
            if(el.trainingHorsemanTime.length > 0){
                const horseManArray = [...el.trainingHorsemanTime ];
                horseManArray[0] = horseManArray[0] - 1
                 
                if(horseManArray[0] <= 0){
                    const town  = await Town.findById(el.townId)
                    const army = await ArmyModel.findById(town.army)
                    let horseManQty = army.horseRider + 1 
                    await army.update({horseRider: horseManQty})
                    horseManArray.shift()
                     
                    await el.update({
                        trainingHorsemanTime: horseManArray
                    })
                }
                else{
                    await el.update({
                        trainingHorsemanTime: horseManArray
                    })
                }
            }
            
           
        })
    }

}, 1000)