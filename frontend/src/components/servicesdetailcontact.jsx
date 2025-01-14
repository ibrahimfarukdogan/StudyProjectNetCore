import React from 'react'
import styles from './servicesdetailcontact.module.css';
import contactphoneicon from "/contactphoneicon.svg"
import contactclockicon from "/contactclockicon.svg"
import contactlocationicon from "/contactlocationicon.svg"
import greenborder from '/greenborder.svg'
import backgroundpatter from '/backgroundpatter.svg'
import servicesdetailcontact1 from '/servicesdetailcontact1.png'
import servicesdetailcontact2 from '/servicesdetailcontact2.png'
import servicesdetailcontact3 from '/servicesdetailcontact3.png'

function servicesdetailcontact() {
    return (
        <div className={`${styles.servicesdetailcontact}`}>

            <div className={`${styles.contactcontent}`}>
                <div className={`${styles.contactcontentcolumn}`}>
                    <div className={`${styles.contactcontenttitle}`}>PROCESS</div>
                    <h1>Contact Us. It’s Easy.</h1>
                    <p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative.</p>
                    <div className={`${styles.contactcontentcolumnrow}`}>
                        <img src={contactphoneicon} />
                        <div className={`${styles.contactcontentcolumnrowtext}`}>
                            <h2>Call Today</h2>
                            <h3>+1 800 100 900</h3>
                        </div>
                    </div>
                    <div className={`${styles.contactcontentcolumnrow}`}>
                        <img src={contactclockicon} />
                        <div className={`${styles.contactcontentcolumnrowtext}`}>
                            <h2>Monday To Friday</h2>
                            <h3>9AM - 5PM</h3>
                        </div>
                    </div>
                    <div className={`${styles.contactcontentcolumnrow}`}>
                        <img src={contactlocationicon} />
                        <div className={`${styles.contactcontentcolumnrowtext}`}>
                            <h2>USA Office</h2>
                            <h3>195 Devonshire St Boston, MA 02110</h3>
                        </div>
                    </div>
                </div>
                <div className={`${styles.homeaboutcontentimgs}`} >
                    <img className={`${styles.homeaboutcontentsplatterimg}`} src={backgroundpatter} />
                    <img className={`${styles.homeaboutcontentaboutimg}`} src={greenborder} />
                    <img className={`${styles.homeaboutcontentmarkettimg1}`} src={servicesdetailcontact1} />
                    <img className={`${styles.homeaboutcontentmarkettimg2}`} src={servicesdetailcontact2} />
                    <img className={`${styles.homeaboutcontentmarkettimg3}`} src={servicesdetailcontact3} />
                </div>
            </div>
        </div >
    )
}
export default servicesdetailcontact