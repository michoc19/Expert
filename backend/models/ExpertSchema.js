import mongoose from "mongoose";
import TimeSlot from "./TimeSlot.js";

const timeSlotSchema = new mongoose.Schema({
  day: {
      type: String, // e.g., 'Monday', '2024-08-05', etc.
      required: true
  },
  startingTime:{
    type:String,
    required:true
  },
  endingTime:{
    type:String,
    required:true
  },
  /*slots: [{
      start: {
          type: String, // e.g., '09:00'
          required: true
      },
      end: {
          type: String, // e.g., '17:00'
          required: true
      }
  }]*/
});


const ExpertSchema = new mongoose.Schema({
  FullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: { type: String, },
  languages:[{type:String}],
  photo: { type: String, },
  ticketPrice: { type: Number },
  role: {type: String},
  gender: { type: String, enum: ["male", "female", "other"] },

  // Fields for Experts  only
  specialization: { type: String , enum: [  "Scientific research", "Technology","Education","ECOMMERCE & DROPSHIPPING",
    "HEALTHCARE", "SPORTS", "Agriculture", "LAW JUSTICE","CONSTRUCTION REAL ESTATE","FINANCE ECONOMICS",
    "ENVIRONMENT ECOLOGY", "TRAVEL TOURISM","IMMOBILIER"
]},
  qualifications: {
    type: Array,
  },

  experiences: {
    type: Array,
  },

  bio: { type: String, maxLength: 300 },
  about: { type: String,maxLength: 700 },
  timeSlots: [TimeSlot.schema],
  //
  //timeSlots: { type: Array },
  reviews: [{ type: mongoose.Types.ObjectId, ref: "Review" }],
  averageRating: {
    type: Number,
    default: 0,
  },
  totalRating: {
    type: Number,
    default: 0,
  },
  isApproved: {
    type: String,
    enum: ["pending", "approved", "cancelled"],
    default: "pending",
  },
  appointments: [{ type: mongoose.Types.ObjectId, ref: "Appointment" }],
});

//export default mongoose.model("Expert", ExpertSchema); 

const Expert = mongoose.model("Expert", ExpertSchema); 
export default Expert;
