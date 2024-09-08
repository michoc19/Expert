import {getCheckoutSession,createBooking,getBookedTimeSlots} from "../controllers/bookingcontroler.js";
import { authenticate ,restrict} from "../auth/verifyToken.js"
import express from "express";

const router=express.Router();


router.post('/book',authenticate,restrict(['User']),createBooking);
router.get('/booked_slots/:id', getBookedTimeSlots);


{/*router.get('/my-bookings', authenticate, restrict(['User']), getMyBookings);

// Route for experts to view their bookings
router.get('/expert-bookings', authenticate, restrict(['Expert']), getExpertBookings);

// Route for updating booking status (e.g., confirm, cancel)
router.put('/update/:bookingId', authenticate, restrict(['Expert']), updateBookingStatus);

// Route for deleting a booking
router.delete('/delete/:bookingId', authenticate, restrict(['User', 'Expert']), deleteBooking);*/}

export default router;