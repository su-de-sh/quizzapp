const express = require("express");
const app = express();
const cors = require("cors");
const Question = require("./models/question");
const insertAllData = require("./utility/helper_func");
require("dotenv").config();

app.use(cors());

// TO INSERT BULK DATA INTO DATABASE
// insertAllData(questions);

app.get("/", (request, response) => {
  response.send("<h1>Hello World!</h1>");
});
app.get("/api/questions", async (request, response) => {
  const questions = await Question.find({});
  response.json(questions);
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
