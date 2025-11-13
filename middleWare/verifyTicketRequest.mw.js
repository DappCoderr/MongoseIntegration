export const verifyTicketRequest = (req, res, next) => {
    const {title, description} = req.body
    if(!title){
        res.status(400).send({
            message: "Title is empty"
        })
    }
    if(!description){
        res.status(400).send({
            message: "Description is empty"
        })
    }
    next()
}

export const verifyTicketTicketStatus = (req, res, next) => {
    
    next()
}