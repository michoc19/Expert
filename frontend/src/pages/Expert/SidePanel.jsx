import React from "react";

const SidePanel = ({ticketPrice,timeSlots}) => {
    //// {expert.ticketPrice}
    return (
        <div className="shadow-panel p-3 lg:p-5 rounded-md">
            <div className="flex items-center justify-between">
                <p className="text_para mt-0 font-semibold">Ticket Price</p>
                <span className="text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor font-bold">
                    {ticketPrice}dh
                </span>
            </div>

            <div className="mt-[30px]">
                <p className="text_para mt-0 font-semibold text-headingColor">
                    Available Time Slots:
                </p>
            </div>

            <div className="mt-3">
            {timeSlots && timeSlots.length > 0 ? (
                    <ul>
                        {timeSlots.map((slot, index) => (
                            <li key={slot._id || index} className="flex items-center justify-between mb-2">
                                <p className="text-[15px] leading-6 text-textColor font-semibold">
                                    {slot.day}
                                </p>
                                <p className="text-[15px] leading-6 text-textColor font-semibold">
                                    {slot.startingTime} - {slot.endingTime}
                                </p>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-[15px] leading-6 text-textColor font-semibold">
                        No available time slots
                    </p>
                )}
            </div>

            <button className="btn px-2 w-full rounded-md">
                Book Now
            </button>
        </div>
    );
};

export default SidePanel;