const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    userId: { type: Number, required: true, unique: true },
    email: { type: String, required: true, trim: true, unique: true, lowercase: true },
    password: { type: String, required: true, trim: true, minLength: 7 },
    userType: {
      type: String,
      enum: ['CUSTOMER', 'ADMIN', 'ENGINEER'],
      required: true,
      default: 'CUSTOMER',
    },
    userStatus: {
      type: String,
      enum: ['APPROVED', 'PENDING', 'BLOCKED'],
      required: true,
      default: 'APPROVED',
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', userSchema);
