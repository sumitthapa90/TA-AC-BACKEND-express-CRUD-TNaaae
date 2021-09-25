var express = require("express");
var router = express.Router();

router.get("/", (req, res) => {
  res.render("userlist");
});

router.get("/new", (req, res) => {
  res.render("adduser");
});

router.post("/", (req, res) => {
  res.send(req.body);
});

module.exports = router;
