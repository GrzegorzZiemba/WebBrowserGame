import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
dotenv.config();
import connectDB from "./mongodb/mongodb.js";
import userRoutes from "./routes/userRoutes.js";
// import townRoutes from "./routes/townRoutes.js";
// import recruitingRoutes from "./routes/recruitingRoutes.js";
// import attackRoutes from "./routes/attackRoutes.js";

// import production from "./middleware/production.js";
connectDB();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());
// app.use(recruitingRoutes);
app.use(userRoutes);
// app.use(townRoutes);
// app.use(attackRoutes)
const port = process.env.PORT || 4000;

app.listen(port, () => {});
