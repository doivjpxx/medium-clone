const mongoose = require("mongoose");
let UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  avatar: String,
  isVerified: { type: Boolean, default: false},
  followers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
  ],
  following: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
  ]
});

module.exports = mongoose.model("User", UserSchema);
