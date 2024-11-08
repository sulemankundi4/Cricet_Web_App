import React from 'react';
import { Navigate } from 'react-router-dom';
import { isAuthenticated } from '../utils/Auth.js';

const ProtectedRoute = ({ children }) => {
  console.log('Hello ');
  if (!isAuthenticated()) {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;
