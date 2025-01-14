import React, { useEffect, useState } from 'react'
import styles from './homealtpricing.module.css';
import backgroundpatter from '/backgroundpatter.svg'
import { fetchPrices } from '../services/api';
import Talkcontact from './talkcontact'

function homealtpricing() {
    const [prices, setPrices] = useState([]);
    const [filteredPrices, setFilteredPrices] = useState([]); // To hold the filtered prices based on selectedTime
    const [selectedTime, setSelectedTime] = useState("Monthly");

    useEffect(() => {
        const getPrices = async () => {
            const items = await fetchPrices();
            setPrices(items); // Set the filtered active items
            filterPrices(items, selectedTime);
        };
        getPrices();
    }, []);

    const filterPrices = (items, time) => {
        const filtered = items.filter(item => item.totaltime === time);
        setFilteredPrices(filtered);
    };

    // Handle radio button change
    const handleRadioChange = (event) => {
        const time = event.target.value;
        setSelectedTime(time);  // Update the selectedTime
        filterPrices(prices, time);  // Filter prices based on the new selection
    };

    if (filteredPrices.length === 0) {
        return <div>Loading...</div>;
    }
    return (
        <div className={`${styles.servicespricing}`}>
            <div className={`${styles.servicespricingcontent}`}>
                <div className={`${styles.servicespricingcontentrow}`}>
                    <div className={`${styles.servicespricingcontentrowtext}`}>
                        <div className={`${styles.servicespricingtitle}`}>Choose Your Plan</div>
                        <h1>Save With Our Pricing Packages</h1>
                        <p>Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque. Massa placerat duis ultricies lacus sed turpis. Pellentesque pulvinar pellentesque habitant morbi tristique.</p>
                        <div className={`${styles.servicespricingcontentrowtextradio}`}>
                            <label htmlFor="Monthly" className={`${styles.servicespricingcontentrowtextradiobanner}`}>
                                <input type="radio"
                                    className={`${styles.radiobtn}`}
                                    id="Monthly"
                                    name="pricing"
                                    value="Monthly"
                                    checked={selectedTime === "Monthly"}
                                    onChange={handleRadioChange} />
                                <span className={`${styles.radiobtnspn}`} />Monthly</label>
                            
                            <label htmlFor="Yearly" className={`${styles.servicespricingcontentrowtextradiobanner}`}>
                                <input type="radio"
                                    id="Yearly"
                                    className={`${styles.radiobtn}`}
                                    name="pricing"
                                    value="Yearly"
                                    checked={selectedTime === "Yearly"}
                                    onChange={handleRadioChange} />
                                <span className={`${styles.radiobtnspn}`} />Yearly</label>
                        </div>
                    </div>

                    {filteredPrices.map((casepost) => (
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
            <div className={`${styles.content1alt}`}>
                <div className={`${styles.content1altimg}`}>
                    <div className={`${styles.homeaboutcontentimgs}`}>
                        <img className={`${styles.homeaboutcontentsplatterimg}`} src={backgroundpatter} />
                        <div className={`${styles.homeaboutcontentaboutimg}`}><Talkcontact /></div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default homealtpricing
