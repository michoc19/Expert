import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
    expert: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Expert',
        required: true
    },
    Expert_FullName:{
        type:String,
        ref:'Expert',
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    User_FullName:{
        type:String,
        ref:'User',
        required: true
    },
    timeSlot: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'TimeSlot',
        required: true
    },
    ticketPrice: {
        type: Number,
        required: true
    },
    appointmentDate: {
        type: Date,
       // required: true
    },
    status: {
        type: String,
        default: 'pending'
    }
});

const Booking = mongoose.model('Booking', bookingSchema);
export default Booking;
