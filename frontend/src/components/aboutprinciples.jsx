import React from 'react'
import styles from './aboutprinciples.module.css';
import stackicon from '/stackicon.svg'
import statistics from '/statistics3.svg'
import worldicon2 from '/worldicon2.svg'
import gear from '/gear.svg'
import { Link } from 'react-router-dom';

function aboutprinciples() {
    return (
        <div className={`${styles.aboutprinciples}`}>
            <div className={`${styles.aboutprinciplescontent}`}>
                <div className={`${styles.aboutprinciplestitle}`}>Growing with our Clients</div>
                <h1>Our core values & principles</h1>
                <div className={`${styles.aboutprinciplesrow}`}>
                    <p>Capitalize on low hanging fruit to identify a ballpark value added activity beta test. Override the digital divide with additional from DevOps.</p>
                    <Link to={`/contact`} className={`${styles.homeblogtitletextlink}`}><button className={`${styles.aboutprinciplesbutton1}`}>Get in touch</button></Link>
                </div>
                <div className={`${styles.aboutprinciplesrow}`}>
                    <div className={`${styles.aboutprinciplescard}`}>
                        <img src={stackicon} />
                        <h3>Creative Ideas</h3>
                        <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget accumsan augue Donec aliquam.</h4>
                        <button className={`${styles.aboutprinciplesbutton2}`}>Read More →</button>
                    </div>
                    <div className={`${styles.aboutprinciplescard}`}>
                        <img src={statistics} />
                        <h3>Best Features</h3>
                        <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
                        <button className={`${styles.aboutprinciplesbutton2}`}>Read More →</button>
                    </div>
                    <div className={`${styles.aboutprinciplescard}`}>
                        <img src={worldicon2} />
                        <h3>Experience</h3>
                        <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget accumsan augue Donec aliquam.</h4>
                        <button className={`${styles.aboutprinciplesbutton2}`}>Read More →</button>
                    </div>
                    <div className={`${styles.aboutprinciplescard}`}>
                        <img src={gear} />
                        <h3>Easy Solutions</h3>
                        <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
                        <button className={`${styles.aboutprinciplesbutton2}`}>Read More →</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default aboutprinciples
