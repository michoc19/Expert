import {React,useState,useEffect} from "react";
import { BASE_URL } from "../../config";

const SidePanel = ({ticketPrice,timeSlots,expert, user,token }) => {
    //// {expert.ticketPrice}
    console.log("Expert ID:", expert._id);
    const [filteredTimeSlots, setFilteredTimeSlots] = useState(timeSlots);//

    useEffect(() => {
        const fetchBookedSlots = async () => {
            try {
                const response = await fetch(`${BASE_URL}/api/v1/bookings/booked_slots/${expert._id}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`
                    },
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const responseData = await response.json();
                const bookedSlotIds = responseData.data;
                console.log(bookedSlotIds);

                // Filter out booked slots from the timeSlots
                const availableSlots = timeSlots.filter(slot => !bookedSlotIds.includes(slot._id));
                setFilteredTimeSlots(availableSlots);
            } catch (error) {
                console.error('Error fetching booked slots:', error);
            }
        };

        fetchBookedSlots();
    }, [timeSlots, expert._id, token]);


const handleBookNow = async (selectedTimeSlot) => {
    try {
        //const token = user.token;
        const localDate = new Date(selectedTimeSlot.day);
       
        // Vérifiez que le token est disponible
        if (!token) {
            throw new Error('User token is missing. Please log in again.');
        }

        console.log("Token being sent:", token);

        
        // Optionally, adjust the local time based on the time slot (startingTime)
        const [startHour, startMinute] = selectedTimeSlot.startingTime.split(':').map(Number);
        localDate.setHours(startHour, startMinute, 0); // Setting the hours and minutes based on the startingTime

        console.log("Booking data:", {
            expert: expert._id,
            Expert_FullName:expert.FullName,
            user: user._id,
            User_FullName:user.FullName,
            timeSlot: selectedTimeSlot._id,
            ticketPrice,
            //appointmentDate: localDate.toISOString(),
            status: 'pending' // Assuming you want to set status as 'pending'
        });

        const response = await fetch(`${BASE_URL}/api/v1/bookings/book`, {
            method: 'POST',
            headers: {  
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}` // Include token if needed
            },
            body: JSON.stringify({
                expert: expert._id,
                Expert_FullName:expert.FullName,
                user: user._id,
                User_FullName:user.FullName,
                timeSlot: selectedTimeSlot._id,
                ticketPrice,
               // appointmentDate: localDate.toISOString(),
                status: 'pending' // Use the same field name expected by your backend
            })
        });

        const responseData = await response.json();

        console.log("Server response:", responseData); // Log server response for debugging

        if (!response.ok) {
            throw new Error(responseData.message|| 'Failed to book time slot.'); // Throw an error if response is not OK
        }

        alert('Booking confirmed!');
    } catch (error) {
        console.error('Error booking time slot:', error); // Log detailed error message
        alert('Failed to book time slot. Please try again later.');
    } finally {
        // Ensure loading or other states are reset if needed
    }
};

    return (
        <div className="shadow-panel p-3 lg:p-5 rounded-md">
            {ticketPrice ?(
                <div className="flex items-center justify-between">
                <h1 className=" text-[16px] text_para mt-0 font-semibold">Ticket Price</h1>
                <span className="text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor font-bold">
                    {ticketPrice}dh
                </span>
            </div>
            ):(<div className="flex items-center justify-between">
                <p className="text-[16px] leading-6 text-textColor font-semibold">No Ticket Price</p>
                <span className="text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor font-bold">
                    {ticketPrice}
                </span>
            </div>)}
            
            {filteredTimeSlots && filteredTimeSlots.length > 0 ?(
            <div className="mt-[30px]">
                <p className="text-[16px] text_para mt-0 font-semibold text-headingColor">
                    Available Time Slots:
                </p>
            </div>): ""}

            <div className="mt-3">
            {filteredTimeSlots && filteredTimeSlots.length > 0 ? (
                    <ul>
                        {filteredTimeSlots.map((slot, index) => (
                            <li key={slot._id || index} className="flex items-center justify-between mb-3">
                                <p className="text-[15px] leading-6 text-textColor font-semibold">
                                    {slot.day.charAt(0).toUpperCase()+slot.day.slice(1)}
                                </p>
                                <p className="text-[15px] leading-6 text-textColor font-semibold">
                                    {slot.startingTime} - {slot.endingTime}
                                </p>
                                <button
                                    onClick={() => handleBookNow(slot)}
                                    className="btn p-0 m-0 w-[80px] h-[40px] rounded-md"
                                >
                                    Book Now
                                </button>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-[17px] leading-6 text-textColor font-semibold">
                        No available time slots
                    </p>
                )}
            </div>

            {/*<button onClick={() => handleBookNow(slot)} className="btn px-2 w-full rounded-md">
                Book Now
            </button>*/}
        </div>
    );
};

export default SidePanel;