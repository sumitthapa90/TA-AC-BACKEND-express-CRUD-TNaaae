var express = require("express");
var router = express.Router();
var User = require("../model/user");

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
  User.create(req.body, (err, userRoute) => {
    console.log(req.body);
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
    res.render("editUserForm", { user });
  });
});

module.exports = router;
