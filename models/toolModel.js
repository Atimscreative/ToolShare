const mongoose = require("mongoose");

const toolSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Provide a title for your tool"],
    },
    description: String,
    category: {
      type: String,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId, //(ref User)
      ref: "User",
      required: true,
    },
    available: {
      type: Boolean,
      default: true,
    },
    location: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Tool = mongoose.model("Tool", toolSchema);
module.exports = Tool;
