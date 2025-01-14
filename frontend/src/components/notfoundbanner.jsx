import React from 'react'
import styles from './notfoundbanner.module.css';
import greenborder from '/greenborder.svg'
import backgroundpatter from '/backgroundpatter.svg'

export default function notfoundbanner() {
    return (
        <div className={`${styles.notfoundbanner}`}>
            <div className={`${styles.homeaboutcontentimgs}`} >
                <img className={`${styles.homeaboutcontentsplatterimg}`} src={backgroundpatter} />
                <img className={`${styles.homeaboutcontentaboutimg}`} src={greenborder} />
                <div className={`${styles.homeaboutcontenttextarea}`} >
                    <h1>404</h1>
                    <h2>Page Not Found</h2>
                    <p>This Page Doesn't or was removed! We suggest you back to home</p>
                    <button>Back to home</button>
                </div>
            </div>
        </div>
    )
}
