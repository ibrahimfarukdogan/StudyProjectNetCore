import React from 'react'
import styles from './pagescontent.module.css';
import { Link } from 'react-router-dom';

function pagescontent
    () {
    return (
        <div className={`${styles.pagescontent}`}>
            <div className={`${styles.pagescontentitems}`}>
                <div className={`${styles.pagescontentitemsrow}`}>
                    <Link to={`/`} className={`${styles.itemlink}`}>home</Link>
                    <Link to={`/pages`} className={`${styles.itemlink}`}>pages</Link>
                    <Link to={`/services`} className={`${styles.itemlink}`}>services</Link>
                    <Link to={`/teams`} className={`${styles.itemlink}`}>team</Link>
                </div>
                <div className={`${styles.pagescontentitemsrow}`}>
                    <Link to={`/login`} className={`${styles.itemlink}`}>login</Link>
                    <Link to={`/adminpage`} className={`${styles.itemlink}`}>admin page</Link>
                    <Link to={`/blogs`} className={`${styles.itemlink}`}>blogs</Link>
                    <Link to={`/changelog`} className={`${styles.itemlink}`}>changelog</Link>
                </div>
            </div>

        </div>
    )
}
export default pagescontent