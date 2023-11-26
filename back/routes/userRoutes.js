import express from "express";
import User from "../models/userModel.js";
import mongoose from "mongoose";
import Sawmill from "../models/buildingsModels/sawmillModel.js";
import StoneMine from "../models/buildingsModels/stoneMineModel.js";
import IronOreMine from "../models/buildingsModels/ironOreMineModel.js";
import ArmyModel from "../models/armyModel.js";
import BarrackModel from "../models/barrackModel.js";
import Resources from "../models/resourcesModel.js";

const router = express.Router();
router.post("/createaccount", async (req, res) => {
  const user = req.body;

  const val = await User.find({ email: user.email });
  console.log("HERE");
  console.log(val);
  var flag = true;
  if (val.length == 0) {
    console.log("HERE");

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

    const userThat = new User({
      ...user,

      ironOreMine: ironOreMine._id,
      sawmill: sawmill._id,
      stoneMine: stoneMine._id,
      barrack: barrack._id,
      army: army._id,
      position: 2,
      resources: resources._id,
    });
    await userThat.save();
    console.log(userThat);
    const token = await userThat.generateAuthToken();
    console.log(token);
    res.cookie("jwt", token, {
      httpOnly: true,
      maxAge: 580000000,
    });
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
    res.cookie("jwt", token, {
      httpOnly: true,
      maxAge: 580000000,
    });
    res.send({ mail, token, id });
  } catch (e) {
    res.status(400).send({ error: "Cannot login" });
  }
});

router.post("/logout", async (req, res) => {
  const myId = JSON.parse(req.body.id);
  const id = mongoose.Types.ObjectId(myId);
  try {
    res.cookie("jwt", "", {
      httpOnly: true,
    });
    const user = await User.findById({ _id: id });
    user.tokens = [];
    user.save();
    res.status(200).send({ text: "Logged Out" });
  } catch (e) {
    res.status(400).send({ error: "Cannot logout" });
  }
});

export default router;
