//Probably need to go back and delete old data & modularize
//use fs module to store and retrive data

//write dependencies
const express = require("express");
const noteData = require("./db.json");
const path = require("path");
const router = require("express").Router();
const htmlRoutes = require("./routes/htmlRoutes");
const apiRoutes = require("./routes/apiRoutes");

//put express in a variable and name the port
const app = express();
const PORT = 3011;

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//Get Requests HTML

//API post request
app.use(apiRoutes);
app.use(htmlRoutes);

//listen for the action
app.listen(PORT, () => {
  console.log(`now listening on localhost: ${PORT}`);
});
