import { errorCreator } from "../middleware/error.js";
import User from "../models/User.js";

export const updateUser = async (req, res, next) => {
  if (req.params.id === req.user.id) {
    try {
      let newUser = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      return res.status(200).json(newUser);
    } catch (err) {
      return next(err);
    }
  } else {
    return next(errorCreator(404, "you only can update your information"));
  }
};

export const deleteUser = async (req, res, next) => {
  if (req.params.id === req.user.id) {
    try {
      await User.findByIdAndDelete(req.params.id);
      return res.status(200).json({
        success: true,
        message: "your account has been deleted, please login again",
      });
    } catch (err) {
      return next(err);
    }
  } else {
    return next(errorCreator(404, "you only can delete your information"));
  }
};

export const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    return res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};

export const subscribe = async (req, res, next) => {
  try {
    if (req.params.id) {
      await User.findByIdAndUpdate(req.user.id, {
        $push: { subscribeChannels: req.params._id },
      });
      await User.findByIdAndUpdate(req.params, id, {
        $inc: { subscribers: 1 },
      });
    }
    res.status(200).json("channel subscribed");
  } catch (err) {
    next(err);
  }
};

export const unsubscribe = async (req, res, next) => {
  try {
    if (req.params.id) {
      await User.findByIdAndUpdate(req.user.id, {
        $pull: { subscribeChannels: req.params._id },
      });
      await User.findByIdAndUpdate(req.params, id, {
        $inc: { subscribers: -1 },
      });
    }
    res.status(200).json("channel unsubscribed");
  } catch (err) {
    next(err);
  }
};

export const like = async (req, res, next) => {
  try {
  } catch (err) {
    next(err);
  }
};

export const dislike = async (req, res, next) => {
  try {
  } catch (err) {
    next(err);
  }
};
