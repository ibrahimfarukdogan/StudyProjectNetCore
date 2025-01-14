import React, { useEffect, useState } from 'react'
import Subscribe from '../components/subscribe'
import styles from './adminpagecontent.module.css';
import { fetchAlternativeMods, ToggleOppositeAlternativeModById } from '../services/api';
import { Link } from 'react-router-dom';

function adminpagecontent() {
    const [mods, setMods] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        const getMembers = async () => {
            const response = await fetchAlternativeMods();
            setMods(response); // Set the filtered active items
        };
        getMembers();
    }, []);

    const handleToggleMod = async (id) => {
        try {
            const updatedMod = await ToggleOppositeAlternativeModById(id); // Call the toggleMod function from api.js

            setMods((prevMods) =>
                prevMods.map((mod) => (mod.id === updatedMod.id ? updatedMod : mod))
            );
        } catch (error) {
            setErrorMessage('Failed to toggle mod value.');
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('token'); // Remove token from localStorage
        window.location.href = '/login';  // Redirect to login page
    };


    return (
        <div className={`${styles.adminpagecontent}`}>
            <div className={`${styles.adminpagecontentitems}`}>
                <h1>Mod List</h1>
                <ul>
                    {mods.map((mod) => (
                        <li key={mod.id}>
                            <span>{mod.componentName}: </span>
                            <span>{mod.alternativeMod ? 'AlternativeMod Activated' : 'AlternativeMod Disabled'}</span>
                            <button onClick={() => handleToggleMod(mod.id)}>Toggle Mod {mod.id}</button>
                        </li>
                    ))}
                </ul>
                <div className={`${styles.errorarea}`}>{errorMessage && errorMessage}</div>

                <div className={`${styles.adminpagecontentitemsrow}`}>
                    <button onClick={handleLogout}>Logout</button>
                    <Link to={`/changelog`} ><button>To ChangeLog Page</button></Link>
                </div>
            </div>
            <div className={`${styles.adminpagesubscribe}`}>
                <Subscribe />
            </div>
        </div>
    )
}
export default adminpagecontent