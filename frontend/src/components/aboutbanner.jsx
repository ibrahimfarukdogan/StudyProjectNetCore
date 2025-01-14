import React from 'react'
import styles from './aboutbanner.module.css';

function aboutbanner() {
    return (
        <div className={`${styles.aboutbanner}`}>
            <div className={`${styles.aboutbannertextareaoutside}`}>
                <div className={`${styles.aboutbannertextareainside}`}>
                    <div className={`${styles.aboutbannertextareainsidetitle}`}>About</div>
                    <h3>Creative Services For Boost Your Business Growth.</h3>
                </div>
            </div>
        </div>
    )
}
export default aboutbanner