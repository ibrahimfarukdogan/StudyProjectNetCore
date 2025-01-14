import React from 'react'
import styles from './homealtinformation.module.css';
import homealtinformations from '/homealtinformation.svg';

function homealtinformation() {
    return (
        <div className={`${styles.homealtinformation}`}>
            <img src={homealtinformations} />
        </div>
    )
}
export default homealtinformation
