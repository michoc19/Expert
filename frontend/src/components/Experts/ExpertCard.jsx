import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import starIcon from '../../assets/images/starIcon.png';

const ExpertCard = ({ expert }) => {

  const {
    FullName,
    averageRating,
    totalRating,
    photo,
    specialization,
    totalUsers,  
    languages,
  } = expert;

  return (
    <div className="p-3 lg:p-5 bg-white shadow-md rounded-lg">
      <div className="flex justify-center">
        <img src={photo} className="w-full h-48 object-cover rounded-lg" alt={`Photo of ${FullName}`} />
      </div>
      <h2 className="text-lg lg:text-xl font-bold mt-3 lg:mt-5 text-headingColor">
        {FullName}
      </h2>
      <div className="mt-2 lg:mt-4 flex items-center justify-between">
        <span className="bg-[#CCF0F5] text-irisBlueColor py-1 px-2 lg:py-2 lg:px-6 text-sm lg:text-base font-semibold rounded">
          {specialization}
        </span>
      </div>
      <div className="flex items-center gap-2 mt-2">
        <span className="flex items-center gap-2 text-sm lg:text-base font-semibold text-headingColor">
          <img src={starIcon} alt="Star rating" className="w-4 h-4" /> {averageRating}
        </span>
        <span className="text-sm lg:text-base font-normal text-textColor">
          ({totalRating})
        </span>
      </div>
      <div className="mt-4 lg:mt-5 flex items-center justify-between">
        {/* <div>
          <h3 className="text-base lg:text-lg font-semibold text-headingColor">
            { totalPatients} users
          </h3>S
          <p className="text-sm lg:text-base font-normal text-textColor">
            At {hospital}
          </p>
        </div> */}
        <Link
          to={`/experts/${expert._id}`}
          className="w-11 h-11 rounded-full border border-solid border-[#181A1E] flex items-center justify-center group hover:bg-primaryColor hover:border-transparent"
        >
          <BsArrowRight className="group-hover:text-white w-6 h-6" />
        </Link>
      </div>
    </div>
  );
};

export default ExpertCard;
