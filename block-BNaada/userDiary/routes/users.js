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
  Book.Create(req.body, (err, userRoute) => {
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

module.exports = router;

