import React from 'react'
import styles from './adminpagebanner.module.css';

function adminpagebanner() {
  return (
        <div className={`${styles.adminpagebanner}`}>
            <div className={`${styles.aboutbannertextareaoutside}`}>
                <div className={`${styles.aboutbannertextareainside}`}>
                    <div className={`${styles.aboutbannertextareainsidetitle}`}>Admin</div>
                    <h3>All Admin Activities</h3>
                </div>
            </div>
        </div>
  )
}
export default adminpagebanner