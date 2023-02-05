import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";

const app = express();
dotenv.config();


app.listen(8800, () => {
  console.log("Server listening!");
});
