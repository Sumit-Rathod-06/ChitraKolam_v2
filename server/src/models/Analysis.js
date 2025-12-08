const mongoose = require("mongoose");

const analysisSchema = new mongoose.Schema({
  imageId: { type: mongoose.Schema.Types.ObjectId, ref: "Image", required: true },

  symmetryScore: Number,
  shapeDetected: [String],      // Example: ["circle", "dots", "flower"]
  colorDistribution: Object,    // { red: %, blue: %, green: % }

  aiDescription: String,        // AI-generated summary

  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Analysis", analysisSchema);
