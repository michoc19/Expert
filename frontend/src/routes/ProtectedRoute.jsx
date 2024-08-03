import { authContext } from '../context/AuthContex';
import { Navigate } from 'react-router-dom';
import {  useContext } from 'react';

const ProtectedRoute =({  children,allowedRoles}) =>{
    const {token,role} = useContext(authContext);
    const isAllowed=allowedRoles.includes(role);
    const accessibleRoute =token && isAllowed ? children :<Navigate to='/login' replace='True'/>

    return accessibleRoute

};

export default ProtectedRoute;