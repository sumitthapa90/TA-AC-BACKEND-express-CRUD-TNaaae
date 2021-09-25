var express = require("express");
var router = express.Router();
var User = require("../model/users");

router.get("/", (req, res) => {
  res.render("userlist");
});

router.get("/new", (req, res) => {
  res.render("adduser");
});

router.post("/", (req, res) => {
  res.send(req, body);
  User.create(req.body, (err, userCreate) => {
    if (err) return next(err);
    res.redirect("/user");
  });
});

module.exports = router;
