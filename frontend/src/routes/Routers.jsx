import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Signup from '../pages/Signup';
import Services from '../pages/Services';
import Contact from '../pages/Contact';
import Experts from '../pages/Expert/Experts';
import Expertdetail from '../pages/Expert/Expertdetail';
// import EventBook from '../pages/EventBook'; // Ensure this import path is correct
import Login from '../pages/Login';
// import EventTicket from '../pages/EventTicket';
import EventCreat from '../pages/EventCreat';
import MyAccount from '../Dashboard/user-account/MyAccount';
import Dashboard from '../Dashboard/expert-account/Dashboard';
import ProtectedRoute from './ProtectedRoute';

const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/home' element={<Home />} />
      <Route path='/register' element={<Signup />} /> 
      <Route path='/login' element={<Login />} />
      <Route path='/services' element={<Services />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/experts' element={<Experts />} />
      <Route path='/experts/:id' element={<Expertdetail />} />
      {/* <Route path='/event' element={<EventBook />} />
      <Route path='/eventticket' element={<EventTicket />} /> */}
      <Route path='/event' element={<EventCreat/>} />
      <Route path='/users/profile/me' element={ <ProtectedRoute allowedRoles={['User']}><MyAccount/></ProtectedRoute>} />
      <Route path='/experts/profile/me' element={ <ProtectedRoute allowedRoles={['Expert']}><Dashboard/></ProtectedRoute> } />


    </Routes>
  );
};

export default Routers;