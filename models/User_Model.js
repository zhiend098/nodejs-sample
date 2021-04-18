const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  email: {
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
    type: int,
    default: 0
  },
});

const User = mongoose.model("User", UserSchema);
module.exports = User;