const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    require: [true, "User must have username"],
    unique: [true, "User must have unique username"],
  },
  password: {
    type: String,
    require: [true, "Post must have password"],
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
