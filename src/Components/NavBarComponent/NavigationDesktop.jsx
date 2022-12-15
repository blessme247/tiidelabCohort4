import React from 'react'
import styles from "./navbar.module.css";
import { Link } from 'react-router-dom'

const NavigationDesktop = () => {
  return (
    <>

<div className={styles.navAside}>
          <ul className={`${styles.navigation}`}>
              
              <li className={styles.list} ><Link  className={styles.link} to="/">Home</Link></li>
              <li className={styles.list} ><Link className={`${styles.link} ${styles.secondLink}`} to="/journey">Journey</Link></li>
            
          
          </ul>
          </div>

    </>
  )
}

export default NavigationDesktop