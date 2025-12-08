const mongoose = require("mongoose");

const generationSchema = new mongoose.Schema({
  prompt: { type: String, required: true },

  generatedImage: { type: mongoose.Schema.Types.ObjectId, ref: "Image" },

  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Generation", generationSchema);
