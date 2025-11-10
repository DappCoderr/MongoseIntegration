import express from "express";
import { getAllUser, getUserById, updateUserDetailsById } from "../../controller/user.controller.js";
import { adminAuth, isAdmin } from "../../middleWare/adminAuth.mw.js";

const route = express.Router()

route.get("/", adminAuth, isAdmin, getAllUser)
route.get("/:id", adminAuth, isAdmin, getUserById)
route.put("/:id", updateUserDetailsById)

export default route