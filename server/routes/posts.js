import express from "express";
import {
  createPost,
  deletePost,
  getAllUserPosts,
  getPost,
  likePost,
  timelinePosts,
  updatePost,
} from "../controllers/posts.js";

const router = express.Router();

router.get("/:id", getPost);
router.post("/", createPost);
router.put("/:id", updatePost);
router.delete("/:id", deletePost);
router.put("/:id/like", likePost);
router.get("/timeline/:userId", timelinePosts);
router.get("/profile/:username", getAllUserPosts);

export default router;
