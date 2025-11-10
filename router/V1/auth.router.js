import express from "express"
import { signIn } from "../../controller/auth.controller.js";
import { signUp } from "../../controller/auth.controller.js";
import {verifyUserRequest} from "../../middleWare/VerifyUserRequest.mw.js"

const route = express.Router();

route.post('/signup', verifyUserRequest, signUp);
route.post('/signin', signIn);

export default route;
