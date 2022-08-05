import mongoose from "mongoose";
const { Schema } = mongoose;

const VideoSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    videoUrl: {
      type: String,
      required: true,
    },
    imgUrl: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    tags: {
      type: [String],
      default: [],
    },
    likes: {
      type: [String],
      default: [],
    },
    dislikes: {
      type: [String],
      default: [],
    },
  },
  { timeseries: true }
);

export default mongoose.model("Video", VideoSchema);
