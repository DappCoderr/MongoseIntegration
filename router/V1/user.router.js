import express from "express";
import { getAllUser, getUserById, updateUserDetailsById } from "../../controller/user.controller.js";
import { verifyToken, isAdmin } from "../../middleWare/adminAuth.mw.js";
import { verifyUserStatusAndUserType } from "../../middleWare/verifyUserRequest.mw.js";

const route = express.Router()

route.get("/", verifyToken, isAdmin, getAllUser)
route.get("/:id", verifyToken, isAdmin, getUserById)
route.put("/:id", verifyToken, isAdmin, verifyUserStatusAndUserType, updateUserDetailsById)

export default route