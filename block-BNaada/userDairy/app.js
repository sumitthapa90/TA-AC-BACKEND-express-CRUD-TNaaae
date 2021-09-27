var express = require("express");
var mongoose = require("mongoose");
var path = require("path");
var userpath = require("./routes/user");

mongoose.connect(" mongodb://localhost/userDairy", (err) => {
  console.log(err ? err : "Connected data");
});

var app = express();

//inbuilt middlewere
app.use(express.urlencoded({ extended: false }));

//set up engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//middlewere
app.use(express.static(path.join(__dirname, "public")));

app.use("/user", userpath);

//error
app.use((req, res) => {
  res.send("404 Page not found");
});

//custom error
app.use((err, req, res, next) => {
  res.send(err);
});

app.listen(3005, () => {
  console.log("Server Listin at port 3005");
});
