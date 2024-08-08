import React from "react";

const SidePanel = () => {
    return (
        <div className="shadow-panel p-3 lg:p-5 rounded-md">
            <div className="flex items-center justify-between">
                <p className="text_para mt-0 font-semibold">Ticket Price</p>
                <span className="text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor font-bold">
                    200dh
                </span>
            </div>

            <div className="mt-[30px]">
                <p className="text_para mt-0 font-semibold text-headingColor">
                    Available Time Slots:
                </p>
            </div>

            <div className="mt-3">
                <ul className="flex items-center justify-between mb-2">
                    <li>
                        <p className="text-[15px] leading-6 text-textColor font-semibold">
                            mardi
                        </p>
                        <p className="text-[15px] leading-6 text-textColor font-semibold">
                            4:00 PM - 9:00 PM
                        </p>
                    </li>
                    <li>
                        <p className="text-[15px] leading-6 text-textColor font-semibold">
                            jeudi
                        </p>
                        <p className="text-[15px] leading-6 text-textColor font-semibold">
                            4:00 PM - 9:00 PM
                        </p>
                    </li>
                    <li>
                        <p className="text-[15px] leading-6 text-textColor font-semibold">
                            samedi
                        </p>
                        <p className="text-[15px] leading-6 text-textColor font-semibold">
                            4:00 PM - 9:00 PM
                        </p>
                    </li>
                </ul>
            </div>

            <button className="btn px-2 w-full rounded-md">
                Book Now
            </button>
        </div>
    );
};

export default SidePanel;