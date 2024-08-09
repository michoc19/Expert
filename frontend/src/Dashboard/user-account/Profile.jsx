import React, {useContext, useEffect,useState } from "react";
import { Link,useNavigate } from "react-router-dom"; // Import Link from react-router-dom
import avatarImg from "../../assets/images/avatar.png"; // Ensure this path is correct
import uploadImageToCloudinary from "../../utils/uploadCloudinary.js";
import { BASE_URL,token  } from "../../config.js";
import { toast } from "react-toastify";
import HashLoader from "react-spinners/HashLoader.js";
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import Select from 'react-select'; 
import { authContext } from '../../context/AuthContex.jsx';


const Profile = ({user}) =>{
    const [selectedFile, setselectedFile]=useState(null);
    const [previewURL, setpreviewURL]=useState("");
    const [loading, setLoading] = useState(false);
    const { dispatch } = useContext(authContext);

   
     const [formData, setFormData] = useState({
       FullName:'',
       email: '',
       phone: '',
       languages:[],
       photo:null,
       gender:'',
       role:'User',
       _id:''
   
   });

   const handleUpdate = () => {
    dispatch({ type: 'UPDATE_USER', payload: { photo: formData.photo } });
}; 
   
   const navigate = useNavigate();
   useEffect(()=>{
    setFormData({FullName:user.FullName,email:user.email,phone:user.phone,languages: user.languages || [],Time_zone:user.Time_zone,photo:user.photo,gender:user.gender,role:user.role,_id:user._id})
},[user]);
   
   const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
};

// Handle changes in react-select component
const handleSelectChange = (selectedOptions) => {
    // Convert selectedOptions to an array of values
    const selectedValues = selectedOptions ? selectedOptions.map(option => option.value) : [];
    setFormData({ ...formData, languages: selectedValues });
};

  
const handleChangeNumber = (value) => {
    if (value) {
        setFormData({ ...formData, phone: value});
      } else {
        // Notify if the phone number is invalid
        toast.error('Invalid phone number. Please enter a valid phone number.');
      }   
};

   const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result); 
        reader.onerror = (error) => reject(error);
    });
  };
   
   const handleFileInputChange = async (event)=>{
     const file= event.target.files[0];
     if (!file) {
        toast.error('No file selected');
        return;
      }
    
      const maxSize = 5 * 1024 * 1024; // 5 MB
      if (file.size > maxSize) {
        toast.error('File size exceeds 5 MB. Please select a smaller file.');
        return;
      }

    try {
       const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = () => {
      const base64Image = reader.result;
      setpreviewURL(base64Image);
      setselectedFile(base64Image);
      setFormData({ ...formData, photo: base64Image });
   
    } }catch (error) {
     toast.error('Failed to upload image');
     console.error(error);
    }
   
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
       const res = await fetch(`${BASE_URL}/api/v1/users/${formData._id}`,{
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
       navigate('/users/profile/me');
   
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
        <h1 className="mt-10">
            <form onSubmit={submitHandler}>
              <div className="mb-5">
                <input
                  type="text"
                  placeholder="Full Name"
                  name="FullName"
                  value={formData.FullName}
                  onChange={handleInputChange}
                  className="w-full pr-4 py-3 border-b border-solid border-[#0066f6] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer"
                  required
                />
              </div>
              <div className="mb-5">
                <input
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full pr-4 py-3 border-b border-solid border-[#0066f6] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer"
                  required
                />
              </div>
              <div className="mb-5">
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
              
              <div className="flex flex-wrap gap-5 mb-5">
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
              </div>

              <div className="mb-5 flex items-center gap-3">          
              {formData.photo && (<figure className="w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryColor flex items-center justify-center">
                <img
                src={ previewURL || formData.photo }//formData.photo
                alt="Avatar"
                className="w-full rounded-full"
                />
                </figure>)
              }

                <div className="relative w-[130px] h-[50px]">
                  <input
                    type="file"
                    name="photo"
                    id="customFile"
                    onChange={handleFileInputChange}
                    accept=".jpg, .png"
                    className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <label
                    htmlFor="customFile"
                    className="absolute top-0 left-0 w-full h-full flex items-center px-[0.75rem] py-[0.375rem] text-[15px] leading-6 overflow-hidden bg-[#0066ff46] text-headingColor font-semibold rounded-lg truncate cursor-pointer"
                  >
                    Upload Photo
                  </label><br /><br />
                  <p className="text-red-500 mt-2  text-[15px]">(Max: 5 MB)</p>
                </div>
              </div>

              <div className="mt-7">
                <button
                disabled={loading && true}
                  onClick={handleUpdate}
                  type="submit"
                  className="w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-3"
                >
                 {loading ? (<HashLoader size={25} color="#ffffff"/> ) : ('Update') } 
                </button>
              </div>
               
            </form>
        </h1>
    )
};

export default Profile;