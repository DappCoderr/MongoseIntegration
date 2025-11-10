import express from "express"
import v1Router from "./V1/v1.router"

const route = express.Router();

route.use('/v1', v1Router);

export default route;
