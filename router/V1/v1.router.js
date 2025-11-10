import express from "express"
import authSignUp from "./auth.router.js"

const route = express.Router();

route.use('/auth', authSignUp);

export default route
