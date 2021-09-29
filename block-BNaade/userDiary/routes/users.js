var express = require("express");
var User = require("../modle/user");

var router = express.Router();

router.get("/", (req, res, next) => {
  User.find({}, (err, user) => {
    if (err) return next(err);
    res.render("users.ejs", { user: user });
  });
});

router.get("/new", (req, res) => {
  res.render("addUser");
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
    res.render("sigleUser", { user: user });
  });
});

router.get("/:id/edit", (req, res, net) => {
  var id = req.params.id;
  User.findById(id, (err, user) => {
    if (err) return next(err);
    res.render("editUser", { user });
  });
});

router.post("/:id", (req, res, next) => {
  var id = req.params.id;
  User.findByIdAndUpdate(id, (err, userUpdate) => {
    if (err) return next(err);
    res.render("/users");
  });
});

router.delete("/:id", (req, res) => {
  var id = res.res.id;
  res.send(`The user with Id ${id} has been deleted`);
});

module.exports = router;
