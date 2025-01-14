import React from 'react'
import styles from './contacttalk.module.css';
import greenborder from '/greenborder.svg'
import backgroundpatter from '/backgroundpatter.svg'
import contacttalkimg from '/contacttalk.png'
import phoneicon2 from '/phoneicon2.svg'
import messageicon from '/messageicon.svg'
import locationicon2 from '/locationicon2.svg'
import Subscribe from '../components/subscribe'

function contacttalk() {
    return (
        <div className={`${styles.contacttalk}`}>
            <div className={`${styles.servicesconsultingcontent}`}>
                <div className={`${styles.homeaboutcontentimgs}`} >
                    <img className={`${styles.homeaboutcontentsplatterimg}`} src={backgroundpatter} />
                    <img className={`${styles.homeaboutcontentaboutimg}`} src={greenborder} />
                    <img className={`${styles.homeaboutcontentmarkettimg}`} src={contacttalkimg} />
                </div>
                <div className={`${styles.servicesconsultingcontentcolumn}`}>
                    <div className={`${styles.servicesconsultingtitle}`}>Let’s talk</div>
                    <h1>Get In Touch With Us</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                    <div className={`${styles.servicesconsultingcontentcolumnrow}`}>
                        <img src={phoneicon2} />
                        <div className={`${styles.servicesconsultingcontentcolumnrowtext}`}>
                            <h3>Have Any Question?</h3>
                            <h4>Free +01 238 543 987</h4>
                        </div>
                    </div>
                    <div className={`${styles.servicesconsultingcontentcolumnrow}`}>
                        <img src={messageicon} />
                        <div className={`${styles.servicesconsultingcontentcolumnrowtext}`}>
                            <h3>Write Email</h3>
                            <h4>Info@consultalk.com</h4>
                        </div>
                    </div>
                    <div className={`${styles.servicesconsultingcontentcolumnrow}`}>
                        <img src={locationicon2} />
                        <div className={`${styles.servicesconsultingcontentcolumnrowtext}`}>
                            <h3>Visit Anytime</h3>
                            <h4>King Street, Prior Lake, New York.</h4>
                        </div>
                    </div>
                </div>

            </div>
            <Subscribe />

        </div>
    )
}
export default contacttalk
