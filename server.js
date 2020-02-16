//Probably need to go back and delete old data & modularize
//use fs module to store and retrive data

//write dependencies
const express = require("express");
const noteData = require("./db.json");
const path = require("path");
const router = require("express").Router();

//put express in a variable and name the port
const app = express();
const PORT = 3011;

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Get Requests HTML

var potato = "POTATO?!?!?";
console.log(potato);

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "index.html"));
// });

app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/notes.html"));
});

//API get requests
app.get("/api/notes", (req, res) => {
  res.json(noteData);
});

//API post request
app.post("/api/notes", (req, res) => {
  console.log(req.body);
  noteData.push(req.body);
  res.json(req.body);
});

//listen for the action
app.listen(PORT, () => {
  console.log(`now listening on localhost: ${PORT}`);
});
