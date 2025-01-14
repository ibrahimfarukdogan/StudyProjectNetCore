import React, { useEffect } from 'react'
import Changelogs from '../components/changelogs'

function Changelog() {
  
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      window.location.href = '/login';  // Redirect to login if no token is found
      return;
    }

  }, []);

  return (
    <div>
      <Changelogs />
    </div>
  )
}
export default Changelog
