import React from 'react'
import styles from './servicesconsulting.module.css';
import greenborder from '/greenborder.svg'
import backgroundpatter from '/backgroundpatter.svg'
import Servicesconsultingimg from '/servicesconsulting.png'
import purseicon from '/purseicon.svg'
import gear2 from '/gear2.svg'
import arrowicon from '/arrowicon.svg'

function servicesconsulting() {
  return (
    <div className={`${styles.servicesconsulting}`}>
      <div className={`${styles.servicesconsultingcontent}`}>
        <div className={`${styles.homeaboutcontentimgs}`} >
          <img className={`${styles.homeaboutcontentsplatterimg}`} src={backgroundpatter} />
          <img className={`${styles.homeaboutcontentaboutimg}`} src={greenborder} />
          <img className={`${styles.homeaboutcontentmarkettimg}`} src={Servicesconsultingimg} />
        </div>
        <div className={`${styles.servicesconsultingcontentcolumn}`}>
          <div className={`${styles.servicesconsultingtitle}`}>PROCESS</div>
          <h1>Our Consulting Service Development
          </h1>
          <div className={`${styles.servicesconsultingcontentcolumnrow}`}>
            <img src={purseicon} />
            <div className={`${styles.servicesconsultingcontentcolumnrowtext}`}>
              <h3>Banking and Finance</h3>
              <h4>Professionally fashion wireless leadership rather than prospective experiences my cardinate clicks-and-mortar testing whereas.</h4>
            </div>
          </div>
          <div className={`${styles.servicesconsultingcontentcolumnrow}`}>
            <img src={gear2} />
            <div className={`${styles.servicesconsultingcontentcolumnrowtext}`}>
              <h3>Logistic and Transportation</h3>
              <h4>Compellingly embrace empowered e-business after user friendly intellectual capital. Interactively actualize front-end processes.</h4>
            </div>
          </div>
          <div className={`${styles.servicesconsultingcontentcolumnrow}`}>
            <img src={arrowicon} />
            <div className={`${styles.servicesconsultingcontentcolumnrowtext}`}>
              <h3>Trading</h3>
              <h4>Uniquely matrix economically sound value through cooperative technology parallel task fully researched data and enterprise.</h4>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
export default servicesconsulting