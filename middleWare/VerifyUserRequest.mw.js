const User = require('../models/user.model');
const constant = require('../utils/constant');

exports.verifyUserRequest = async (req, res, next) => {
  const name = req.body.name;
  const userId = req.body.userId;
  const email = req.body.email;
  const password = req.body.password;
  const userType = req.body.userType;

  if (!name) {
    res.status(400).send({
      message: 'Bag Request: userName fiels is not passed or empty',
    });
    return;
  }

  if (!userId) {
    res.status(400).send({
      message: 'Bag Request: userID fiels is not passed or empty',
    });
    return;
  }

  if (!email) {
    res.status(400).send({
      message: 'Bag Request: email fiels is not passed or empty',
    });
    return;
  }

  if (!password) {
    res.status(400).send({
      message: 'Bag Request: password fiels is not passed or empty',
    });
    return;
  }

  const existingUserId = await User.findOne({ userId });
  if (existingUserId) {
    res.status(400).send({
      message: 'Bag Request: userId already present, please use another userId address',
    });
    return;
  }

  const existingUserEmailId = await User.findOne({ email });
  if (existingUserEmailId) {
    res.status(400).send({
      message: 'Bag Request: email already present, please use another email address',
    });
    return;
  }

  const possibleUserTypes = [
    constant.userTypes.customer,
    constant.userTypes.engineer,
    constant.userTypes.admin,
  ];
  if (userType && !possibleUserTypes.includes(userType)) {
    res.status(400).send({
      message: 'Bag Request: Invalid user type. Please correnct or re-try',
    });
    return;
  }

  next();
};
