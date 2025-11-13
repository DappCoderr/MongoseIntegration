import Ticket from "../models/ticker.model.js";
import User from "../models/user.model.js"
import { constant } from "../utils/constant.js";

export const createTicket = async(req, res) => {
    try {
        const {title, description} = req.body;
        const ticketObj = {
              title: title,
              description: description,
              repoter: req.userId ,
            };

        // Find the user, who is engineer and his status is approved.
        const engineer = await User.findOne({
            userType : constant.userTypes.engineer,
            userStatus : constant.userStatus.approved
        })

        ticketObj.assigner = engineer.userId

        const ticket = await Ticket.create(ticketObj)
        res.status(200).send({ticket})
    } catch (error) {
        console.log("Something went wrong while creating ticket: ", error)
        res.status(400).send({
            message: "Ticket creating fail"
        })
    }
}

export const getAllTickets = async(req, res) => {
    try {
        const tickets = await Ticket.find()
        console.log("Ticket controller, get all tickets: ", tickets)
        res.status(200).send(tickets)
    } catch (error) {
        console.log("Error white fetching all tickets: ", error)
        res.status(400).send({
            message: "Request Fail"
        })   
    }
}

export const getAllTicketsByUserId = async(req, res) => {
    try {
        let ticket;
        const user = await User.findOne({userId: req.userId})
        console.log("User: ",user)
        if(user.userType === constant.userTypes.customer){
            ticket = await Ticket.find({repoter:req.userId})
        }else if(user.userType === constant.userTypes.engineer){
            ticket = await Ticket.find({assigner:req.userId})
        }else{
            ticket = await Ticket.find({assigner:req.userId})
        }
        console.log("Ticket controller, get all tickets: ", ticket)
        res.status(200).send(ticket)
    } catch (error) {
        console.log("Error white fetching ticket by id: ", error)
        res.status(400).send({
            message: "Request Fail"
        })   
    }
}