import React, { useEffect, useState } from 'react'
import styles from './homealtservices.module.css';
import { fetchServicesItems } from '../services/api';
import arrowicon from '/righticon.svg'
import { Link } from 'react-router-dom';

export default function homealtservices() {
    const [itemdetail, setItemdetail] = useState([]);

    useEffect(() => {
        const getServices = async () => {
            const items = await fetchServicesItems();
            setItemdetail(items);
        };
        getServices();
    }, []);

    const scrollLeft = () => {
        document.getElementById('items-container').scrollBy({ left: -300, behavior: 'smooth' });
    };

    const scrollRight = () => {
        document.getElementById('items-container').scrollBy({ left: 300, behavior: 'smooth' });
    };

    if (itemdetail.length === 0) {
        return <div>Loading...</div>;  // Show loading message while fetching the item
    }
    return (
        <div className={`${styles.servicesdetails}`}>
            <div className={`${styles.servicesdetailscontent}`}>
                <div className={`${styles.servicesdetailscontentrow}`}>
                    <div className={`${styles.servicesdetailscontentrowcolumn}`}>
                        <div className={`${styles.servicesdetailscontenttitle}`}>SERVICES</div>
                        <h1>Get Control Over Your Business I take your finance to next level</h1>
                        <div className={`${styles.servicesdetailscontentrowbuttons}`}>
                            <div className={`${styles.servicesdetailscontentrowbuttonsouter1}`}>
                                <button onClick={scrollLeft}><img className={`${styles.servicesdetailscontentrowbuttonsimg2}`} src={arrowicon} /></button>
                            </div>
                            <div className={`${styles.servicesdetailscontentrowbuttonsouter2}`}>
                                <button onClick={scrollRight}><img className={`${styles.servicesdetailscontentrowbuttonsimg1}`} src={arrowicon} /></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${styles.servicesdetailscontentrow2}`}>
                    <div id="items-container" className={`${styles.servicesdetailscontentrow2items}`}>
                        {itemdetail.map((services) => (
                            <div key={services.id} className={`${styles.aboutprinciplescard}`}>
                                <div className={`${styles.servicesdetailscontentouterimg}`}><img className={`${styles.servicesdetailscontentimg}`} src={import.meta.env.BASE_URL + services.imagePath} /></div>
                                <div className={`${styles.aboutprinciplescardtextarea}`}>
                                    <h3>{services.title}</h3>
                                    <h4>{services.description}</h4>
                                    <Link to={`/services/${services.id}`} className="item-link"><button>Learn More</button></Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}
