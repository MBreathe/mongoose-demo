import { Schema } from "mongoose";

const profileSchema = new Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  avatar: String,
  bio: String,
});

export default profileSchema;
