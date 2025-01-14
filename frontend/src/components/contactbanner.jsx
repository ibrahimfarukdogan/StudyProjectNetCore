import React from 'react'
import styles from './contactbanner.module.css';

function contactbanner() {
  return (
        <div className={`${styles.contactbanner}`}>
            <div className={`${styles.aboutbannertextareaoutside}`}>
                <div className={`${styles.aboutbannertextareainside}`}>
                    <div className={`${styles.aboutbannertextareainsidetitle}`}>Contact Us</div>
                    <h3>Feel Free To Reach Us</h3>
                </div>
            </div>
        </div>
  )
}
export default contactbanner