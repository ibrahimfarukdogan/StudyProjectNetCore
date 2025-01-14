import React from 'react'
import styles from './homealtbanner.module.css';
import meetingicon from "/meetingicon.svg"
import backgroundpatter from '/backgroundpatter.svg'
import { Link } from 'react-router-dom';

function homealtbanner() {
    return (
        <div className={`${styles.homealtbanner}`}>
            <div className={`${styles.homebanner}`}>
                <div className={`${styles.homebannerleft}`}>
                    <div className={`${styles.homebannerleftsplatter1}`}>
                        <img src={backgroundpatter} />
                    </div>
                    <div className={`${styles.homebannertextareainside}`}>
                        <div className={`${styles.homebannertextareainsidetitle}`}>Hello’ I Am</div>
                        <h2> Adam Buschemia Business Consultant</h2>
                        <h3>Get help from Alex Moore, a professional business coach with advanced experience on growth and business scaling.</h3>
                        <Link to={`/contact`} className={`${styles.homebannertextareainsidelink}`}><button className={`${styles.homebannertextareainsidebuttonsinside2}`}><img src={meetingicon} />Book a Meeting</button></Link>
                    </div>
                    <div className={`${styles.homebannerleftsplatter2}`}>
                        <img src={backgroundpatter} />
                    </div>
                </div>
                <div className={`${styles.homebannerright}`}>
                </div>
            </div>
            <div className={`${styles.homecardsarea}`}>
                <div className={`${styles.homecardsarearow}`}>
                    <div className={`${styles.homecards1}`}>
                        <div className={`${styles.homecardstextarea}`}>
                            <h3>Finance & Restructuring</h3>
                            <p>Get help from Alex Moore, a professional business coach with advanced experience on growth and business scaling.</p>
                            <Link to={`/services`}><button>Our Services</button></Link>
                        </div>
                    </div>
                    <div className={`${styles.homecards2}`}>
                        <div className={`${styles.homecardstextarea}`}>
                            <h3>Finance & Restructuring</h3>
                            <p>Get help from Alex Moore, a professional business coach with advanced experience on growth and business scaling.</p>
                            <Link to={`/services`}><button>More About</button></Link>
                        </div>
                    </div>
                    <div className={`${styles.homecards3}`}>
                        <div className={`${styles.homecardstextarea2}`}>
                            <h3>Consultalk Result</h3>
                            <p>Get help from Alex Moore, a professional business coach with advanced experience on growth and business scaling.</p>
                            <Link to={`/casestudy`}><button>Explore Our Solution</button></Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default homealtbanner
