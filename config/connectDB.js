import mongoose from "mongoose";
import bcrypt from 'bcryptjs';
import User from '../models/user.model';

export const connectDB = async () => {
  try {
    // connection setup
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/crm');

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
};
