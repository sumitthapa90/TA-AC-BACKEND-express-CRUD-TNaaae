var express = require("express");
var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/sample", (err) => {
  console.log(err ? err : "Complete");
});

var app = express();

//middlewere
app.use(express.json());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname + "views"));

//rought
app.get("/", (req, res) => {
  res.render("index");
});

// error
app.use((req, res, next) => {
  res.send("Page not found");
});

app.listen(5000, () => {
  console.log("Server at port 5000");
});
