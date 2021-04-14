const express = require("express"); //import express
const router = express.Router(); //import router
var request = require("request");

const signUpTemplateCopy = require("../models/Signupmodels"); //importing signupmodelsfileinit...
const bcrypt = require("bcrypt");
//below router will receive an post request from the user and send an response//
router.post("/signup", async (request, response) => {
  ////salt our password
  const saltPassword = await bcrypt.genSalt(10);
  const securePassword = await bcrypt.hash(request.body.password, saltPassword);

  const signedUpUser = new signUpTemplateCopy({
    fullName: request.body.fullName,
    email: request.body.email,
    mobile: request.body.mobile,
    password: securePassword,
    conform_password: securePassword,
  });
  signedUpUser
    .save()
    .then((data) => {
      response.json(data);
    })
    .catch((error) => {
      response.json(error);
    });
});

module.exports = router;
