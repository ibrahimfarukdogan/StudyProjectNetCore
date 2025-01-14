import React, { useEffect, useState } from 'react'
import styles from './servicespricing.module.css';
import backgroundpatter from '/backgroundpatter.svg'
import { fetchPrices } from '../services/api';

function servicespricing() {
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    const getPrices = async () => {
      const items = await fetchPrices();
      setPrices(items); // Set the filtered active items
    };
    getPrices();
  }, []);

  if (prices.length === 0) {
    return <div>Loading...</div>;
  }
  return (
    <div className={`${styles.servicespricing}`}>
      <div className={`${styles.servicespricingcontent}`}>
        <div className={`${styles.servicespricingtitle}`}>PRICING</div>
        <h1>Our Pricing Plan</h1>
        <div className={`${styles.servicespricingcontentrow}`}>

          {prices.map((casepost) => (
            <div key={casepost.id} className={`${styles.servicespricingcard}`}>

              <div className={`${styles.servicespricingcardbanner}`}>
                <div className={`${styles.servicespricingcardbannertext}`}>
                  <img className={`${styles.servicespricingcardsplatterimg}`} src={backgroundpatter} />
                  <div className={`${styles.servicespricingcardbannertextinside}`}>
                    <h3>{casepost.title}</h3>
                    <h4>{casepost.description}</h4>
                    <hr />
                    <div className={`${styles.servicespricingcardbannerrow}`}>
                      <h1>${casepost.price}</h1>
                      <div className={casepost.id === 2 ? `${styles.servicespricingcardtitle2}` : `${styles.servicespricingcardtitle1}`} >{casepost.totaltime}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`${styles.servicespricingcardrow}`}>
                <div className={`${styles.servicespricingcardrowicon}`}>＞</div>
                <h3>24/7 system monitoring</h3>
              </div>
              <div className={`${styles.servicespricingcardrow}`}>
                <div className={`${styles.servicespricingcardrowicon}`}>＞</div>
                <h3>Security management</h3>
              </div>
              <div className={`${styles.servicespricingcardrow}`}>
                <div className={`${styles.servicespricingcardrowicon}`}>＞</div>
                <h3>Secure finance backup</h3>
              </div>
              <div className={`${styles.servicespricingcardrow}`}>
                <div className={`${styles.servicespricingcardrowicon}`}>＞</div>
                <h3>Remote support</h3>
              </div>
              <button className={`${styles.servicespricingcardbutton}`}>Get This Plan</button>

            </div>
          ))}


        </div>
      </div>
    </div>

  )
}
export default servicespricing
