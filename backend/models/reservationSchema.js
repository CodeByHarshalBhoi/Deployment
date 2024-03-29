import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
  firstName: {
    type: String,
    require: true,
    minLength: [3, "First name must contain atleast 3 character"],
    maxLength: [30, "First name cannot exceed 30 character"],
  },
  lastName: {
    type: String,
    require: true,
    minLength: [3, "Last name must contain atleast 3 character"],
    maxLength: [30, "Last name cannot axceed 30 character"],
  },
  email: {
    type: String,
    require: true,
    validate: [validator.isEmail, "Please provide valid email"],
  },
  phone: {
    type: String,
    require: true,
    minLength: [10, "Phone number must contain only 10 digit"],
    maxLength: [10, "Phone number must contain only 10 digit"],
  },
  time: {
    type: String,
    require: true,
  },
  date: {
    type: String,
    require: true,
  },
});

export const Reservation = mongoose.model("reservation", reservationSchema);

