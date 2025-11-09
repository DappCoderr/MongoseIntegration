const express = require('express');
const route = express.Router();
const authController = require('../../controller/auth.controller');
const userSignUpRequestMW = require('../../middleWare/VerifyUserRequest.mw');

route.post('/signup', userSignUpRequestMW.verifyUserRequest, authController.signUp);
route.post('/signin', authController.signIn);

module.exports = route;
