import express from "express";
import {
  createVideo,
  deleteVideo,
  getVideo,
  updateVideo,
} from "../controllers/video.js";
import { verifyToken } from "../middleware/verifyToken.js";
const router = express.Router();

//create video
router.post("/", verifyToken, createVideo);

//update video
router.put("/:videoId", verifyToken, updateVideo);

//delete video
router.delete("/:videoId", verifyToken, deleteVideo);

//get video

router.get("/fins/:videoId", getVideo);

export default router;
