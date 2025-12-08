const mongoose = require("mongoose");

const tutorialSchema = new mongoose.Schema({
  title: { type: String, required: true },

  description: { type: String },

  steps: [
    {
      image: { type: String }, // tutorial step image URL
      text: { type: String }
    }
  ],

  level: {
    type: String,
    enum: ["beginner", "intermediate", "advanced"],
    default: "beginner"
  },

  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Tutorial", tutorialSchema);
