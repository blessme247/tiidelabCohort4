import React, {useEffect} from 'react'
// import styles from "../navbar.module.css";
import styles from "../../Components/NavBarComponent/navbar.module.css";
import tiideLabLogo from '../../ASSETS/images/tiidelabLogo.png'
import { Link } from 'react-router-dom'
import style from './journey.module.css'



const Header = () => {

  

  return (
    <header className={style.header}>
        <div className={styles.container}> 
        <nav className={style.nav}>
          <div className={style.logoWrapper}>
            <Link className={style.linkToHome} to="/">
              <img
                src={tiideLabLogo}
                alt="TIIDE HR logo"
                className={style.logo}
              />
            </Link>
          </div>
          <div className={style.navAside}>
          <ul className={`${style.navigation}`}>
              
              <li className={style.list} ><Link  className={style.link} to="/">Home</Link></li>
              <li className={style.list} ><Link className={`${style.link} ${style.secondLink}`} to="/journey">Journey</Link></li>
            
          
          </ul>
          </div>
        </nav> 

        <div className={style.heroText}> 
        <h2 data-aos="fade-up"  data-aos-duration="2000" data-aos-easing="ease-in-back" className={style.heroTextHead}>THE  JOURNEY, </h2>
        <h2 data-aos="fade-up"  data-aos-duration="2000" data-aos-easing="ease-in-back" className={`${style.heroTextHead} ${style.yellowText}`}>TIIDELAB COHORT 4 </h2>
        
        </div>
        </div>
       
    </header>
  )
}

export default Header