/**
 * Logic to signUp user.
 * userType (userStatus) - Customer (A) | Admin (P) | Engineer (P)
 */
const User = require('../models/user.model');
const constant = require('../utils/constant');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.signUp = async (req, res) => {
  try {
    const { name, userStatus, userId, email, password, userType } = req.body;

    if (!req.body.userType || req.body.userType === constant.userTypes.customer) {
      userStatus = constant.userStatus.approved;
    } else {
      userStatus = constant.userStatus.pending;
    }

    const userObj = {
      name: name,
      userId: userId,
      email: email,
      password: bcrypt.hashSync(req.body.password, 8),
      userType: userType,
      userStatus: userStatus,
    };

    const newUser = await User.create(userObj);
    const { ...userResponse } = newUser.toObject();
    res.status(201).send(userResponse);
  } catch (error) {
    console.log('Error while creating new user', error);
    res.status(500).send({
      message: 'Internal server error while creating a new user.',
    });
  }
};

exports.signIn = async (req, res) => {
  try {
    const { userId, password } = req.body;
    const user = await User.findOne({ userId });
    const secret = process.env.SCERET;

    if (!user) {
      return res.status(404).send({
        message: 'User did not exist',
      });
    }

    const passwordIsValid = bcrypt.compareSync(password, user.password);
    if (!passwordIsValid) {
      return res.status(400).send({
        accessToken: null,
        message: 'Invalid password. Please try again',
      });
    }

    if (user.userStatus != constant.userStatus.approved) {
      res.status(400).send({
        message: `User status is not Approved. Current user status is : ${user.userStatus}`,
      });
      return;
    }

    if (!secret) {
      console.error('JWT secret is missing in environment variables.');
      return res.status(500).send({ message: 'Server configuration error.' });
    }

    const token = jwt.sign({ id: user.userId }, secret, { expiresIn: 120 });

    return res.status(201).send({
      name: user.name,
      userId: user.userId,
      email: user.email,
      userStatus: user.userStatus,
      userType: user.userType,
      accessToken: token,
    });
  } catch (error) {
    console.log('Error during user signIn: ', error);
    return res.status(500).send({
      message: 'Internal server error during sign-in.',
    });
  }
};
