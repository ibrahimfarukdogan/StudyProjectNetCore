import React from 'react'
import styles from './blogsbanner.module.css';

function blogsbanner() {
    return (
        <div className={`${styles.blogsbanner}`}>
            <div className={`${styles.aboutbannertextareaoutside}`}>
                <div className={`${styles.aboutbannertextareainside}`}>
                    <div className={`${styles.aboutbannertextareainsidetitle}`}>Blog</div>
                    <h3>Latest Blogs & News</h3>
                </div>
            </div>
        </div>
    )
}
export default blogsbanner