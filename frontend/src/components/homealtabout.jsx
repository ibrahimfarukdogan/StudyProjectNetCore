import React from 'react'
import styles from './homealtabout.module.css';
import aboutimage from "/homeaboutimg.png"
import homealtabouts from "/homealtabout.svg"
import backgroundpatter from '/backgroundpatter.svg'
import messageicon2 from '/messageicon2.svg'
import phoneicon3 from '/phoneicon3.svg'
import { Link } from 'react-router-dom';

function homealtabout() {
    return (
        <div className={`${styles.servicesdetailcontact}`}>
            <div className={`${styles.contactcontent}`}>
                <div className={`${styles.contactcontentcolumn}`}>
                    <div className={`${styles.contactcontenttitle}`}>About Me</div>
                    <h1>About our Consuting Agency Team</h1>
                    <p className={`${styles.contactcontentp1}`}>We create experiences and build products that make business grow</p>
                    <p className={`${styles.contactcontentp2}`}>Get help from Alex Moore, a professional business coach with advanced experience on growth and business scaling.</p>

                    <div className={`${styles.contactcontentcolumnrow}`}>
                        <img src={messageicon2} />
                        <h3>Buschemia@gmailcom</h3>
                    </div>
                    <div className={`${styles.contactcontentcolumnrow}`}>
                        <img src={phoneicon3} />
                        <h3>(001) 5648 6584</h3>
                    </div>
                    <Link to={`/contact`}><button>Make An Appointment</button></Link>
                </div>
                <div className={`${styles.homeaboutcontentimgs}`} >
                    <img className={`${styles.homeaboutcontentsplatterimg}`} src={backgroundpatter} />
                    <img className={`${styles.homeaboutcontentaboutimg}`} src={aboutimage} />
                    <img className={`${styles.homeaboutcontentmarkettimg}`} src={homealtabouts} />
                </div>
            </div>
        </div >
    )
}
export default homealtabout