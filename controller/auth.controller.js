/**
 * Logic to signUp user.
 * userType (userStatus) - Customer (A) | Admin (P) | Engineer (P)
 */
const User = require('../models/user.model');
const constant = require('../utils/constant');
const bcrypt = require('bcryptjs');

exports.signUp = async (req, res) => {
  let userStatus = req.body.userStatus;

  if (!req.body.userType || req.body.userType === constant.userTypes.customer) {
    userStatus = constant.userStatus.approved;
  } else {
    userStatus = constant.userStatus.pending;
  }

  const userObj = {
    name: req.body.name,
    userId: req.body.userId,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
    userType: req.body.userType,
    userStatus: userStatus,
  };

  try {
    const newUser = await User.create(userObj);
    const newUserObj = {
      name: newUser.name,
      userId: newUser.userId,
      email: newUser.email,
      password: newUser.password,
      userType: newUser.userType,
      userStatus: newUser.userStatus,
      createdAt: newUser.createdAt,
      updatedAt: newUser.updatedAt,
    };
    res.status(201).send(newUserObj);
  } catch (error) {
    console.log('Error while creating new user', error);
    res.status(500).send({
      message: 'Some internal error while creating new user',
    });
  }
};
