const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const imageSchema = new Schema({
  url: String,
  date: { type: Date, default: Date.now }
});

mongoose.model("Image", imageSchema);
module.exports = mongoose.model("Image", imageSchema);
