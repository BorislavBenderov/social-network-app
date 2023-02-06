import express from "express";
import {
  createPost,
  deletePost,
  getPost,
  likePost,
  timelinePosts,
  updatePost,
} from "../controllers/posts";

const router = express.Router();

router.get("/:id", getPost);
router.post("/", createPost);
router.put("/:id", updatePost);
router.delete("/:id", deletePost);
router.put("/:id/like", likePost);
router.get("/timeline/all", timelinePosts);

export default router;
