import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

import authRoutes from "./routes/auth.routes.js";
import connectDB from "./db/dbConn.js";

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

connectDB();

app.use(express.json());

app.use("/api/auth", authRoutes);



mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
  app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
});
