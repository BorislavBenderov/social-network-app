import express, { json } from "express";
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

//middleware
app.use(json());
app.use(helmet());
app.use(morgan("common"));

app.listen(8800, () => {
  console.log("Server listening!");
});
