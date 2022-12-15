import React from 'react'
//  import './navbar.css'
import styles from "./navbar.module.css";
import tiideLabLogo from '../../ASSETS/images/tiidelabLogo.png'
import { Link } from 'react-router-dom'
import NavigationDesktop from './NavigationDesktop';


function NavBar() {
  return (

    <header  className={styles.header}>
      <div className={styles.container}>
        <nav className={styles.nav}>
          <div className={styles.logoWrapper}>
            <Link className={styles.logo} to="/">
              <img
                src={tiideLabLogo}
                alt="TIIDE HR logo"
                className={styles.logoImage}
              />
            </Link>
          </div>
          <div className={styles.navAside}>
            <NavigationDesktop />

          </div>
        </nav>
      </div>
    </header>


  )
}

export default NavBar
