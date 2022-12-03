// logika ataków ...
import Town from "../models/townModel.js";
import ArmyModel from "../models/armyModel.js";
import express from "express";
import auth from "../middleware/auth.js";


const router = express.Router();
router.post("/kingdom/war", async (req, res) => {
    console.log("Kingdom War")
    const attacker = await Town.findById({ _id: "634d710f64cf19ea94ed0130" })
    const attackerPosition = await Town.findById({ _id: "634d710f64cf19ea94ed0130" }).count()
    const attackerArmy = await ArmyModel.findById({ _id: attacker.army})
    console.log(attackerPosition)
    const defender = await Town.findById({_id: "635e4870fb44b93b456f42e3" })
    const defenderPosition = await Town.find({_id: "635e4bee664e3d8b0b134f22" }).count()
    const defenderArmy = await ArmyModel.findById({_id : defender.army})
    console.log(defenderPosition)

    res.send("Will figght "+ attackerArmy + "\n vs \n" + defenderArmy)
})

// Kingdom ID -> parametr podaje inne ID -> wybiera ilość jednostek jaka idzie na walke -> jednostki idą X czasu (czyli odległość pomiędzy miastami na liście FIND) 
// -> atak ( logika rozpisana na kartce) -> podpisanie nowych ilości jednostek (straty) -> Czy wygrana
//  -> Jeżeli tak to rabują po swoim dostępnym capacity ale MAX 1/3 dostępnych surowców -> wracają  i dostarczają surowce (lub nie wracają bo zginęły - jakiś prosty komunikat zaimplementować)


export default router;
