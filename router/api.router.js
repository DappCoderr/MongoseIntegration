const express = require('express')
const v1Router = require('./V1/v1.router')
const route = express.Router()

route.use('/v1', v1Router)

module.exports = route;