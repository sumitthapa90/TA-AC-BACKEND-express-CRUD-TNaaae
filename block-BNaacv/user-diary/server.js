var express = require("express");
var path = require("path");
var userRoute = require("./routes/user");

var app = express();

//middlewere
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//start engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//general routes
app.get("/", (req, res) => {
  res.render("index");
});

app.use("user", userRoute);
//error
app.use((req, res, next) => {
  res.send("404 Page not found");
});

//server
app.listen(3030, () => {
  console.log("Server listen at port 3030");
});
