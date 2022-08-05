import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/users.js";
import videoRouter from "./routes/videos.js";
import commentRouter from "./routes/comments.js";
import authRouter from "./routes/auth.js";
import { errHandler } from "./middleware/error.js";
import cookieParser from "cookie-parser";

const port = process.env.PORT || 8800;

dotenv.config();

const app = express();

const connect = () => {
  mongoose
    .connect(process.env.MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("connected to DB");
    })
    .catch((err) => {
      throw err;
    });
};
app.use(cookieParser());
app.use(express.json());
app.use("/api/user", userRouter);
app.use("/api/video", videoRouter);
app.use("/api/comment", commentRouter);
app.use("/api/auth", authRouter);
app.use(errHandler);

app.listen(port, () => {
  connect();
  console.log(`SERVER IS RUNNING ON PORT ${port}`);
});
