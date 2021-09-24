var express = require("express");

var router = express.Router();

router.get("/", (req, res) => {
  res.render("user");
});

router.get("/new", (req, res) => {
  res.render("newUser");
});

router.get("/:id", (req, res) => {
  var id = req.params.id;
  res.render("singleUser");
});

router.post("/", (req, res) => {
  req.json(req.body);
});

router.put("/:id", (req, res) => {
  var id = req.params.id;
  res.render("singleUser");
});

router.delete("/:id", (req, res) => {
  var id = req.params.id;
  res.render("singleUser");
});

module.exports = router;
