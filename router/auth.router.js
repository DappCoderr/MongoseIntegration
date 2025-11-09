const express = require('express');
const route = express.Router();
const authController = require('../controller/auth.controller');
const userSignUpRequestMW = require('../middleWare/VerifyUserRequest.mw');

route.post('/auth/signup', userSignUpRequestMW.verifyUserRequest, authController.signUp);

module.exports = route;
