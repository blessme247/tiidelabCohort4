import React from "react";
import styles from "./navbar.module.css";
import { Link } from "react-router-dom";

const NavigationMobileLinks = () => {
  return (
    <>
      <ul className={`${styles.navigation} ${styles.navigationMobile}`}>
        <li className={styles.listItem}>
          <Link to="/">Home</Link>
        </li>
        <span className={styles.line}> </span>

        <li className={styles.listItem}>
          <Link to="privacy">Projects</Link>
        </li>
        <span className={styles.line}> </span>



      </ul>
    </>
  );
};

export default NavigationMobileLinks;
