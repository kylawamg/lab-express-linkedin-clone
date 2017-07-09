const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Post = require('./Post');
const userSchema = new Schema({
  username: String,
  password: String,
  name: String,
  email: String,
  summary: String,
  imageUrl: String,
  company: String,
  jobTitle: String,
  posts: [Post.schema]
}, {
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
});

module.exports = mongoose.model("User", userSchema);