var express = require("express");
var mongoose = require("mongoose");
var path = require("path");
var indexRouter = require("./routes/index");
var bookRouter = require("./routes/books");

mongoose.connect(" mongodb://localhost/bookstore", (err) => {
  console.log(err ? err : "complete data ");
});

var app = express();

//set view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: false }));

//in built middlewere
app.use(express.static(path.join(__dirname, "public")));

//
app.use("/", indexRouter);
app.use("/books", bookRouter);

//error 404
app.use((req, res, next) => {
  res.send("404 Page not Found");
});

// custom error
app.use((err, req, res, next) => {
  res.send(err);
});

app.listen(3004, () => {
  console.log("Server listen at port 3004");
});
