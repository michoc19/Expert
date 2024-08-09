import  {useContext, useEffect,useState }  from "react";
import { Link,useNavigate } from "react-router-dom"; // Import Link from react-router-dom
import { toast } from "react-toastify";
import { BASE_URL,token  } from "../../config.js";
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import HashLoader from "react-spinners/HashLoader.js";
import { authContext } from '../../context/AuthContex.jsx';
import Select from 'react-select'; 



const Profile =({user}) => {

    const [loading, setLoading] = useState(false);
    const { dispatch } = useContext(authContext);
    const navigate = useNavigate();



    const [formData,setFormData]= useState({
        FullName:'',
        email:'',
        role:'Expert',
        phone:'',
        languages:[],
        bio:'',
        gender:'',
        specialization:'',
        ticketPrice:0,
        qualifications:[{startingDate:"",endingDate:""}],
        experiences:[],
        timeSlots:[],
        about:'',
        _id:''
        
    })

    const handleChangeNumber = (value) => {
        if (value) {
            setFormData({ ...formData, phone: value});
          } else {
            // Notify if the phone number is invalid
            toast.error('Invalid phone number. Please enter a valid phone number.');
          }   
    };
    

    const handleInputChange = (e) =>{
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const UpdateProfilHandler = ()=>{
        e.preventDefault();
        dispatch({ type: 'UPDATE_USER', });
    };

    useEffect(()=>{
        setFormData({FullName:user.FullName,email:user.email,phone:user.phone,languages: user.languages || [],
            bio:user.bio  || '' ,photo:user.photo,gender:user.gender,specialization:user.specialization  || '' ,role:user.role,
            ticketPrice:user.ticketPrice  || 0,about:user.about  || '' ,_id:user._id  || '' })
    },[user]);


    const handleSelectChange = (selectedOptions) => {
        // Convert selectedOptions to an array of values
        const selectedValues = selectedOptions ? selectedOptions.map(option => option.value) : [];
        setFormData({ ...formData, languages: selectedValues });
    };

    const submitHandler = async (event)=>{
        event.preventDefault();
   
        if (formData.languages.length === 0) {
           toast.error('Please select at least one language.');
           return;
       }
   
        setLoading(true);
        console.log('Submitting form with data:', formData);    
      
        try {
           console.log("Submitting form with data:", formData);
          const res = await fetch(`${BASE_URL}/api/v1/experts/${formData._id}`,{
            method:'PUT',
            headers:{
              'Content-Type':'application/json',
              Authorization :`Bearer ${token}`,
   
            },
            body: JSON.stringify(formData)
          });
      
          const responseData = await res.json();
      
          console.log("Server response:", responseData);//******** */
          
          if(!res.ok){
            throw new Error(responseData.message);
          }
      
   
          setLoading(false);
          toast.success(responseData.message);
          navigate('/experts/profile/me');
      
        } catch (error) {
          toast.error(error.message);
          setLoading(false);
        }finally {
               setLoading(false); // Ensure loading is stopped regardless of success or failure
           }
      };

    const languageOptions = [
        { value: 'French', label: 'French' },
        { value: 'English', label: 'English' },
        { value: 'Arabic', label: 'Arabic' }
    ];

    return(
        <div>
            <h2 className="text-headingColor font-bold text-[24px] leading-9 mb-10">
                Profile Information
            </h2>
            <h1  className="mt-10">
            <form onSubmit={submitHandler}>
                <div className="mb-5">
                    <p className="form__label">Name*</p>
                    <input 
                    type="text" 
                    name="FullName" 
                    value={formData.FullName}
                    onChange={handleInputChange}
                    placeholder="Full Name"
                    className="w-full pr-4 py-3 border-b border-solid border-[#0066f6] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer"
                     ></input>
                </div>
                <div className="mb-5">
                    <p className="form__label">Email*</p>
                    <input 
                    type="text" 
                    name="email" 
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email"
                    className="w-full pr-4 py-3 border-b border-solid border-[#0066f6] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer"
                    readOnly
                    aria-readonly
                    disabled='true'
                     ></input>
                </div>
                <div className="mb-5">
                <p className="form__label">Phone*</p>
                <PhoneInput
                  placeholder="Enter your phone number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChangeNumber}
                  defaultCountry="MA"
                  className="w-full pr-4 py-3 border-b border-solid border-[#0066f6] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer"
                  required
                />
              </div>
              <div className="mb-5">
              <label className="text-headingColor font-bold text-[16px] leading-7 mr-3">
              Spoken languages :
                  </label>
                <Select
                  isMulti
                  name="languages"
                  options={languageOptions}
                  value={languageOptions.filter(option => formData.languages.includes(option.value))}
                  classNamePrefix="select"
                  onChange={handleSelectChange}
                  className="w-full pr-4 py-3 border-b border-solid border-[#0066f6] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer"
                  required
                />
              </div>
              <div className="mb-5">
                    <p className="form__label">bio*</p>
                    <input 
                    type="text" 
                    name="bio" 
                    value={formData.bio}
                    onChange={handleInputChange}
                    placeholder="Bio"
                    className="w-full pr-4 py-3 border-b border-solid border-[#0066f6] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer"
                    maxLength={100}
                    ></input>
                </div>
                <div className="flex items-center">
                  <label className="text-headingColor font-bold text-[16px] leading-7 mr-3">
                    Gender:
                  </label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    className="text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none"
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="flex items-center">
                  <label className="text-headingColor font-bold text-[16px] leading-7 mr-3">
                  specialization:
                  </label>
                  <select
                    name="specialization"
                    value={formData.specialization}
                    onChange={handleInputChange}
                    className="text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none"
                  >
                    <option value="Scientific research">Scientific research</option>
                    <option value="Technology/Computer Science ">Technology/Computer Science </option>
                    <option value="Education">Education</option>
                    <option value="Healthcare ">Healthcare </option>
                    <option value="Sports">Sports</option>
                    <option value="Agriculture">Agriculture </option>
                    <option value="Law/Justice">Law/Justice </option>
                    <option value="Construction/Real Estate">Construction/Real Estate</option>
                    <option value="Finance/Economics">Finance/Economics </option>
                    <option value="Environment/Ecology">Environment/Ecology </option>

                  </select>
                </div>
                <div className="mb-5">
                    <p className="form__label">ticketPrice*</p>
                    <input 
                    type="text" 
                    name="ticketPrice" 
                    value={formData.ticketPrice}
                    onChange={handleInputChange}
                    placeholder="TicketPrice"
                    className="w-full pr-4 py-3 border-b border-solid border-[#0066f6] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer"
                    ></input>
                </div>

                <div className="mb-5">
                    <p className="form__label">About*</p>
                    <input 
                    type="text" 
                    name="about" 
                    value={formData.about}
                    onChange={handleInputChange}
                    placeholder="About"
                    className="w-full pr-4 py-3 border-b border-solid border-[#0066f6] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer"
                    maxLength={100}
                    ></input>
                </div>
                
                <div className="mt-7">
                <button
                disabled={loading && true}
                  onClick={UpdateProfilHandler}
                  type="submit"
                  className="w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-3"
                >
                 {loading ? (<HashLoader size={25} color="#ffffff"/> ) : ('Update Profile') } 
                </button>
              </div>

            </form>
            </h1>
        </div>
    );
};

export default Profile;