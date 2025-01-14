import React, { Component } from 'react'
import styles from './homeabout.module.css';
import brandlogo from '/clientlogos.svg'
import staricon from '/staricon.svg'
import smileicon from '/smileicon.svg'
import aboutimage from "/assets/aboutimagee.png"
import backgroundpatter from '/backgroundpatter.svg'
import marketplace from '/marketplace.svg'

export class homeabout extends Component {
    render() {
        return (
            <div className={`${styles.homeabout}`}>
                <img className={`${styles.homeaboutimg}`} src={brandlogo} />
                <div className={`${styles.homeaboutcontent}`}>
                    <div className={`${styles.homeaboutcontenttext}`}>
                        <div className={`${styles.homeaboutcontenttexticon}`}>ABOUT US</div>
                        <h1>About our Consulting Agency Team</h1>
                        <h2>We create experiences and build products that make business grow</h2>
                        <h3>Get help from Alex Moore, a professional business coach with advanced experience on growth and business scaling.</h3>
                        <div className={`${styles.homeaboutcontenttextsubicons}`}>
                            <div className={`${styles.homeaboutcontenttextsubiconshalf}`}>
                                <div className={`${styles.homeaboutcontenttextsubiconshalfdiv}`}>
                                    <div className={`${styles.homeaboutcontenttextsubiconsh2}`}><img src={staricon} />400+</div>
                                    <div className={`${styles.homeaboutcontenttextsubiconsh3}`}>Business Services</div>
                                </div>
                                <hr className={`${styles.homeaboutcontenttextsubiconshalfdivhr}`} />
                            </div>
                            <div className={`${styles.homeaboutcontenttextsubiconsdiv}`}>
                                <div className={`${styles.homeaboutcontenttextsubiconsh2}`}><img src={smileicon} />100+</div>
                                <div className={`${styles.homeaboutcontenttextsubiconsh3}`}>Happy Customer</div>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.homeaboutcontentimgs}`} >
                        <img className={`${styles.homeaboutcontentsplatterimg}`} src={backgroundpatter} />
                        <img className={`${styles.homeaboutcontentaboutimg}`} src={aboutimage} />
                        <img className={`${styles.homeaboutcontentmarkettimg}`} src={marketplace} />
                    </div>


                </div>
            </div>

        )
    }
}

export default homeabout