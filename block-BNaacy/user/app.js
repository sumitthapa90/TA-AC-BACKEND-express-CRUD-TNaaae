var express = require("express");
var mongoose = require("mongoose");
var path = require("path");
var indexRouter = require("./routes/index");
var userRouter = require("./routes/user");

mongoose.connect("mongodb://localhost/user", (err) => {
  console.log(err ? err : "complete safe");
});

var app = express();

//setup engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//inbuilt middlewere
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + "/public"));

//handling middlewere
app.use("/", indexRouter);
app.use("/user", userRouter);

//404 error
app.use((req, res, next) => {
  res.send("404 Page not found");
});

//custom error

app.use((err, req, res, next) => {
  res.send(err);
});

//server
app.listen(3050, () => {
  console.log("Server listen at port 3050");
});
