import React from 'react'
import styles from "./Footer.module.css";
import tiideLabLogo from '../../ASSETS/images/tiidelabLogo.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

      
        <div className={styles.footerLogoWrapper}>
         <Link className={styles.logo} to="/">
              <img
                src={tiideLabLogo}
                alt="TIIDE HR logo"
                className={styles.logoImage}
              />
            </Link>
            </div>

      <div className={styles.pageLinksWrapper}> 
      <Link className={styles.pageLink} to="/"> Home</Link>
      <Link className={styles.pageLink} to="/journey"> Journey </Link>
      </div>
            <div className={styles.credit}>
                <p>Inspired by <a className={styles.footerLink} href="https://feministco2020.netlify.app/" target="blank">FemCo 2020 by Seyi</a> </p>
                <p>Developed by <a className={styles.footerLink} href="https://blessmeportfolio.netlify.app/" target="blank">Abraham Solabi</a></p>
            </div>
            </div>

    </footer>
  )
}

export default Footer