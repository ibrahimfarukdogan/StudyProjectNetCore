import React from 'react'
import styles from './homealtteam.module.css';
import { Link } from 'react-router-dom';
import brandlogo from '/clientlogos.svg'

function homealtteam() {
    return (
        <div className={`${styles.homealtteam}`}>
            <div className={`${styles.homebanner}`}>
                <div className={`${styles.homebannertextarea}`}>
                    <div className={`${styles.homebannertextareatitle}`}>Our Team</div>
                    <h1>Trusted by some Biggest Names</h1>
                    <Link to={`/teams`} className="item-link"><button>View Team Detail</button></Link>
                </div>
            </div>
            <div className={`${styles.homelogoarea}`}>
                <img src={brandlogo} alt="" />
            </div>
        </div>
    )
}
export default homealtteam
