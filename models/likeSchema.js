import { Schema } from "mongoose";

const LikeSchema = new Schema({
  created_at: { type: Date, default: Date.now },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  post: {
    type: Schema.Types.ObjectId,
    ref: "Post",
    required: true,
  },
});

export default LikeSchema;
