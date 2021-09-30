var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var userSchema = new Schema(
  {
    name: { type: String },
    email: { type: String },
    age: { type: Number },
    address: { type: String },
    bio: { type: String },
    hobbies: { type: String },
  },
  { timestamps: true }
);

var User = mongoose.model("User", userSchema);

module.exports = User;
