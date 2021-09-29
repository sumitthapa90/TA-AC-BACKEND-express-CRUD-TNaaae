var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var userSchegma = new Schema(
  {
    name: { type: String },
    username: { type: String },
    email: { type: String, required: true },
    age: { type: Number },
  },
  { timestamps: true }
);

var User = mongoose.model("User", userSchegma);

module.exports = User;
