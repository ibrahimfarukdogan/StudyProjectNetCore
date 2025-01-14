import React from 'react'
import styles from './servicesdetailvision.module.css';
import greenborder from '/greenborder.svg'
import orangeborder from '/orangeborder.svg'
import backgroundpatter from '/backgroundpatter.svg'

function servicesdetailvision() {
    return (
        <div className={`${styles.servicesdetailvision}`}>
            <div className={`${styles.abouthistorycontent}`}>
                <div className={`${styles.abouthistorytitle}`}>Our History</div>
                <h1>Strategy for Every Stage in the Client's Journey</h1>
                <div className={`${styles.homeaboutcontentimgs}`} >
                    <img className={`${styles.homeaboutcontentaboutimg}`} src={greenborder} />
                    <img className={`${styles.homeaboutcontentaboutimg2}`} src={orangeborder} />
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
export default servicesdetailvision
