var express = require("express");
var User = require("../model/user");

var router = express.Router();

router.get("/", (req, res, next) => {
  User.find({}, (err, users) => {
    if (err) return next(err);
    res.render("users", { users: users });
  });
});

router.get("/new", (req, res) => {
  res.render("addForm");
});

router.post("/", (req, res, next) => {
  console.log(req.body);
  User.create(req.body, (err, user) => {
    console.log(err, user);
    if (err) return next(err);
    res.redirect("/users");
  });
});

module.exports = router;
