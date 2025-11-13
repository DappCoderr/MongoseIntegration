import express from "express"
import authRoute from "./auth.router.js"
import userRoute from "./user.router.js"
import ticketRoute from "./ticket.route.js"

const route = express.Router();

route.use('/auth', authRoute);
route.use('/users', userRoute);
route.use('/ticket', ticketRoute);

export default route
