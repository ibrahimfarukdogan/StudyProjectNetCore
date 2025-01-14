import React, { Component } from 'react'
import styles from './homebanner.module.css';
import meetingicon from "/meetingicon.svg"
import { Link } from 'react-router-dom';

export class homebanner extends Component {
    render() {
        return (
            <div className={`${styles.homebanner}`}>
                <div className={`${styles.homebannertextareaoutside}`}>
                    <div className={`${styles.homebannertextareainside}`}>
                        <div>
                            <h2> Your small business growth advisors</h2>
                            <h3>Get help from Alex Moore, a professional business coach with advanced experience on growth and business scaling.</h3>
                            <div className={`${styles.homebannertextareainsidebuttons}`}>
                                <Link to={`/services`} ><button className={`${styles.homebannertextareainsidebuttonsinside1}`}>Our Services</button></Link>
                                <Link to={`/contact`} ><button className={`${styles.homebannertextareainsidebuttonsinside2}`}><img src={meetingicon} />Book a Meeting</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default homebanner