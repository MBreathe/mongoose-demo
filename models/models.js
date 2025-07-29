import mongoose from "mongoose";
import UserSchema from "./userSchema.js";
import PostSchema from "./postSchema.js";
import LikeSchema from "./likeSchema.js";
import FollowSchema from "./followSchema.js";

// creating models
const User = mongoose.model("User", UserSchema);
const Post = mongoose.model("Post", PostSchema);
const Like = mongoose.model("Like", LikeSchema);
const Follow = mongoose.model("Follow", FollowSchema);

export { User, Post, Like, Follow };
