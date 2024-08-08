import React, { useState } from 'react';
import doctorImg from '../../assets/images/doctorimg01.jpg';
import starIcon from '../../assets/images/starIcon.png';
import ExpertAbout from '../Expert/ExpertAbout';
import Feedback from '../Expert/Feedback';
import SidePanel from './SidePanel';

const ExpertDetails = () => {
    const [tab, setTab] = useState('about');

    return (
        <section>
            <div className="max-w-[1170px] px-5 mx-auto">
                <div className="grid grid-cols-3 gap-[50px]">
                    <div className="md:col-span-2">
                        <div className="flex items-center gap-5">
                            <figure className="max-w-[200px] max-h-[200px]">
                                <img src={doctorImg} alt="Doctor Mohamed Ali" className="w-full" />
                            </figure>

                            <div>
                                <span className="bg-[#CCF0F3] text-irisBlueColor py-1 px-6 lg:py-2 lg:px-6 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded">
                                    Teacher
                                </span>

                                <h3 className="text-headingColor text-[22px] leading-9 mt-3 font-bold">
                                    Mohamed Ali
                                </h3>

                                <div className="flex items-center gap-[6px]">
                                    <span className="flex items-center gap-[6px] text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-semibold text-headingColor">
                                        <img src={starIcon} alt="Rating" /> 4.8
                                    </span>

                                    <span className="text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-[400] text-textColor">
                                        (272)
                                    </span>
                                </div>

                                <p className="text_para text-[14px] leading-5 md:text-[15px] lg:max-w-[390px] mt-3">
                                    orientation
                                </p>
                            </div>
                        </div>

                        <div className="mt-[90px] border-b border-solid border-[#0066ff34]">
                            <button 
                                onClick={() => setTab('about')} 
                                className="py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold ${tab === 'about' ? 'border-b border-solid border-primaryColor' : ''}">
                                About
                            </button>
                            <button 
                                onClick={() => setTab('feedback')} 
                                className="py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold ${tab === 'feedback' ? 'border-b border-solid border-primaryColor' : ''}">
                                Feedback
                            </button>
                        </div>
                        <div>
                          {tab == "about" && <ExpertAbout/> }
                          {tab == "feedback" && <Feedback/> }
                        </div>
                    </div>
                    <div>
                      <SidePanel/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExpertDetails;