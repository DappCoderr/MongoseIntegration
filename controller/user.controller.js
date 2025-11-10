import User from "../models/user.model.js"

export const getAllUser = async(req, res) => {
    let {userType, userStatus} = req.query
    let queryObj = {}
    if(userType){
        queryObj.userType = userType
    }
    if(userStatus){
        queryObj.userStatus = userStatus
    }

    const user = await User.find(queryObj)

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

export const updateUserDetailsById = async(req, res) => {
    try {
        const {name, userId, email, userStatus} = req.body
        const {id} = req.params
        const user = await User.findOneAndUpdate(
            {userId:id}, //filter
            {name: name, email: email, userId: userId, userStatus: userStatus}, //update
            {new:true} //returns new data (after update)
        ).exec() //executes the Mongoose query

        res.status(200).send(user)

    } catch (error) {
        console.log("Error while updateing user details: ", error)
        res.status(400).send({
            message: "Fail to update user details by id"
        })
    }
}