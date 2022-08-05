import express from "express";
import {
  deleteUser,
  dislike,
  getUser,
  like,
  subscribe,
  unsubscribe,
  updateUser,
} from "../controllers/user.js";
import { verifyToken } from "../middleware/verifyToken.js";
const router = express.Router();

//update user
router.put("/:id", verifyToken, updateUser);

//delete user
router.delete("/:id", verifyToken, deleteUser);

//get user
router.get("/find/:id", getUser);

//subscribe
router.put("/sub:id", verifyToken, subscribe);

//unsubscribe
router.put("/unsub:id", verifyToken, unsubscribe);

//like
router.put("/like/:videoid", verifyToken, like);

//dislike
router.put("/dislike/:videoid", verifyToken, dislike);

export default router;
