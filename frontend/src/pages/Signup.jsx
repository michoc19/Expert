import  { useState } from "react";
import { Link,useNavigate } from "react-router-dom"; // Import Link from react-router-dom
import signupImg from "../assets/images/signup.gif";
import avatarImg from "../assets/images/avatar.png"; // Ensure this path is correct
import uploadImageToCloudinary from "../utils/uploadCloudinary.js";
import { BASE_URL } from "../config.js";
import { toast } from "react-toastify";
import HashLoader from "react-spinners/HashLoader.js";

const Signup = () => {
 const [selectedFile, setselectedFile]=useState(null);
 const [previewURL, setpreviewURL]=useState("");
 const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    FullName:'',
    email: '',
    password: '',
    photo:selectedFile,
    gender:'',
    role:'User',

});

const navigate = useNavigate();

const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
  console.error('Upload error:', error);
 }
};

const submitHandler = async event=>{
  event.preventDefault();
  setLoading(true);
  console.log(formData);


  try {
    const res = await fetch(`${BASE_URL}/api/v1/auth/register`,{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
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
    navigate('/login');

  } catch (error) {
    toast.error(error.message);
    setLoading(false);
  }
};

  return (
    <section className="px-5 xl:px-0">
      <div className="max-w-[1170px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* img box */}
          <div className="hidden lg:block bg-primaryColor rounded-l-lg">
            <figure className="rounded-l-lg">
              <img
                src={signupImg}
                alt="Signup Illustration"
                className="w-full rounded-l-lg"
              />
            </figure>
          </div>

          {/* sign up form */}
          <div className="rounded-l-lg lg:pl-16 py-10">
            <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10">
              Create an <span className="text-primaryColor">account</span>
            </h3>
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
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full pr-4 py-3 border-b border-solid border-[#0066f6] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer"
                  required
                />
              </div>
              <div className="flex flex-wrap gap-5 mb-5">
                <div className="flex items-center">
                  <label className="text-headingColor font-bold text-[16px] leading-7 mr-3">
                    Are you a:
                  </label>
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    className="text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none"
                  >
                    <option value="admin">Admin</option>
                    <option value="Expert">Expert</option>
                    <option value="User">User</option>
                  </select>
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
                    <option value="female">Female</option>
                    <option value="male">Male</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="mb-5 flex items-center gap-3">          
              <figure className="w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryColor flex items-center justify-center">
      <img
        src={previewURL || avatarImg}//previewURL
        alt="Avatar"
        className="w-full rounded-full"
      />
    </figure>

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
                  type="submit"
                  className="w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-3"
                >
                 {loading ? (<HashLoader size={35} color="#ffffff"/> ) : ('Sign Up') } 
                </button>
              </div>
              <p className="mt-5 text-center text-textColor">
                Already have an account?{" "}
                <Link to="/login" className="text-primaryColor font-medium ml-1">
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
