const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please add username"],
    },
    email: {
      type: String,
      required: [true, "Please add email address"],
      unique: [true, "Email address already taken."],
    },
    password: {
      type: String,
      required: [true, "Please add the user password"],
    },
  },
  {
    timestamps: true, // adds createdAt and updatedAt fields to each document in this collection/model
  }
);

module.exports = mongoose.model("User", userSchema);
