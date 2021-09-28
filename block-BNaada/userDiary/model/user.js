var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var userSchema = new Schema(
  {
    name: { type: String, required: true },
    username: { type: String },
    email: { type: String, match: /@/ },
    age: { type: Number },
  },
  { timestamps: true }
);

var User = mongoose.model("User", userSchema);

module.exports = User;
