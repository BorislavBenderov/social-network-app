import express, { json } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import userRoute from "./routes/users.js";
import authRoute from "./routes/auth.js";
import postRoute from "./routes/posts.js";

const app = express();
dotenv.config();

mongoose.set("strictQuery", false);

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true }, () => {
  console.log("Connected to MongoDB");
});

//middleware
app.use(cors());
app.use(json());
app.use(helmet());
app.use(morgan("common"));

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);

app.listen(8800, () => {
  console.log("Server listening!");
});
