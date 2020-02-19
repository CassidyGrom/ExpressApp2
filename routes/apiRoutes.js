const router = require("express").Router();
const noteData = require("../db.json");

router.get("/api/notes", (req, res) => {
  res.json(noteData);
});

router.post("/api/notes", (req, res) => {
  req.body.id = noteData.length;
  console.log(req.body);
  noteData.push(req.body);
  res.json(req.body);
});

module.exports = router;
