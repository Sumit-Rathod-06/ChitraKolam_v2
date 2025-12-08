const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },

  image: { type: mongoose.Schema.Types.ObjectId, ref: "Image", required: true },

  caption: { type: String },

  likesCount: { type: Number, default: 0 },
  commentsCount: { type: Number, default: 0 },

  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Post", postSchema);
