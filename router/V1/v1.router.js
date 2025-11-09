const express = require('express');
const authSignUp = require('./auth.router');
const route = express.Router();

route.use('/auth', authSignUp);

module.exports = route;
