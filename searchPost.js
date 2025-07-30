import Post from "./models/Post.js";
import dbConnect from "./connection.js";
import mongoose from "mongoose";

async function searchPost(query = null) {
  await dbConnect();

  let searchQuery = {};
  if (query) searchQuery.title = new RegExp(query, "i");

  return Post.find(searchQuery);
}

searchPost()
  .then((result) => console.log(result))
  .catch((error) => console.error(error))
  .finally(() => mongoose.connection.close());
