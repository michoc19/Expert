import usefetchdata from "../../hooks/usefetchdata";
import { BASE_URL } from "../../config";
import Loading from "../../components/loader/loading";
import Error from "../../components/Error/Error";

const MyBookings = () =>{
    const {data:appointments,loading,error}= usefetchdata(`${BASE_URL}/api/v1/users/appointments/my-appointments`)

    return(
      <div>
        {loading && !error && <Loading/>}  
        {error && !loading && <Error errMessage={error}/>}
        {!loading && !error && <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {
                appointments.map(expert=><ExpertCard doctor={expert} key={expert._id}/>)
            }
            </div>}
        {!loading && !error && appointments.length===0 &&  <h2 className="mt-5 text-center  text-headingColor leading-7 text-[20px] font-semibold text-peimaryColor">You did not book any Expert yet!</h2>}
      </div>
    );
};

export default MyBookings;