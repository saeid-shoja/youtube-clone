import Video from "../models/Video.js";

export const createVideo = async (req, res, next) => {
  try {
    const newVideo = new Video(
      {
        ...req.body,
        userId: req.user.id,
      },
      { new: true }
    );
    newVideo.save();
    return res.status(200).json(newVideo);
  } catch (err) {
    next(err);
  }
};

export const updateVideo = async (req, res, next) => {
  try {
    const video = await Video.findOne(req.params.videoId);
    console.log(video);
    await Video.findByIdAndUpdate(
      req.params.videoId,
      {
        $set: req.body,
      },
      {
        new: true,
      }
    );
    return res.status(200).json(video);
  } catch (err) {
    next(err);
  }
};

export const deleteVideo = async (req, res, next) => {
  try {
  } catch (err) {}
};

export const getVideo = async (req, res, next) => {
  try {
  } catch (err) {}
};
