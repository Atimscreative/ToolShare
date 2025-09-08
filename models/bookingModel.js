const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    tool: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tool",
      required: [true, "Please provide tool ID"],
    },
    borrower: {
      type: mongoose.Schema.Types.ObjectId, //(ref User)
      ref: "User",
      required: true,
    },
    startDate: {
      type: Date,
      required: [true, "Provide a start date"],
      get: (val) => val.toISOString(),
    },
    endDate: {
      type: Date,
      required: [true, "Provide a start date"],
      get: (val) => val.toISOString(),
    },
    status: {
      type: String,
      enums: {
        values: ["pending", "approved", "rejected"],
        message: "Booking status can only be 'pending, approved, rejected'",
      },
      default: "pending",
    },
  },
  {
    timestamps: true,
    toJSON: { getters: true }, // ensures getters are applied in JSON
    toObject: { getters: true },
  }
);

const Booking = mongoose.model("Booking", bookingSchema);
module.exports = Booking;
