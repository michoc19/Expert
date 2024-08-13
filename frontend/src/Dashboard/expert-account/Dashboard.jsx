import  {useState}  from "react";
import Loading from "../../components/loader/loading";
import Error from "../../components/Error/Error";
import { usefetchdata } from "../../hooks/usefetchdata";
import { BASE_URL } from "../../config";
import Tabs from "./Tabs";
import starIcon from "../../assets/images/starIcon.png";
import ExpertAbout from '../../pages/Expert/ExpertAbout';
import Profile from './Profile';
import Appointments from './Appointments.jsx';


const Dashboard = () => {
  const { data, loading, error } = usefetchdata(`${BASE_URL}/api/v1/experts/profile/me`);

  const [tab, setTab] = useState("overview");

  return (
    <section className="max-w-[1170px] px-5 mx-auto pb- ">
      {loading && <Loading/>}
      {error && <Error/>}

      {!loading && !error && (
        <div className="grid lg:grid-cols-3 gap-[30px] lg:gap-[50px]">
          <Tabs tab={tab} setTab={setTab} />
          <div className="lg:col-span-2">
            {data.isApproved === "pending" && (
              <div className="flex p-4 mb-4 text-yellow-800 bg-yellow-50 rounded-lg">
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 00-1 1v3a1 1 0 001 1h1a1 1 0 100-2h-1V7a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="ml-3">Your profile is pending approval.</span>
              </div>
            )}
            <div className="mt-8">
              {tab === "overview" && (
                <div className="flex items-center gap-4 mb-10 pl-4 pt-5 pb-20  rounded-lg shadow-md">
                  <figure className="max-w-[200px] max-h-[200px] overflow-hidden ">
                    <img src={data.photo} alt="Profile" className="w-full h-full object-cover "  style={{ borderRadius: '10px' }} />
                  </figure>
                  <div>
                    <span className="bg-[#CCF0F7] text-irisBlueColor py-2 px-4 lg:py-2 lg:px-6 rounded text-lg font-semibold">
                    {data.specialization}
                    </span>
                    <h3 className="text-2xl leading-9 font-bold text-headingColor mt-3"> 
                      {data.FullName}
                    </h3>
                    <div className="flex items-center gap-[6px]">
                       <span className="flex items-center gap-[6px]">
                          <p className="text-headingColor text-[14px] leading-5 lg:text-[16px] lg:leading-6 font-semibold">
                             4.5
                          </p>
                          <img src={starIcon} alt="star rating" />
                       </span>
                       <span className="text-textColor text-[14px] leading-5 lg:text-[16px] lg:leading-6 font-semibold">
                         (233)
                       </span>
                    </div>
                    <div className="mb-6">
                       <p className="text-base lg:max-w-md leading-6">
                           {data.bio}
                      </p>
                   </div>
                   <div>
                       <p className="text-base lg:max-w-md leading-6">
                           {data.about}
                      </p>
                   </div>
                  </div>
                </div>
              )} 
              {tab==="Appointments"&&<Appointments appointments={data.appointments}/>}
              {tab==="settings"&& <Profile user={data}/>}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Dashboard;