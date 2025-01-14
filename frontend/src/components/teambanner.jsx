import React from 'react'
import styles from './teambanner.module.css';

function teambanner() {
    return (
        <div className={`${styles.teambanner}`}>
            <div className={`${styles.aboutbannertextareaoutside}`}>
                <div className={`${styles.aboutbannertextareainside}`}>
                    <div className={`${styles.aboutbannertextareainsidetitle}`}>Team</div>
                    <h3>The Consultors</h3>
                </div>
            </div>
        </div>
    )
}
export default teambanner
