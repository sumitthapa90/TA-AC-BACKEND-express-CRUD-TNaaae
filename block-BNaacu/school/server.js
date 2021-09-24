var express = require("express");
var mongoose = require("mongoose");
var path = require("path");

//mongoose
mongoose.connect("mongodb://localhost/school", (err) => {
  console.log(err ? err : "Complete data");
});

var app = express();

//middlewrer
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//setup engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//midele

app.use("/", require("./routes/index"));
app.use("/students", require("./routes/students"));

//student routes


//error
app.use((req, res, next) => {
  res.send("404 Page not found");
});

//server listen
app.listen(3000, () => {
  console.log("Server listen at port 3000");
});
