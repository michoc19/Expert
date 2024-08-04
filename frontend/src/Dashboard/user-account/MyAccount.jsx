import React, { useContext,useState } from "react";
import userImage from '../../assets/images/user.png'; // Assurez-vous que le chemin est correct
import { authContext } from '../../context/AuthContex';

const MyAccount = () => {
  const { dispatch } = useContext(authContext);
  const [tab, setTab] = useState('bookings');


  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };    

  return (
    <div className="max-w-[1170px] px-5 mx-auto">
      <div className="grid md:grid-cols-3 gap-10">
        <div className="col-span-1 bg-white shadow-md pb-[50px] px-[30px] rounded-md">
          <div className="flex items-center justify-center pt-[30px]">
            <figure className="w-[100px] h-[100px] rounded-full border-2 border-solid border-gray-300 overflow-hidden">
              <img src={userImage} alt="userImage" />
            </figure>
          </div>
          <div className="text-center mt-4">
            <h3 className="text-[18px] leading-[30px] text-headingColor font-bold">
              Yassine Rezzak
            </h3>
          </div>
          <div className="mt-[50px] md:mt-[100px]">
            <button
              onClick={handleLogout}
              className="w-full bg-gray-600 mt-4 p-3 text-[16px] leading-7 rounded-md text-white"
            >
              Logout
            </button>
            <button
              className="w-full bg-red-600 mt-4 p-3 text-[16px] leading-7 rounded-md text-white"
            >
              Delete account
            </button>
          </div>
        </div>

        <div className="col-span-2 md:px-[30px]">
          <button
            onClick={() => setTab('bookings')}
            className={`${
              tab === 'bookings' ? 'bg-primaryColor text-white font-normal' : ''
            } py-2 mr-5 px-5 rounded-md text-headingColor font-semibold text-[16px] leading-7 border border-solid border-primaryColor`}
          >
            My Bookings
          </button>

          <button
            onClick={() => setTab('settings')}
            className={`${
              tab === 'settings' ? 'bg-primaryColor text-white font-normal' : ''
            } py-2 px-5 rounded-md text-headingColor font-semibold text-[16px] leading-7 border border-solid border-primaryColor`}
          >
            Profile Settings
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
