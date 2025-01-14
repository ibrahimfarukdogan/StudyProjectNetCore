import React from 'react'
import styles from './pagesbanner.module.css';

function pagesbanner() {
    return (
        <div className={`${styles.pagesbanner}`}>
            <div className={`${styles.aboutbannertextareaoutside}`}>
                <div className={`${styles.aboutbannertextareainside}`}>
                    <div className={`${styles.aboutbannertextareainsidetitle}`}>Pages</div>
                    <h3>Creative Pages For Education Growth.</h3>
                </div>
            </div>
        </div>
    )
}
export default pagesbanner