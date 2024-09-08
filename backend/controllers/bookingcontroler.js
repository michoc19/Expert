import User from "../models/UserSchema.js"
import Expert from "../models/ExpertSchema.js";
import Booking from "../models/BookingSchema.js";


export const getCheckoutSession =async (req,res)=>{
    const { expertId, timeSlotId, userId } = req.body;

    try {
        const booking = new Booking({
            expert: expertId,
            user: userId,
            timeSlot: timeSlotId,
            status: 'pending' // or confirmed, based on your logic
        });

        await booking.save();
        res.status(201).json(booking);
    } catch (error) {
        res.status(500).json({ message: 'Error creating booking', error });
    }
};

export const createBooking = async (req, res) => {
    console.log("Received booking data:", req.body);

    const { expert, Expert_FullName,user,User_FullName, timeSlot, ticketPrice, appointmentDate ,status} = req.body;

    try {
        if (!expert || !user || !timeSlot || !ticketPrice || !Expert_FullName || !User_FullName) {
            return res.status(400).json({
                message: "Missing required fields: expert, user, timeSlot, ticketPrice, or appointmentDate"
            });
        }


        const booking = new Booking({
            expert,
            Expert_FullName,
            user,
            User_FullName,
            timeSlot,   
            ticketPrice,
            appointmentDate,
            status: status || 'pending'
        });

        const createdBooking = await booking.save();
        res.status(201).json({
            success: true,
            data: createdBooking,
          });
    } catch (error) {
        console.error('Error creating booking:', error);
        res.status(500).json({ message: 'Error creating booking', error });
    }
};

export const getBookedTimeSlots = async (req, res) => {
    const { id } = req.params;

    console.log("Received Expert ID:", id);

    try {
        if (!id) {
            return res.status(400).json({ message: 'Expert ID is required' });
        }
        const bookedSlots = await Booking.find({ expert: id }).populate('timeSlot');
        if (bookedSlots.length === 0) {
            return res.status(404).json({ message: 'No bookings found for this expert' });
        }
        const bookedSlotIds = bookedSlots.map(booking => booking.timeSlot._id);

        res.status(201).json({
            success: true,
            data: bookedSlotIds,
        });
    } catch (error) {
        console.error('Error fetching booked time slots:', error);
        res.status(500).json({ message: 'Error fetching booked time slots', error });
    }
};