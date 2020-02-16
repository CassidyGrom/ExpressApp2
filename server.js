//Probably need to go back and delete old data & modularize
//use fs module to store and retrive data

//write dependencies
const express = require("express");
const noteData = require("./db.json");
const path = require("path");
const router = require("express").Router();

//put express in a variable and name the port
const app = express();
const PORT = 3008;

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Get Requests HTML

var potato = "POTATO?!?!?";
console.log(potato);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/notes.html"));
});

//API requests

//listen for the action
app.listen(PORT, () => {
  console.log(`now listening on localhost: ${PORT}`);
});
