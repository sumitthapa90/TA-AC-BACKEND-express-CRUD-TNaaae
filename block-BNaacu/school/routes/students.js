var express = require("express");

var router = express.router();

router.get("/student/new", (req, res) => {
  res.render("form");
});

router.post("/students", (req, res) => {
  let data = req.body;
  res.send(`${data.name} save `);
});

router.get("/students", (req, res) => {
  res.render("students", { list: ["ankit", "suraj", "prashant", "ravi"] });
});

module.exports = router;
