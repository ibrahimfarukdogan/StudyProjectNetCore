import React from 'react'
import styles from './homealtexperience.module.css';
import experience1 from '/experience1.svg';
import experience2 from '/experience2.svg';
import experience3 from '/experience3.svg';
import backgroundpatter from '/backgroundpatter.svg'

function homealtexperience() {
    return (
        <div className={`${styles.homealtexperience}`}>
            <img className={`${styles.homealtexperienceimg1}`} src={backgroundpatter} alt="" />
            <div className={`${styles.homealtexperiencecontent}`}>
                <div className={`${styles.homealtexperiencecontentcolumn}`}>
                    <div className={`${styles.homealtexperiencecontentcolumntitle}`}>experIEnce</div>
                    <h1>More than 25 years of experience</h1>
                    <p>3000+ our clients are insured around the World</p>
                </div>
                <div className={`${styles.homealtexperiencecontentrow}`}>
                    <img src={experience1} alt="" />
                    <img src={experience2} alt="" />
                    <img src={experience3} alt="" />
                </div>
            </div>
            <img className={`${styles.homealtexperienceimg2}`} src={backgroundpatter} alt="" />
        </div>
    )
}
export default homealtexperience
