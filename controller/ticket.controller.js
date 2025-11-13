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
        if(user.userType === constant.userTypes.customer){
            ticket = await Ticket.find({repoter:req.userId})
        }else if(user.userType === constant.userTypes.engineer){
            ticket = await Ticket.find({assigner:req.userId})
        }else{
            ticket = await Ticket.find({assigner:req.userId})
        }
        res.status(200).send(ticket)
    } catch (error) {
        console.log("Error white fetching ticket by id: ", error)
        res.status(400).send({
            message: "Request Fail"
        })   
    }
}

export const updateCustomerTicketById = async(req, res) => {
    try {
        const {title, description} = req.body
        const {id} = req.params
        const type = req.userType
        if(type != constant.userTypes.customer){
            return res.status(403).send({ message: "Access denied" });
        }
        const ticket = await Ticket.findOneAndUpdate({_id: id}, {title, description}, {new:true}).exec()
        res.status(200).send({ticket})
    } catch (error) {
        console.log("Error while updating the user request")
        res.status(400).send({
            message: "Request Fail"
        })
    }
}

export const updateCustomerTicketByEngineerAndAdmin = async(req, res) => {
    try {
        const {id} = req.params
        const type = req.userType
        console.log("get the type of the user: ", type)
        if (type === constant.userTypes.admin || type === constant.userTypes.engineer) {
            const {title, description, ticketPriority, ticketStatus, assigner} = req.body
            const newTicket = await Ticket.findOneAndUpdate({_id: id}, {title:title, description:description, ticketPriority:ticketPriority, ticketStatus:ticketStatus, assigner:assigner}, {new:true}).exec()
            res.status(400).send({newTicket})
        }else{
            return res.status(403).send({ message: "Access denied" });
        }
    } catch (error) {
        console.log("Error getting while updating customer ticket by engineer and admin")
        res.status(400).send({
            message: "Request Fail"
        })
    }
}