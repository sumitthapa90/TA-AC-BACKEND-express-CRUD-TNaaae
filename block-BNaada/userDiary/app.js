var express = require("express");
var mongoose = require("mongoose");
var path = require("path");
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

mongoose.connect(" mongodb://localhost/userDiary", (err) => {
  console.log(err ? err : "conneted");
});

var app = express();

//Set up engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//middlewere
app.use(express.urlencoded({ extended: false }));

//static
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);

//404 error

app.use((req, res, next) => {
  res.send("404 Page not found");
});
//custome error
app.use((err, req, res, next) => {
  res.send(err);
});
//server
app.listen(3000, () => {
  console.log("Server listen at port 3000");
});
