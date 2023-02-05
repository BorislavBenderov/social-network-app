import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";

const app = express();
dotenv.config();

mongoose.set("strictQuery", false);

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true }, () => {
  console.log("Connected to MongoDB");
});

app.listen(8800, () => {
  console.log("Server listening!");
});
