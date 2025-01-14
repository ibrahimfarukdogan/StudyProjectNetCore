import React from 'react'
import styles from './aboutvision.module.css';
import checkmarkicon from "/checkmarkicon.svg"
import visionicon from '/visionicon.svg'
import aboutvisionimg from '/aboutvision.png'

function aboutvision() {
  return (
    <div className={`${styles.aboutvision}`}>
      <div className={`${styles.aboutvisioncontent}`}>
        <div className={`${styles.aboutvisioncontentcolumn}`}>
          <div className={`${styles.aboutvisioncontenttitle}`}>OUR VISION</div>
          <h1>Turn your ideas into reality.</h1>
          <p>Capitalize on low hanging fruit to identify a ballpark value added activity beta test. Override the digital divide with additional from DevOps.</p>
          <div className={`${styles.aboutvisioncontentcolumnrow}`}><img src={checkmarkicon} /> Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day.</div>
          <div className={`${styles.aboutvisioncontentcolumnrow}`}><img src={checkmarkicon} /> Capitalize on low hanging fruit to identify a ballpark value added activity to beta test override the digital.</div>
        </div>
        <div className={`${styles.homeaboutcontentimgs}`} >
          <img className={`${styles.homeaboutcontentsplatterimg}`} src={visionicon} />
          <img className={`${styles.homeaboutcontentaboutimg}`} src={aboutvisionimg} />
        </div>
      </div>
      <div className={`${styles.homecasestudybottom}`}>
        <div className={`${styles.homecasestudybottomtext}`}>
          <h1>1128+</h1>
          <h2>Successful Work</h2>
        </div>
        <div className={`${styles.homecasestudybottomtext}`}>
          <h1>908+</h1>
          <h2>Team member</h2>
        </div>
        <div className={`${styles.homecasestudybottomtext}`}>
          <h1>258+</h1>
          <h2>Happy Customers</h2>
        </div>
        <div className={`${styles.homecasestudybottomtext}`}>
          <h1>564+</h1>
          <h2>Creative Idea</h2>
        </div>
      </div>
    </div>
  )
}
export default aboutvision