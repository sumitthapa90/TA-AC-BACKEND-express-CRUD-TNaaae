var express = require("express");
var mongoose = require("mongoose");
var path = require("path");
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

//mongoose
mongoose.connect(" mongodb://localhost/user-diary", (err) => {
  console.log(err ? err : "connected True");
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

//inbuilt middlewere
// routing middlewere
app.use("/", indexRouter);
app.use("/users", usersRouter);

//error
app.use((req, res) => {
  res.send("404 page not found");
});
//custom error
app.use((err, req, res, next) => {
  res.send(err);
});
//server
app.listen(3000, () => {
  console.log("Server listen at port 3000");
});
