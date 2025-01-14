import React, { useEffect, useState } from 'react'
import styles from './servicesdetails.module.css';
import { useParams } from 'react-router-dom';
import { fetchServicesItemsById, fetchServicesItemsDataById } from '../services/api';
import arrowicon from '/righticon.svg'

function servicesdetails() {
    const { id } = useParams(); // Get the `id` from the URL
    const [item, setItem] = useState(null);
    const [itemdetail, setItemdetail] = useState([]);

    useEffect(() => {
        const getServices = async () => {
            const items = await fetchServicesItemsById(id);
            setItem(items); // Set the filtered active items
        };
        const getServicesdetails = async () => {
            const items = await fetchServicesItemsDataById(id);
            setItemdetail(items); // Set the filtered active items
        };
        getServices();
        getServicesdetails();
    }, []);

    const scrollLeft = () => {
        document.getElementById('items-container').scrollBy({ left: -300, behavior: 'smooth' });
    };

    const scrollRight = () => {
        document.getElementById('items-container').scrollBy({ left: 300, behavior: 'smooth' });
    };

    if (!item || itemdetail.length === 0) {
        return <div>Loading...</div>;  // Show loading message while fetching the item
    }
    return (
        <div className={`${styles.servicesdetails}`}>
            <div className={`${styles.servicesdetailscontent}`}>
                <img className={`${styles.servicesdetailscontentimg}`} src={import.meta.env.BASE_URL + item.imagePath} />
                <div className={`${styles.servicesdetailscontentrow}`}>
                    <div className={`${styles.servicesdetailscontentrowcolumn}`}>
                        <h1>{item.title}</h1>
                        <p>{item.description}</p>
                    </div>
                    <div className={`${styles.servicesdetailscontentrowbuttons}`}>
                        <button onClick={scrollLeft}><img className={`${styles.servicesdetailscontentrowbuttonsimg2}`} src={arrowicon} /></button>
                        <button onClick={scrollRight}><img className={`${styles.servicesdetailscontentrowbuttonsimg1}`} src={arrowicon} /></button>
                    </div>
                </div>
                <div className={`${styles.servicesdetailscontentrow2}`}>
                    <div id="items-container" className={`${styles.servicesdetailscontentrow2items}`}>
                        {itemdetail.map((services) => (
                            <div key={services.id} className={`${styles.aboutprinciplescard}`}>
                                <img className={`${styles.servicesdetailscontentimg}`} src={import.meta.env.BASE_URL + services.imagePath} />
                                <h3>{services.title}</h3>
                                <h4>{services.text}</h4>
                                <hr />
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}
export default servicesdetails
