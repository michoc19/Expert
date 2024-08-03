import React, { useState,useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import Link from react-router-dom
import { BASE_URL } from "../config.js";
import { toast } from "react-toastify";
import {  authContext } from "../context/AuthContex.jsx"
import HashLoader from "react-spinners/HashLoader.js";


const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const{ dispatch }=useContext(authContext);

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const submitHandler = async event=>{
        event.preventDefault();
        setLoading(true);
        console.log(formData);
      
      
        try {
          const res = await fetch(`${BASE_URL}/api/v1/auth/login`,{
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

          dispatch({
            type:'LOGIN_SUCCESS',
            payload:{
                user:responseData.data,
                token:responseData.token,
                role:responseData.role,
            },
          });

          console.log(responseData,"login data");
      
          setLoading(false);
          toast.success(responseData.message);
          navigate('/home');
      
        } catch (error) {
          toast.error(error.message);
          setLoading(false);
        }
      };

    return (
        <section className="px-5 lg:px-0">
            <div className="w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10">
                <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10">
                    Hello! <span className="text-primaryColor">Welcome</span> Back 👋
                </h3>
                <form className="py-4 md:py-0" onSubmit={submitHandler}>
                    <div className="mb-5">
                        <input
                            type="email"
                            placeholder="Enter Your Email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border-b border-solid border-[#0066f61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer"
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
                            className="w-full px-4 py-3 border-b border-solid border-[#0066f61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer"
                            required
                        />
                    </div>
                    <div className='mt-7'>
                        <button type="submit" className='w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-3'>
                            { loading ?<HashLoader size={35} color="#ffffff" /> : 'Login'}
                        </button>
                    </div>
                    <p className='mt-5 text-center text-textColor'>
                        Don't have an account?{' '}
                        <Link to="/register" className='text-primaryColor font-medium ml-1'>Register</Link>
                    </p>
                </form>
            </div>
        </section>
    );
};

export default Login;
