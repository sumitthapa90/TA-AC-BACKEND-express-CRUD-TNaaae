var express = require("express");
var mongoose = require("mongoose");
var path = require("path");
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

mongoose.connect("mongodb://localhost/user-diary2", (err) => {
  console.log(err ? err : "Connected");
});

var app = express();

//inbuilt middlewere

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//css
app.use(express.static(path.join(__dirname, "public")));

//routing middlewere
app.use("/", indexRouter);
app.use("/users", usersRouter);

// error
app.use((req, res, next) => {
  res.send("404 page not found");
});

// custom error
app.use((err, req, res, next) => {
  res.send(err);
});

//server
app.listen(3006, () => {
  console.log("Server listen at port 3006");
});
