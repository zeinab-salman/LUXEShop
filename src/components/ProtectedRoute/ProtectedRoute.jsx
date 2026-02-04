import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element, ...rest }) => {
  const user = JSON.parse(localStorage.getItem('user'));

 
  const isAuthenticated = user && user.role === 'admin'; 

  if (isAuthenticated) {
    return element; 
  } else {
    return <Navigate to="/login" />;
  }
};

export default ProtectedRoute;
