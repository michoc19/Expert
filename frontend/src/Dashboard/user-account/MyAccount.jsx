import React, { useContext,useState } from "react";
import userImage from '../../assets/images/user.png'; // Assurez-vous que le chemin est correct
import { authContext } from '../../context/AuthContex';
import Profile from "./Profile";
import MyBookings from "./MyBooking";
import { usefetchdata } from '../../hooks/usefetchdata';
import { BASE_URL } from "../../config";
import Loading from "../../components/loader/loading";
import Error from "../../components/Error/Error";

const MyAccount = () => {
  const { dispatch } = useContext(authContext);
  const [tab, setTab] = useState('bookings');

  const {data:userData,loading,error }=usefetchdata(`${BASE_URL}/api/v1/users/profile/me`)

  console.log(userData,"userData");
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };    

  return (
    <section>
        
    <div className="max-w-[1170px] px-5 mx-auto">

      {loading && !error && <Loading/>}  
      {error && !loading && <Error errMessage={error}/>}
      {!loading && !error && <div className="grid md:grid-cols-3 gap-10">
        <div className="col-span-1 bg-white shadow-md pb-[50px] px-[30px] rounded-md">
          <div className="flex items-center justify-center pt-[30px]">
            <figure className="w-[100px] h-[100px] rounded-full border-2 border-solid border-gray-300 overflow-hidden">
              <img src={userData.photo || userImage} alt="userImage" />//userData.photo
            </figure>
          </div>
          <div className="text-center mt-4">
            <h1 className="text-[25px] leading-[30px] text-headingColor font-bold">
              {userData.FullName}
            </h1>
            <p className="text-[15px] leading-[30px] text-headingColor font-bold">
              {userData.email}
            </p>
            <p className="text-[15px] leading-[30px] text-headingColor font-bold">
              phone number : {userData.phone}
            </p>
            <p className="text-[15px] leading-[30px] text-headingColor font-bold">
              gender : {userData.gender}
            </p>
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
          {
            tab==="bookings" && <MyBookings />
        }
        {
            tab==="settings" && <Profile user={userData} />}
        

        </div>
      </div>
      }
    </div>
    </section>
  );
};

export default MyAccount;
