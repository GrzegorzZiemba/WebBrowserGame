import express from "express";
import User from "../models/userModel.js";
import mongoose from "mongoose";
import Sawmill from "../models/buildingsModels/sawmillModel.js";
import StoneMine from "../models/buildingsModels/stoneMineModel.js";
import IronOreMine from "../models/buildingsModels/ironOreMineModel.js";
import ArmyModel from "../models/armyModel.js";
import BarrackModel from "../models/barrackModel.js";
import PositionModel from "../models/positionModel.js";
import Resources from "../models/resourcesModel.js";

const router = express.Router();
router.post("/createkingdom", async (req, res) => {
  const user = req.body;

  const val = await User.find({ email: user.email });

  const freePosition = await PositionModel.findById({
    _id: "6558b251050669d4ae32b417",
  });
  var flag = true;
  var availablePosition;
  if (val.length == 0) {
    let numb = 0;
    while (flag) {
      console.log(numb);
      // console.log(freePosition.position.includes(numb));
      console.log(freePosition);
      if (!freePosition?.position?.includes(numb)) {
        const positionArray = [...freePosition.position];
        console.log(positionArray);
        positionArray.push(numb);
        availablePosition = numb;
        await freePosition.update({
          position: positionArray,
        });
        flag = false;
      } else {
        numb++;
      }
    }
    const army = new ArmyModel();
    await army.save();
    const sawmill = new Sawmill();

    await sawmill.save();
    const stoneMine = new StoneMine();
    await stoneMine.save();
    const ironOreMine = new IronOreMine();
    await ironOreMine.save();
    const barrack = new BarrackModel();
    await barrack.save();
    const resources = new Resources();
    await resources.save();

    await town.save();
    const userThat = new User({
      ...user,
      town: town._id,
      ironOreMine: ironOreMine._id,
      sawmill: sawmill._id,
      stoneMine: stoneMine._id,
      barrack: barrack._id,
      army: army._id,
      position: availablePosition,
      resources: resources._id,
    });
    await userThat.save();
    const token = await userThat.generateAuthToken();

    res.status(201).send({ user, token });
  } else {
    res.status(400).send({ error: "You did something Wrung" });
  }
});

router.post("/user/login", async (req, res) => {
  try {
    const user = await User.loginUser(req.body.email, req.body.password);

    const token = await user.generateAuthToken();
    const mail = user.email;
    const id = user._id.toString();

    res.send({ mail, token, id });
  } catch (e) {
    res.status(400).send({ error: "Cannot login" });
  }
});

router.post("/logout", async (req, res) => {
  const myId = JSON.parse(req.body.id);
  const id = mongoose.Types.ObjectId(myId);
  try {
    const user = await User.findById({ _id: id });
    user.tokens = [];
    user.save();
    res.status(200).send({ text: "Logged Out" });
  } catch (e) {
    res.status(400).send({ error: "Cannot logout" });
  }
});

export default router;
