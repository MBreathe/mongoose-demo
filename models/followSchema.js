import { Schema } from "mongoose";

const FollowSchema = new Schema({
  follower: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  following: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

// adding compound index for the unique follower-following pairs
FollowSchema.index({ follower: 1, following: 1 }, { unique: true });

export default FollowSchema;
