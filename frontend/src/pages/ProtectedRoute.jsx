import React from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
  const token = localStorage.getItem('token');

  // If there is no token, redirect to login page
  if (!token) {
    return <Navigate to="/login" />;
  }

  // If there is a token, allow access to the protected page
  return children;
}

export default ProtectedRoute;