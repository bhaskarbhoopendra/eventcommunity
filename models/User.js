const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");



const UserSchema = new mongoose.Schema({
  username: String,
  password: String
});

UserSchema.plugin(passportLocalMongoose);

module.exports = User = mongoose.model("User", UserSchema);