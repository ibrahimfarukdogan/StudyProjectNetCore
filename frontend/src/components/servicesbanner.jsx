import React from 'react'
import styles from './servicesbanner.module.css';

function servicesbanner() {
  return (
        <div className={`${styles.servicesbanner}`}>
            <div className={`${styles.aboutbannertextareaoutside}`}>
                <div className={`${styles.aboutbannertextareainside}`}>
                    <div className={`${styles.aboutbannertextareainsidetitle}`}>Services</div>
                    <h3>Creative Services For Boost Your Business Growth.</h3>
                </div>
            </div>
        </div>
  )
}
export default servicesbanner
