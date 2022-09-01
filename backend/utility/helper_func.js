const Question = require("../models/question");

const insertAllData = (dataArray) => {
  Question.insertMany(dataArray);
};

module.exports = insertAllData;
