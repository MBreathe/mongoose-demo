import mongoose, { Schema } from "mongoose";

const PostStatus = {
  PUBLISHED: "PUBLISHED",
  DRAFT: "DRAFT",
};

const postSchema = new Schema({
  status: {
    type: String,
    enum: Object.values(PostStatus),
    required: true,
  },
  title: { type: String, required: true },
  content: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
  published_at: Date,
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const Post = mongoose.model("Post", postSchema);

export default Post;
