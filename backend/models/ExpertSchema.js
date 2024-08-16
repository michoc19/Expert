import mongoose from "mongoose";

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
  timeSlots: { type: Array },
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

export default mongoose.model("Expert", ExpertSchema); 