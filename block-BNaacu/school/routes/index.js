var express = require("express");

var router = express.Router();

//General routes
router.get("/", (req, res) => {
  res.render("index");
});

module.exports = router;
