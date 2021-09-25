var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var userSchema = new Schema(
  {
    name: { type: String, required: true },
    username: { type: String },
    Email: { type: String, required: true, match: /@/ },
    age: { type: Number, min: 18 },
  },
  { timestamps: true }
);

var User = mongoose.model("User", userSchema);

module.exports = User;
