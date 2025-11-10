import express from "express"
import { signIn, signUp } from "../../controller/auth.controller.js";
import {verifyUserRequest} from "../../middleWare/verifyUserRequest.mw.js"

const route = express.Router();

route.post('/signup', verifyUserRequest, signUp);
route.post('/signin', signIn);

export default route;
