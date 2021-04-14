const mongoose = require("mongoose");

//my schema
const signUpTemplate = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },

  mobile: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  conform_password: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("mytable", signUpTemplate);
