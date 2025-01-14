import React, { useEffect, useState } from 'react'
import styles from './Footer.module.css';
import footerlogo from "/logo.svg"
import footerborder from "/footerborder.png"
import { fetchAlternativeModById } from '../services/api';
import backgroundpatter from '/backgroundpatter.svg'
import { Link } from 'react-router-dom';

function Footer() {
    const [isModEnabled, setIsModEnabled] = useState(null);
    useEffect(() => {
        const getMod = async () => {
            const mod = await fetchAlternativeModById(2);
            setIsModEnabled(mod.alternativeMod); // Set the filtered active items
        };
        getMod();
    }, []);
    return (
        <div>
            {isModEnabled ? (
                <div className={`${styles.footeralt}`}>
                    <div className={`${styles.content2alt}`}>
                        <div className={`${styles.contentinside2itemsalt}`}>
                            <div className={`${styles.contentinside2itemslogo}`}>
                                <img src={footerlogo} />
                                <h4>Consultalk</h4>
                            </div>
                            <img className={`${styles.contentinside2itemslogosplatter}`} src={backgroundpatter} />
                        </div>
                        <div className={`${styles.contentinside2itemsalt}`}>
                            <h2>Help Link</h2>
                            <li>Customers Services</li>
                            <li>IT Department</li>
                            <li>About Our Company</li>
                            <li>Business Growth</li>
                            <li>Make An Appointment</li>
                        </div>
                        <div className={`${styles.contentinside2itemsalt}`}>
                            <h2>Utility Pages</h2>
                            <li>Styleguide</li>
                            <li>Start Here</li>
                            <li>404 Not Found</li>
                            <li>Password Protected  </li>
                            <li>Licenses</li>
                            <li>Changelog</li>
                        </div>
                        <div className={`${styles.contentinside2itemsalt}`}>
                            <h2>Address</h2>
                            <h3>Business Consulting.</h3>
                            <p>Graaf Florisstraat 22A,3021 CH RotterdamNetherlands</p>
                            <hr />
                            <h3>Financial Consulting.</h3>
                            <p>365 Gran Via de CortsCatalanes, BA 08015</p>
                        </div>
                        <div className={`${styles.contentinside2itemsalt}`}>
                            <h2>Work inquiries</h2>
                            <p>Interested in working with us?</p>
                            <h5>info@consulting.com</h5>
                            <p>Any question call</p>
                            <h5>(01) 25444 32001</h5>
                            <h6>Fb. / lg. / Tw. / Be.</h6>
                            </div>
                    </div>
                    <div className={`${styles.bottomcontentalt}`}>©2020 Consultalk. All rights reserved | Terms of Service | Privacy Policy</div>
                </div>
            ) : (
                <div className={`${styles.footer}`}>
                    <div className={`${styles.content}`}>
                        <div className={`${styles.contentinside1}`}>
                            <div className={`${styles.contentinside1logo}`}>
                                <img src={footerlogo} />
                                <h2>AskExperts</h2>
                            </div>
                            <h3>Fb. / lg. / Tw. / Be.</h3>
                        </div>
                        <div className={`${styles.contentinside2}`}>
                            <div className={`${styles.contentinside2items}`}>
                                <h2>Product</h2>
                                <img src={footerborder} />
                                <li>Service</li>
                                <li>FAQ</li>
                                <li>Single Service</li>
                                <li>Get Quote</li>
                                <li>Prices</li>
                            </div>
                            <div className={`${styles.contentinside2items}`}>
                                <h2>Company</h2>
                                <img src={footerborder} />
                                <li>About</li>
                                <li>News</li>
                                <li>Contacts</li>
                                <li>Testimonials</li>
                                <li>Our Team</li>
                                <li>Our Approach</li>
                            </div>
                            <div className={`${styles.contentinside2items}`}>
                                <h2>Address</h2>
                                <img src={footerborder} />
                                <h3>1700 W Blancke St, kiyev port south USA, America</h3>
                                <Link to={`/contact`} className={`${styles.homeblogtitletextlink}`}><button>Book an Appoinment</button></Link>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.bottomcontent}`}>©2022 Consultalk. All rights reserved | Terms of Service | Privacy Policy</div>
                </div>
            )}
        </div>
    )
}

export default Footer
