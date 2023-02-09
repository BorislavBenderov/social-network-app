import express from "express";
import {
  deleteUser,
  followUser,
  getUser,
  unfollowUser,
  updateUser,
  getFriends
} from "../controllers/users.js";

const router = express.Router();

router.get("/", getUser);
router.get("/friends/:id", getFriends);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);
router.put("/:id/follow", followUser);
router.put("/:id/unfollow", unfollowUser);

export default router;
