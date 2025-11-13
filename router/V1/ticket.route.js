import express from "express";
import { createTicket, getAllTicketsByUserId } from "../../controller/ticket.controller.js";
import { verifyToken, isAdmin } from "../../middleWare/adminAuth.mw.js";
import { getAllTickets } from "../../controller/ticket.controller.js";

const route = express.Router()

route.post("/create", verifyToken, createTicket)
route.get("/", isAdmin, getAllTickets)
route.get("/:id", verifyToken, getAllTicketsByUserId)
route.get("/update/:id", verifyToken, updateTicketById)

export default route