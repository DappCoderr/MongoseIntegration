import express from "express"
import authSignUp from "./auth.router"
const route = express.Router();

route.use('/auth', authSignUp);

export default route
