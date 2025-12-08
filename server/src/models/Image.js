const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
  url: { type: String, required: true }, // Cloudinary / S3 link

  uploadedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", default: null },

  type: {
    type: String,
    enum: ["explore", "ai_generated", "uploaded", "canvas"],
    required: true
  },

  tags: [String],
  description: { type: String },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Image", imageSchema);
