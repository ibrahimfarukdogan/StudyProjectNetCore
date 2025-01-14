import React, { useState, useEffect } from 'react'
import styles from './services.module.css';
import { fetchServicesItems } from '../services/api';
import { Link, Navigate } from 'react-router-dom';

function services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const getServices = async () => {
      const items = await fetchServicesItems();
      setServices(items); // Set the filtered active items
    };
    getServices();
  }, []);

  const groupIntoRows = (data, size) => {
    let result = [];
    for (let i = 0; i < data.length; i += size) { //0,4/1,5
      result.push(data.slice(i, i + size));
    }
    return result;
  };

  // Group products into rows of 3
  const rows = groupIntoRows(services, 3);

  const handleItemClick = (url) => {
    console.log("url: " + url);
    //Navigate(url);
  };

  if (services.length === 0) {
    return <div>Loading...</div>;
}

  return (
    <div className={`${styles.services}`}>
      <div className={`${styles.servicesicon}`}>SERVICES</div>
      <h2>Get Control Over Your Business I take your finance to next level</h2>
      {rows.map((row, index) => (
        <div key={index} className={`${styles.servicesbanners}`}>
          {row.map((services) => (
            <Link to={`/services/${services.id}`} key={services.id} className="item-link">
              <div className={`${styles.servicesbanner}`} onClick={() => handleItemClick("services/" + services.id)}>
                <div className={`${styles.servicesbannercontent}`}>
                  <img src={import.meta.env.BASE_URL + services.imagePath} />
                  <div className={`${styles.servicesbannercontenttext}`}>
                    <div className={`${styles.servicesbannercontenth1}`}>{services.title}</div>
                    <div className={`${styles.servicesbannercontenth2}`}>{services.description}</div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ))}
      <hr />
    </div>
  )
}


export default services