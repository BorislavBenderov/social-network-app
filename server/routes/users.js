import express from "express";
import { deleteUser, getUser, updateUser } from "../controllers/users.js";

const router = express.Router();

router.get("/", getUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;
