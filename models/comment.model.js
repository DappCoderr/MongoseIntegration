import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    content: {
        type: String,
        require: true
    },
    ticketId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Ticket",
        require: true,
    },
    commenterId: {
        type: String,
        require: true
    }
}, {timestamps: true})

const comment = mongoose.model("Comment", commentSchema)

export default comment