import Ticket from "../models/ticker.model"

export const verifyCommentRequest = async(req, res, next) => {
    const id = req.params.id
    if(!id){
        return res.status(400).send({
            message: "Invalid ticket Id"
        })
    }

    const ticket = await Ticket.find({id})
    if(!ticket){
        return res.status(400).send({
            message: "Invalid ticket Id. Ticket does not exist"
        })
    }

    if(!req.body.content){
        return res.status(400).send({
            message: "Bad Request: Content is empty"
        })
    }

    next()
}