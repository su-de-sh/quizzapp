const mongoose = require("mongoose");
require("dotenv").config();

const url = process.env.MONGODB_URI;

mongoose.connect(url).then((res) => console.log("MongoDB connected!!!!!!!!"));

const questionSchema = new mongoose.Schema({
  category: String,

  correctAnswer: String,
  incorrectAnswers: Array,
  question: String,
  tags: Array,
  type: String,
  difficulty: String,
  regions: Array,
});

module.exports = mongoose.model("Question", questionSchema);
