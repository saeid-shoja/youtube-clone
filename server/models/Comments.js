import mongoose from "mongoose";
const { Schema } = mongoose;

const CommentsSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    videoId: {
      type: String,
      required: true,
    },

    description: {
      type: String,
    },
  },
  { timeseries: true }
);

export default mongoose.model("Comments", CommentsSchema);
