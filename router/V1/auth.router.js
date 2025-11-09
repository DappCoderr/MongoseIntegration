const express = require('express');
const route = express.Router();
const authController = require('../../controller/signUp.controller');
const userSignUpRequestMW = require('../../middleWare/VerifyUserRequest.mw');

route.post('/signup', userSignUpRequestMW.verifyUserRequest, authController.signUp);

module.exports = route;
