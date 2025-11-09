const express = require('express');
const mongo = require('mongoose');
const User = require('./models/user.model');
const bcrypt = require('bcryptjs');
const authRoute = require('./router/auth.router');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 7777;

/**
 * Setup the connection with the mongoDB
 */
(async () => {
  try {
    // connection setup
    await mongo.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/crm');

    // check if admin is present
    const userID = await User.findOne({ userId: 'Admin' });

    // if not then create a new admin
    if (!userID) {
      console.log('Admin is not present');
      const user = await User.create({
        name: 'Haardik Sharma',
        userId: 'Admin',
        email: 'hardik@gmail.com',
        password: bcrypt.hashSync('Welcome123', 8),
        userType: 'ADMIN',
      });
      console.log('Admin Created: ', user);
    } else {
      console.log('Admin is already present');
    }
  } catch (error) {
    console.log('Error', error);
  }
})();

app.use(express.json());
// Stich the auth route
app.use('/crm/api/v1', authRoute);

// run the server
app.listen(PORT, () => {
  console.log(`Server started and listening on PORT - ${PORT}`);
});
