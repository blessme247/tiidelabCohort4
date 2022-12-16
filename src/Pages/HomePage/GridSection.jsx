import React from "react";
// import ImageWithFallback from '../../Components/NavBarComponent/GridImagesComponent/ImageWithFallback';
import FellowPicture from "../../Components/NavBarComponent/GridImagesComponent/ImageWithFallback";
import styles from "./Homepage.module.css";

const GridSection = () => {
  return (
    //   <div className={styles.container}>
    <div>
      <section className={`${styles.gridSection} ${styles.container}`}>
        <div
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-easing="ease-in"
          className={styles.sectionHead}
        >
          Meet The Graduating Fellows
        </div>
        <div className={styles.gridLayout}>
          <FellowPicture />
        </div>
      </section>
    </div>
  );
};

export default GridSection;
