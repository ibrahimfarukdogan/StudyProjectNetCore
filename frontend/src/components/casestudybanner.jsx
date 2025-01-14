import React from 'react'
import styles from './casestudybanner.module.css';

function casestudybanner() {
    return (
        <div className={`${styles.casestudybanner}`}>
            <div className={`${styles.aboutbannertextareaoutside}`}>
                <div className={`${styles.aboutbannertextareainside}`}>
                    <div className={`${styles.aboutbannertextareainsidetitle}`}>Case Studies</div>
                    <h3>Case Studies</h3>
                </div>
            </div>
        </div>
    )
}
export default casestudybanner