const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true,
    lowercase: true
  },
  score: {
    type: Number,
    default: 0
  },
});

const User = mongoose.model("User", UserSchema);
module.exports = User;