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

router.get("/:id", (req, res, next) => {
  var id = req.params.id;
  User.findById(id, (err, user) => {
    if (err) return next(err);
    res.render("singleUser", { user });
  });
});

router.get("/:id/edit", (req, res, next) => {
  var id = req.params.id;
  User.findById(id, (err, user) => {
    if (err) return next(err);
    res.render("editForm", { user: user });
  });
});

router.post("/:id/update", (req, res, next) => {
  var id = req.params.id;
  User.findByIdAndUpdate(id, (err, user) => {
    if (err) return next(err);
    res.render("singleUser", { user: user });
  });
});

router.get("/:id/delete", (req, res, next) => {
  User.findByIdAndDelete(req.params.id, (err, user));
  if (err) return next(err);
  res.redirect("/users");
});

module.exports = router;
