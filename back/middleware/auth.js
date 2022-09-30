import jwt from "jsonwebtoken";
import User from "../models/userModel.js";
import * as dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();
const auth = async (req, res, next) => {
	try {
		console.log(req.header("Authorization"));
		const token = req.header("Authorization").replace("Bearer", "");
		console.log(token);
		const tokenToVerify = JSON.parse(token);
		console.log(tokenToVerify);

		const decoded = jwt.verify(tokenToVerify, process.env.SECRET_JWT);
		console.log(decoded);
		const user = await User.findOne({
			_id: decoded._id,
			token: token,
		});

		if (!user) {
			throw new Error();
		}
		req.token = token;
		req.user = user;
		next();
	} catch (e) {
		res.send({ error: "PLease Authentiace" });
	}
};

export default auth;
