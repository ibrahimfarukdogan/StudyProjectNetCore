import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Adminpagebanner from '../components/adminpagebanner'
import Adminpagecontent from '../components/adminpagecontent'

function AdminPage() { //burasi alternate navbar/footer/home degistirebilecegimiz yer

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            window.location.href = '/login';  // Redirect to login if no token is found
            return;
        }

    }, []);


    return (
        <div>
            <Adminpagebanner />
            <Adminpagecontent />
        </div>
    );
}

export default AdminPage;