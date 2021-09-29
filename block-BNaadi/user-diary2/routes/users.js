var express = require("express");
var User = require("../model/user");

var router = express.Router();

router.get("/", (req, res, next) => {
  User.find({}, (err, user) => {
    if (err) return next(err);
    res.render("users", { user: user });
  });
});

router.get("/new", (req, res) => {
  res.render("addForm");
});

router.post("/", (req, res, next) => {
  User.create(req.body, (err, user) => {
    if (err) return next(err);
    res.redirect("/users");
  });
});

router.get("/:id", (req, res, next) => {
  var id = req.params.id;
  User.findById(id, (err, user) => {
    if (err) return next(err);
    res.render("singleUser", { user: user });
  });
});

router.get("/:id/edit", (req, res, next) => {
  var id = req.params.id;
  User.findById(id, (err, user) => {
    if (err) return next(err);
    res.render("editUser", { user });
  });
});

router.post("/:id", (req, res, next) => {
  var id = req.params.id;
  User.findByIdAndUpdate(id, (err, updated) => {
    if (err) return next(err);
    res.render("/users");
  });
});

module.exports = router;
