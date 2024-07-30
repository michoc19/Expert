import React, { useState } from "react";
import { Link } from "react-router-dom";
import signupImg from "../assets/images/signup.gif";
import avatarImg from "../assets/images/avatar.png";
import uploadImageToCloudinary from "../utils/uploadCloudinary";


const Signup = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewURL, setPreviewURL] = useState("");
  const [formData, setFormData] = useState({
<<<<<<< HEAD
    fullname: "",
    email: "",
    password: "",
    photo: "",
    gender: "",
    role: "",
  });
=======
    Fullname:'',
    email: '',
    password: '',
    photo:'',
    gender:'',
    role:'',
>>>>>>> 2e04b94306e14f3994cd05f8355279f34e6e0c7d

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileInputChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      setPreviewURL(URL.createObjectURL(file)); // Set preview URL
      const data = await uploadImageToCloudinary(file);
      setFormData({ ...formData, photo: data.url }); // Assuming the returned object has a 'url' property
    }
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    console.log(formData);
    // Implement form submission logic here (e.g., API call)
  };

  return (
    <section className="px-5 xl:px-0">
      <div className="max-w-[1170px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="hidden lg:block bg-primaryColor rounded-l-lg">
            <figure className="rounded-l-lg">
              <img
                src={signupImg}
                alt="Signup Illustration"
                className="w-full rounded-l-lg"
              />
            </figure>
          </div>

          <div className="rounded-l-lg lg:pl-16 py-10">
            <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10">
              Create an <span className="text-primaryColor">account</span>
            </h3>
            <form onSubmit={submitHandler}>
              <div className="mb-5">
                <input
                  type="text"
                  placeholder="Full Name"
<<<<<<< HEAD
                  name="fullname"
                  value={formData.fullname}
=======
                  name="Fullname"
                  value={formData.Fullname}
>>>>>>> 2e04b94306e14f3994cd05f8355279f34e6e0c7d
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
                    <option value="">Select</option>
                    <option value="admin">Admin</option>
                    <option value="expert">Expert</option>
                    <option value="user">User</option>
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
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="mb-5 flex items-center gap-3">
                <figure className="w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryColor flex items-center justify-center">
                  <img
                    src={previewURL || avatarImg}
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
                  </label>
                </div>
              </div>

              <div className="mt-7">
                <button
                  type="submit"
                  className="w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-3"
                >
                  Sign Up
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
