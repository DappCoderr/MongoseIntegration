import mongoose from "mongoose";
import { constant } from "../utils/constant.js";

const ticketSchema = new mongoose.Schema({
    title : {
        type: String,
        require: true
    },
    description : {
        type: String,
        require: true
    },
    ticketPriority: {
        type: Number,
        require: true,
        default: 4
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
    assigner: {
        type: String
    }
})

const Ticket = mongoose.model("Ticket", ticketSchema)

export default Ticket