const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide your name"],
    },
    email: {
      type: String,
      required: [true, "Please provide an email"],
      validate: [validator.isEmail, "Please enter a valid email"],
    },
    password: {
      type: String,
      minLength: 8,
      required: true,
      select: false,
    },
    passwordConfirm: {
      type: String,
      required: true,
      validate: {
        validator: function (val) {
          return this.password === val;
        },
      },
    },
    location: String,
    photo: String,
  },
  {
    timestamps: true,
  }
);

// DOC MIDDLEWARE: ENCRYPT THE PASSWORD (HASHING)
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(val, 16);

  this.passwordConfirm = undefined;
});

// INSTANCE METHOD: TO CONFIRM IF USER PROVIDED PASSWORD IS CORRECT
userSchema.methods.correctPassword = function (
  candidatePassword,
  userPassword
) {
  return bcrypt.compare(candidatePassword, userPassword);
};

const User = mongoose.model("User", userSchema);
module.exports = User;
