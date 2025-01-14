import React from 'react'
import styles from './servicesdetailbanner.module.css';

export default function servicesdetailbanner() {
    return (
        <div className={`${styles.servicesbanner}`}>
            <div className={`${styles.aboutbannertextareaoutside}`}>
                <div className={`${styles.aboutbannertextareainside}`}>
                    <div className={`${styles.aboutbannertextareainsidetitle}`}>Service single</div>
                    <h3>Services Details</h3>
                </div>
            </div>
        </div>
    )
}
