import { useState, useEffect } from "react";
import ExpertCard from "../../components/Experts/ExpertCard";
import { experts } from "../../assets/data/experts";
import Testimonial from '../../components/Testimonial/Testimonial';
import { BASE_URL } from '../../config';
import usefetchdata from '../../hooks/usefetchdata';
import Loading from '../../components/loader/loading';
import Error from '../../components/Error/Error';

const Experts = () => {
  const [query,setQuery] =useState('');
  const [debounceQuery,setDebounceQuery]=useState('');

  //const [loading, setLoading] = useState(true);
  //const [error, setError] = useState(null);
  const [filteredExperts, setFilteredExperts] = useState([]);

 {/* useEffect(() => {
    if (experts) {
        setFilteredExperts(experts);
    }
}, [experts]);*/}

const handleSearch = () => {  
  setDebounceQuery(query.trim());

    console.log('handle Search');
};

useEffect(()=>{
  const timeout = setTimeout(() => {
    setDebounceQuery(query);
  }, 700);
  return() => clearTimeout(timeout);
},[query]);



const { data: experts,loading,error}=usefetchdata(`${BASE_URL}/api/v1/experts?query=${debounceQuery}`);


if (loading) return <Loading />;
if (error) return <Error />;  

  return (
    <>
      <section className="bg-[#f9f9f9]">
        <div className="container text-center">
          <h2 className="heading">Find a Expert </h2>
          <div className="max-w-[570px] mt-[30px] mx-auto bg-[#0066ff2c] rounded-md flex items-center justify-between">
            <input
              type="search"
              className="py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none placeholder:text-textColor"
              placeholder="Search Experts by name or specialization"
              value={query}
              onChange={e => setQuery(e.target.value)}            />
            <button 
              className="btn mt-0 rounded-r-md"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
        {loading && <Loading/>}
        {error && <Error/>}
          {!loading && !error && (<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:grid-cols-4">
            {experts.length > 0 ? (experts.map((expert) => (
              <ExpertCard key={expert._id} expert={expert} />
            ))
          ):(
            <p>No experts found.</p>
          )}
          </div>
          )}
        </div>
      </section>
      <section className="py-12">
        <div className="container mx-auto">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center text-3xl font-semibold mb-4">CLIENTS REVIEWS</h2>
            <p className="text_para text-center text-lg">
              Les domaines d’intervention de nos experts
            </p>
          </div>
          <Testimonial/>
        </div>
      </section>
    </>
  );
};

export default Experts;
