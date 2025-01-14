import React from 'react'
import styles from './abouthistory.module.css';
import greenborder from '/greenborder.svg'
import backgroundpatter from '/backgroundpatter.svg'

function abouthistory() {
    return (
        <div className={`${styles.abouthistory}`}>
            <div className={`${styles.abouthistorycontent}`}>
                <div className={`${styles.abouthistorytitle}`}>Our History</div>
                <h1>Better Website Means A User Experience</h1>
                <p>Ippsum is the result of synergy between our teams and our customers. Our company culture is focused on excellent productivity, customer satisfaction, respect for team and individual achievements.</p>
                <div className={`${styles.homeaboutcontentimgs}`} >
                    <img className={`${styles.homeaboutcontentaboutimg}`} src={greenborder} />
                    <img className={`${styles.homeaboutcontentsplatterimg}`} src={backgroundpatter} />
                    <iframe className={`${styles.homeaboutcontentmarkettimg}`}  
                    width="962" 
                    height="369" 
                    src="https://www.youtube.com/embed/l19ThTzoymw"
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen></iframe>
                </div>
            </div>
        </div>
    )
}
export default abouthistory
