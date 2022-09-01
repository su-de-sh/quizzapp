const mongoose = require("mongoose");
require("dotenv").config();

const url = process.env.MONGODB_URI;

mongoose.connect(url).then((res) => console.log("MongoDB connected!!!!!!!!"));

const questionSchema = new mongoose.Schema({
  question: String,
  options: Array,
  correct: Number,
});

module.exports = mongoose.model("Question", questionSchema);
