// logika ataków ...
import Town from "../models/townModel.js";
import ArmyModel from "../models/armyModel.js";
import express from "express";
import auth from "../middleware/auth.js";


const router = express.Router();
router.post("/kingdom/war", async (req, res) => {
var result;    
var time = 55;
const attacker = await Town.findById({ _id: "638bae692361d1c824dee9ba" })
    const attackerPosition = attacker.position
    const attackerArmy = await ArmyModel.findById({ _id: attacker.army})
    const defender = await Town.findById({_id: "638baeb92361d1c824df6d23" })
    const defenderPosition = defender.position
    const defenderArmy = await ArmyModel.findById({_id : defender.army})
    // position checker to be able to check where it should go :D 
    if(attackerPosition > defenderPosition){
         result = attackerPosition - defenderPosition
    }
    else {
        result = defenderPosition - attackerPosition 
    }
    console.log(result)
    if (result > 100 ){
        time  =36
    }
    else if(result > 10 ){
        time = 45
    }
    console.log(time)

    res.send("Will figght "+ attackerArmy + "\n vs \n" + defenderArmy)
})

// Kingdom ID -> parametr podaje inne ID -> wybiera ilość jednostek jaka idzie na walke -> jednostki idą X czasu (czyli odległość pomiędzy miastami na liście FIND) 
// -> atak ( logika rozpisana na kartce) -> podpisanie nowych ilości jednostek (straty) -> Czy wygrana
//  -> Jeżeli tak to rabują po swoim dostępnym capacity ale MAX 1/3 dostępnych surowców -> wracają  i dostarczają surowce (lub nie wracają bo zginęły - jakiś prosty komunikat zaimplementować)


export default router;
