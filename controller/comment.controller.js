import comment from "../models/comment.model";

export const createComment = async(req, res) => { 
    try {
        const {content} = req.body
        const {ticketId} = req.params
        const id = req.userId

        const commentObj = {
            content: content,
            ticketId: ticketId,
            commenterId: id
        }

        const ticket = await comment.create(commentObj)
        return res.status(200).send(ticket)
    } catch (error) {
        console.log("Error while create comment: ", error)
        res.status(400).send({
            message: "Request Fail"
        })
    }
}