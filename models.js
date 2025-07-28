import mongoose from "mongoose";
import { Schema } from "mongoose";

// defining enum for status
const PostStatus = {
  PUBLISHED: "PUBLISHED",
  DRAFT: "DRAFT",
};

// defining schemas
const profileSchema = new Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  avatar: String,
  bio: String,
});

const PostSchema = new Schema({
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

const UserSchema = new Schema({
  admin: { type: Boolean, default: false },
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  created_at: { type: Date, default: Date.now },
  profile: profileSchema,
  posts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Post",
    },
  ],
  likes: [
    {
      type: Schema.Types.ObjectId,
      ref: "Like",
    },
  ],
  following: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  followers: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

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

// creating models
const User = mongoose.model("User", UserSchema);
const Post = mongoose.model("Post", PostSchema);
const Like = mongoose.model("Like", LikeSchema);
const Follow = mongoose.model("Follow", FollowSchema);

export { User, Post, Like, Follow };
