import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { HiStar } from 'react-icons/hi';
import clientavatar from '../../assets/images/clientavatar.png';

const Testimonial = () => {
  return (
    <div className="mt-[30px] lg:mt-[55px]">
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 0 },
          768: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
        }}
      >
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3">
            <div className="flex items-center gap-[13px]">
              <img src={clientavatar} alt="Client Avatar" />
              <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                Ahmed Ali
              </h4>
            </div>
            <div className="flex items-center mt-2">
              {[...Array(5)].map((star, index) => (
                <HiStar key={index} className="text-yellow-500 w-[18px] h-5" />
              ))}
            </div>
            <p className="mt-3 text-[16px] leading-7 mt-4 text-textColor font-[400]">
              Thank you for all information
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3">
            <div className="flex items-center gap-[13px]">
              <img src={clientavatar} alt="Client Avatar" />
              <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                Ahmed Ali
              </h4>
            </div>
            <div className="flex items-center mt-2">
              {[...Array(5)].map((star, index) => (
                <HiStar key={index} className="text-yellow-500 w-[18px] h-5" />
              ))}
            </div>
            <p className="mt-3 text-[16px] leading-7 mt-4 text-textColor font-[400]">
              Thank you for all information
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3">
            <div className="flex items-center gap-[13px]">
              <img src={clientavatar} alt="Client Avatar" />
              <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                Ahmed Ali
              </h4>
            </div>
            <div className="flex items-center mt-2">
              {[...Array(5)].map((star, index) => (
                <HiStar key={index} className="text-yellow-500 w-[18px] h-5" />
              ))}
            </div>
            <p className="mt-3 text-[16px] leading-7 mt-4 text-textColor font-[400]">
              Thank you for all information
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3">
            <div className="flex items-center gap-[13px]">
              <img src={clientavatar} alt="Client Avatar" />
              <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                Ahmed Ali
              </h4>
            </div>
            <div className="flex items-center mt-2">
              {[...Array(5)].map((star, index) => (
                <HiStar key={index} className="text-yellow-500 w-[18px] h-5" />
              ))}
            </div>
            <p className="mt-3 text-[16px] leading-7 mt-4 text-textColor font-[400]">
              Thank you for all information
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3">
            <div className="flex items-center gap-[13px]">
              <img src={clientavatar} alt="Client Avatar" />
              <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                Ahmed Ali
              </h4>
            </div>
            <div className="flex items-center mt-2">
              {[...Array(5)].map((star, index) => (
                <HiStar key={index} className="text-yellow-500 w-[18px] h-5" />
              ))}
            </div>
            <p className="mt-3 text-[16px] leading-7 mt-4 text-textColor font-[400]">
              Thank you for all information
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3">
            <div className="flex items-center gap-[13px]">
              <img src={clientavatar} alt="Client Avatar" />
              <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                Ahmed Ali
              </h4>
            </div>
            <div className="flex items-center mt-2">
              {[...Array(5)].map((star, index) => (
                <HiStar key={index} className="text-yellow-500 w-[18px] h-5" />
              ))}
            </div>
            <p className="mt-3 text-[16px] leading-7 mt-4 text-textColor font-[400]">
              Thank you for all information
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3">
            <div className="flex items-center gap-[13px]">
              <img src={clientavatar} alt="Client Avatar" />
              <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                Ahmed Ali
              </h4>
            </div>
            <div className="flex items-center mt-2">
              {[...Array(5)].map((star, index) => (
                <HiStar key={index} className="text-yellow-500 w-[18px] h-5" />
              ))}
            </div>
            <p className="mt-3 text-[16px] leading-7 mt-4 text-textColor font-[400]">
              Thank you for all information
            </p>
          </div>
        </SwiperSlide>
        {/* Repeat SwiperSlide for other testimonials */}
      </Swiper>
    </div>
  );
};

export default Testimonial;
