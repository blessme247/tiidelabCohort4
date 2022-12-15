import React from "react";

import styles from "./Homepage.module.css";

const HeroSection = () => {
  return (
    <>
      <div
        data-aos="fade-up"
        data-aos-duration="2000"
        data-aos-easing="ease-in-back"
        className={styles.heroWrapper}
      >
        <section className={`${styles.heroSection} ${styles.container} `}>
          <div className={styles.heroTextWrapper}>
            <h2>
              Creating Opportunities for Software Developers In Nigerian
              Society.
            </h2>
          </div>
          <div className={styles.rightText}>
            {" "}
            <p>
              Tiidelab Cohort 4 commenced in June 2022 with a mission to
              champion self reliance for Software developers in Nigerian society
              with a core focus on technical and soft skills. <br />
              {/* The program is the 4th of its kind and it has positively imparted fellows from all the geo-political zones of Nigeria. */}
              Being the 4th of its kind, TiideLab Cohort 4 has been a wonderful
              experience.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default HeroSection;
