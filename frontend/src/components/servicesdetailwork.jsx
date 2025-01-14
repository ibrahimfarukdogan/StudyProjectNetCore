import React from 'react'
import styles from './servicesdetailwork.module.css';
import greenborder from '/greenborder.svg'
import backgroundpatter from '/backgroundpatter.svg'
import Servicesconsultingimg from '/servicesdetailwork.png'
import checkmarkicon from '/checkmarkicon.svg'
import brandlogo from '/clientlogos.svg'

function servicesdetailwork() {
  return (
    <div className={`${styles.servicesdetailwork}`}>
      <div className={`${styles.servicesconsultingcontent}`}>
        <div className={`${styles.homeaboutcontentimgs}`} >
          <img className={`${styles.homeaboutcontentsplatterimg}`} src={backgroundpatter} />
          <img className={`${styles.homeaboutcontentaboutimg}`} src={greenborder} />
          <img className={`${styles.homeaboutcontentmarkettimg}`} src={Servicesconsultingimg} />
        </div>
        <div className={`${styles.servicesconsultingcontentcolumn}`}>
          <div className={`${styles.servicesconsultingtitle}`}>WE'LL WORK WITH YOU</div>
          <h1>What To Expect</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <div className={`${styles.servicesconsultingcontentcolumnrow}`}>
            <img src={checkmarkicon} />
            <div className={`${styles.servicesconsultingcontentcolumnrowtext}`}>
              <h4>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day.</h4>
            </div>
          </div>
          <div className={`${styles.servicesconsultingcontentcolumnrow}`}>
            <img src={checkmarkicon} />
            <div className={`${styles.servicesconsultingcontentcolumnrowtext}`}>
              <h4>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test override the digital.</h4>
            </div>
          </div>
        </div>

      </div>
      <img className={`${styles.servicesconsultingcontentimg}`} src={brandlogo}  />
    </div>
  )
}
export default servicesdetailwork
