var express = require("express");
var Book = require("../model/book");

var router = express.Router();

router.get("/", (req, res) => {
  Book.find({}, (err, books) => {
    if (err) return next(err);
    res.render("books", { books: books });
  });
});

router.get("/new", (req, res) => {
  res.render("addForm");
});

router.post("/", (req, res) => {
  //capture the data
  console.log(req.body);
  // save to data base
  Book.create(req.body, (err, createdBook) => {
    if (err) return next(err);
    res.redirect("/books");
  });
  //responce
});
module.exports = router;
