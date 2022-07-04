import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  Avatar: String,
  Name: String,
  Image: String,
  Description: String,
  likeCount: {
    type: Number,
    default: 0,
  },
});

const PostMessage = mongoose.model("PostMessage", postSchema);

export default PostMessage;
