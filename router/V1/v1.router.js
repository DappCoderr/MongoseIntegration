import express from "express"
import authRoute from "./auth.router.js"
import userRoute from "./user.router.js"

const route = express.Router();

route.use('/auth', authRoute);
route.use('/users', userRoute);

export default route
