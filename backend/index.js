const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

const questions = [
  {
    category: "Film & TV",
    id: "625740469da29df7b05f73d1",
    correctAnswer:
      "Two men searching for work in 1920s Mexico convince an old prospector to help them mine for gold.",
    incorrectAnswers: [
      "Historical events unfold from the perspective of an Alabama man with an IQ of 75.",
      "A skilled forger and conman is pursued by an FBI agent.",
      "After his son is captured and taken to Sydney, a clownfish sets out on a journey to bring him home.",
    ],
    question: "What is the plot of the movie The Treasure of the Sierra Madre?",
    tags: ["film", "film_and_tv"],
    type: "Multiple Choice",
    difficulty: "hard",
    regions: [],
  },
  {
    category: "Science",
    id: "622a1c3a7cc59eab6f951020",
    correctAnswer: "Low Blood Pressure",
    incorrectAnswers: ["Tight Muscles", "Torn Ligaments", "Weak Tendons"],
    question: "What Would You Suffer From With Hypotension?",
    tags: ["science"],
    type: "Multiple Choice",
    difficulty: "hard",
    regions: [],
  },
  {
    category: "Film & TV",
    id: "622a1c377cc59eab6f9506f9",
    correctAnswer: "Matthew McConaughey",
    incorrectAnswers: ["Ryan Reynolds", "Jim Carrey", "Hugh Jackman"],
    question:
      "Which actor has featued in films including The Wolf of Wall Street and Dallas Buyers Club?",
    tags: ["film_and_tv"],
    type: "Multiple Choice",
    difficulty: "medium",
    regions: [],
  },
  {
    category: "Film & TV",
    id: "622a1c347cc59eab6f94f8fc",
    correctAnswer: "Jaye Davidson",
    incorrectAnswers: ["Dennis Hopper", "Sean Penn", "Samuel L. Jackson"],
    question: "Which actor played the role of Dil in The Crying Game?",
    tags: ["people", "acting", "film", "film_and_tv"],
    type: "Multiple Choice",
    difficulty: "hard",
    regions: [],
  },
  {
    category: "Film & TV",
    id: "622a1c377cc59eab6f95076d",
    correctAnswer: "Dan Aykroyd",
    incorrectAnswers: ["Danny Glover", "Danny Trejo", "Dustin Hoffman"],
    question:
      "Which actor has featured in films including The Nanny and Ghostbusters?",
    tags: ["acting", "film", "film_and_tv"],
    type: "Multiple Choice",
    difficulty: "hard",
    regions: [],
  },
  {
    category: "General Knowledge",
    id: "622a1c367cc59eab6f9503c4",
    correctAnswer: "Atom Bombs",
    incorrectAnswers: ["Race Horses", "World War 2 Agents", "Intel CPU Names"],
    question: "What were 'Little Boy' and 'Fat Man'?",
    tags: ["general_knowledge"],
    type: "Multiple Choice",
    difficulty: "medium",
    regions: [],
  },
  {
    category: "Music",
    id: "625064e4e12f6dec240bdfd5",
    correctAnswer: "Whoomp! (There It Is)",
    incorrectAnswers: ["Electric Avenue", "Barbie Girl", "I Melt With You"],
    question: "What song did Tag Team have a hit with in 1993?",
    tags: ["songs", "one_hit_wonders", "music"],
    type: "Multiple Choice",
    difficulty: "hard",
    regions: [],
  },
  {
    category: "Film & TV",
    id: "625740f69da29df7b05f7405",
    correctAnswer: "Rocky",
    incorrectAnswers: ["Amélie", "The Deer Hunter", "Schindler's List"],
    question:
      "Name the movie that matches the following plot summary: 'A small-time boxer gets a chance to fight the world heavyweight champion.'",
    tags: ["film", "film_and_tv"],
    type: "Multiple Choice",
    difficulty: "easy",
    regions: [],
  },
  {
    category: "Science",
    id: "622a1c3a7cc59eab6f95108a",
    correctAnswer: "Cuckoo",
    incorrectAnswers: ["Sparrow", "Stork", "Vulture"],
    question: "Which bird lays its eggs in the nests of other birds? ",
    tags: ["science"],
    type: "Multiple Choice",
    difficulty: "medium",
    regions: [],
  },
  {
    category: "Music",
    id: "622a1c387cc59eab6f950b48",
    correctAnswer: "Imagine Dragons",
    incorrectAnswers: [
      "Collective Soul",
      "Three 6 Mafia",
      "The Velvet Underground",
    ],
    question: "Which American pop rock band released the song 'Believer'?",
    tags: ["music"],
    type: "Multiple Choice",
    difficulty: "hard",
    regions: [],
  },
];

app.get("/", (request, response) => {
  response.send("<h1>Hello World!</h1>");
});
app.get("/api/questions", (request, response) => {
  response.json(questions);
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
