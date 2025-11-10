import express from "express"
import { signIn } from "../../controller/auth.controller";
import { signUp } from "../../controller/auth.controller";
import verifyUserRequest from "../../middleWare/VerifyUserRequest.mw"

const route = express.Router();

route.post('/signup', verifyUserRequest, signUp);
route.post('/signin', signIn);

export default route;
