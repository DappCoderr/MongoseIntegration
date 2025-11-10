import mongoose from "mongoose"
import {constant} from "../utils/constant.js"

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    userId: { type: String, required: true, unique: true, trim: true },
    email: { type: String, required: true, trim: true, unique: true, lowercase: true },
    password: { type: String, required: true, trim: true, minLength: 7 },
    userType: {
      type: String,
      enum: [constant.userTypes.customer, constant.userTypes.admin, constant.userTypes.engineer],
      required: true,
      default: 'CUSTOMER',
    },
    userStatus: {
      type: String,
      enum: [
        constant.userStatus.pending,
        constant.userStatus.approved,
        constant.userStatus.blocked,
      ],
      required: true,
      default: 'APPROVED',
    },
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);

export default User
