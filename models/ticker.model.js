import mongoose from "mongoose";
import { constant } from "../utils/constant";

const ticketSchema = new mongoose.Schema({
    title : {
        type: String,
        require: true
    },
    description : {
        type: String,
        require: true
    },
    ticketStatus: {
        type: String,
        default: constant.ticketStatus.open,
        require: true
    },
    repoter: {
        type: String,
        require: true
    },
    assigner
})

const Ticket = mongoose.model("Ticket", ticketSchema)

export default Ticket