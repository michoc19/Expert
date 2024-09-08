// models/TimeSlot.js
import mongoose from 'mongoose';

const timeSlotSchema = new mongoose.Schema({
    day: {
        type: String, // e.g., 'Monday', '2024-08-05', etc.
        required: true
    },
    startingTime: {
        type: String,
        required: true
    },
    endingTime: {
        type: String,
        required: true
    }
});

const TimeSlot = mongoose.model('TimeSlot', timeSlotSchema);
export default TimeSlot;
