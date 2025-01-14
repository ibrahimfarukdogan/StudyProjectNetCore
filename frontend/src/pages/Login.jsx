import React, { useEffect, useState } from 'react';
import Loginpage from '../components/loginpage'

function Login() {
  
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
        window.location.href = '/adminpage';  // Redirect to login if no token is found
        return;
    }

}, []);



    return (
        <div>
          <Loginpage />
        </div>
    );
}

export default Login;