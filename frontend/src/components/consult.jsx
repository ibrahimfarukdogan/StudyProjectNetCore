import React from 'react'
import styles from './consult.module.css';
import consultbanner from "/consultbanner.svg"

function consult() {
  return (
    <div className={`${styles.consult}`}><img src={consultbanner} /></div>
  )
}
export default consult
