import express from "express";
import { createTicket, getAllTicketsByUserId } from "../../controller/ticket.controller.js";
import { verifyToken, isAdmin } from "../../middleWare/adminAuth.mw.js";
import { getAllTickets } from "../../controller/ticket.controller.js";
import { updateTicketById } from "../../controller/ticket.controller.js";

const route = express.Router()

route.get("/", verifyToken, isAdmin, getAllTickets)
route.get("/:id", verifyToken, getAllTicketsByUserId)
route.post("/create", verifyToken, createTicket)
route.put("/update/:id", verifyToken, isAdmin, updateTicketById)

export default route