// // logika ataków ...

// import express from "express";

// import attackVillage from "../middleware/attackingMiddlewares/attackVillage.js";
// const router = express.Router();
// router.post("/kingdom/war", async (req, res) => {
// 	attackVillage(
// 		req.body,
// 		"639ef1a083c306122c97c711",
// 		"639ef2bd83c306122c97c9d1"
// 	);

// 	res.send("Will figght ");
// });

// // Kingdom ID -> parametr podaje inne ID -> wybiera ilość jednostek jaka idzie na walke -> jednostki idą X czasu (czyli odległość pomiędzy miastami na liście FIND)
// // -> atak ( logika rozpisana na kartce) -> podpisanie nowych ilości jednostek (straty) -> Czy wygrana
// //  -> Jeżeli tak to rabują po swoim dostępnym capacity ale MAX 1/3 dostępnych surowców -> wracają  i dostarczają surowce (lub nie wracają bo zginęły - jakiś prosty komunikat zaimplementować)

// export default router;
