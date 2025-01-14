import React from 'react'
import styles from './changelogs.module.css';
import changelogss from '/changelogs.svg'
import { Link } from 'react-router-dom';

function changelogs() {

    const handleLogout = () => {
        localStorage.removeItem('token'); // Remove token from localStorage
        window.location.href = '/login';  // Redirect to login page
    };

    return (
        <div className={`${styles.changelogs}`}>
            <div className={`${styles.contactbanner}`}>
                <div className={`${styles.aboutbannertextareaoutside}`}>
                    <div className={`${styles.aboutbannertextareainside}`}>
                        <div className={`${styles.aboutbannertextareainsidetitle}`}>Updates</div>
                        <h3>Changelog</h3>
                    </div>
                </div>
            </div>
            <div className={`${styles.changelogsimg}`}><img src={changelogss} alt="" /></div>
            <div className={`${styles.changelogslogout}`}>
                <div className={`${styles.changelogslogoutrow}`}>
                    <button onClick={handleLogout}>Logout</button>
                    <Link to={`/adminpage`} ><button>To Admin Page</button></Link>
                </div>
            </div>
        </div>
    )
}
export default changelogs
