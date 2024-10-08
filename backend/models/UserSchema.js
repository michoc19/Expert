import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  FullName: { type: String, required: true },
  phone: { type: String },
  languages:[{type:String}],
  Time_zone:{type:String},
  photo: { type: String },
  role: {
    type: String,
    enum: ["User", "admin"],
    default: "User",
  },
  gender: { type: String, enum: ["male", "female", "other"] },
  appointments: [{ type: mongoose.Types.ObjectId, ref: "Appointment" }],
});
 
export default mongoose.model("User", UserSchema);