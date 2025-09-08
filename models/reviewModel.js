const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  tool: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Tool",
    required: [true, "Please provide tool ID"],
  },
  reviewer: {
    type: mongoose.Schema.Types.ObjectId, //(ref User)
    ref: "User",
    required: [true, "Please provide Reviewer(USER) ID"],
  },
  rating: {
    type: Number,
    required: [true, "Please provide a rating"],
    min: [1, "Rating must be above 1.0"],
    max: [5, "Rating must be below 5.0"],
  },
  comment: {
    type: String,
    required: [true, "Please write a comment"],
    maxLength: [250, "Comment must be 250 characters (MAX) "],
  },
});

const Review = mongoose.model("Review", reviewSchema);
module.exports = Review;
