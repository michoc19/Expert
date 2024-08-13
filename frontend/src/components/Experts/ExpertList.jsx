import { experts } from '../../assets/data/experts';
import ExpertCard from './ExpertCard';
import { BASE_URL } from '../../config';
import usefetchdata from '../../hooks/usefetchdata';
import Loading from '../../components/loader/loading';
import Error from '../../components/Error/Error';

const ExpertList = () => {
  const { data: experts,loading,error}=usefetchdata(`${BASE_URL}/api/v1/experts`);

  return (
    <>
    {loading && <Loading/>}
    {error && <Error/>}

      {!loading && !error && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
      {experts.map(expert => (
        <ExpertCard key={expert._id} expert={experts} />
      ))}
      </div>
      )}
    </>
  );
};

export default ExpertList;
