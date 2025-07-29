import { Schema } from "mongoose";
import profileSchema from "./profileSchema.js";

const UserSchema = new Schema({
  admin: { type: Boolean, default: false },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
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

export default UserSchema;
