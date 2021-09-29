var express = require("express");
var mongoose = require("mongoose");
var path = require("path");
var userRouter = require("./routes/users");
var indexRouter = require("./routes/index");

mongoose.connect(" mongodb://localhost/userDiary", (err) => {
  console.log(err ? err : "connected");
});

//
var app = express();

//inbuilt middlewere
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//static
app.use(express.static(path.join(__dirname, "public")));

//Routing middlewere
app.use("/users", userRouter);
app.use("/", indexRouter);

//404 error
app.use((req, res, next) => {
  res.send("404 Page not found");
});

//custum error
app.use((err, req, res, next) => {
  res.send(err);
});

// server
app.listen(3002, () => {
  console.log("Server listen at port 3002");
});
