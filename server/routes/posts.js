import express from "express";
import { createPost } from "../controllers/posts";

const router = express.Router();

router.post("/", createPost);

export default router;
