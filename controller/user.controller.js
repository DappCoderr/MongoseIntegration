import User from "../models/user.model.js"

export const getAllUser = async(req, res) => {
    const user = await User.find()
    try {
        res.status(200).send(user)
    } catch (error) {
        console.log("Error while geting all users: ", error)
        res.status(400).send({
            message: "Fail to get all users"
        })
    }
}

export const getUserById = async(req, res) => {
    const { id } = req.params;
    const user = await User.findOne({userId: id})
    try {
        res.status(200).send(user)
    } catch (error) {
        console.log("Error while geting all users: ", error)
        res.status(400).send({
            message: "Fail to get all users"
        })
    }
}