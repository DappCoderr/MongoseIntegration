import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
import { constant } from "../utils/constant.js";

export const verifyToken = async(req, res, next) => {
    const secret = process.env.SCERET;
    const accessToken = req.headers["x-access-token"];

    if(!accessToken){
        res.status(400).send({
            message: "No access token is passed"
        })
    }

    jwt.verify(accessToken, secret, (err, decoded) => {
        if(err){
            res.status(400).send({
                message: "Unauthorised"
            })
        }
        req.userId = decoded.id
    })

    next()
}

export const isAdmin = async(req, res, next) => {
    const user = await User.findOne({userId: req.userId })
    if(user && user.userType === constant.userTypes.admin){
        next()
    }else{
        res.status(403).send({message: "Only Admin is allowed to access the API"})
    }
}