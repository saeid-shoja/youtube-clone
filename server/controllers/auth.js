import mongoose from "mongoose";
import User from "../models/User.js";
import bcrypt from "bcryptjs";
import { errorCreator } from "../middleware/error.js";
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const newUser = new User({
      ...req.body,
      password: hash,
    });
    await newUser.save();
    res.status(200).send("user has been created");
  } catch (err) {
    next(err);
  }
};

export const signin = async (req, res, next) => {
  try {
    const user = await User.findOne({ name: req.body.name });
    if (!user) return next(errorCreator(404, "user not found"));
    const rightPass = await bcrypt.compare(req.body.password, user.password);
    if (!rightPass)
      return next(
        errorCreator(
          400,
          "wrong credentials, please check your user name or password"
        )
      );

    const token = jwt.sign({ id: user._id }, process.env.JWT);
    const { password, ...args } = user._doc;
    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json(args);
  } catch (err) {}
};
