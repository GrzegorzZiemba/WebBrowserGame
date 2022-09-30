import express from "express";
import * as dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
dotenv.config();
import "./mongodb/mongodb.js";
import userRoutes from "./routes/userRoutes.js";
import townRoutes from "./routes/townRoutes.js";
import recruitingRoutes from "./routes/recruitingRoutes.js";
import queue from "./middleware/checkQueue.js";
//production working \/
import production from "./middleware/production.js";

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cors());
app.use(userRoutes);
app.use(townRoutes);
app.use(recruitingRoutes);

const port = process.env.PORT || 4000;

console.log(port);
app.listen(port, () => console.log("Working !"));
