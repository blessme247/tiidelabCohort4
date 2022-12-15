import React from "react";
import styles from "./journey.module.css";


const Highlights = () => {
  return (
    <section className={styles.highlightSection}>
      <div className={styles.container}>
        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-easing="ease-in-back"
          className={styles.sectionTop}
        >
          HIGHLIGHTS
        </div>

        <div className={styles.mainHighlights}>
          <div className={styles.left}>
            <div
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-easing="ease-in-back"
              className={`${styles.leftContent} ${styles.firstLeftContent}`}
            >
              <h2 className={`${styles.contentTop} ${styles.leftContentTop}`}>
                Introduction
              </h2>
              <p className={`${styles.paragraph} ${styles.leftParagraph}`}>
                TIIDELab (Think, Innovate, Ideate, Develop, Execute ) is a
                technical skills development project, which is a joint
                initiative of the Industrial Training Fund (ITF) and the Nigeria
                Employer's Consultative Association (NECA).
              </p>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-easing="ease-in-back"
              className={`${styles.leftContent} ${styles.secondLeftContent}`}
            >
              <h2 className={`${styles.contentTop} ${styles.leftContentTop}`}>
                Technical Skills
              </h2>
              <p className={`${styles.paragraph} ${styles.leftParagraph}`}>
                {" "}
                Fellows were trained on several technologies which are
                applicable in the software development world. In order to
                achieve the goal of the training, fellows were divided into six
                different teams(Hobbes, Tech Stars, Pace Setters, High Tiide,
                Data Pirates and Alpha Devs). Each team consisted of an average
                of ten fellows and projects were assigned to each team.
              </p>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-easing="ease-in-back"
              className={`${styles.leftContent} ${styles.thirdLeftContent}`}
            >
              <h2 className={`${styles.contentTop} ${styles.leftContentTop}`}>
                Brown Bags
              </h2>
              <p className={`${styles.paragraph} ${styles.leftParagraph}`}>
                During the course of the fellowship, fellows in Lagos and Abuja
                had excursion visits to 3 and 2 different Tech Companies
                respectively. The Tech companies were well receptive and they
                helped the fellows to understand their mission in the Tech Space
                and how the mision were being executed. Fellows also got to meet
                the various Software developers in the organization which helped
                to give them the feeling of being a Software developer. Notable
                among the Tech Companies are TalentQL, FlexiSAF, Innov8 hub
                e.t.c
              </p>
            </div>
          </div>
          <div className={styles.line}></div>
          <div className={styles.right}>
            <div
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-easing="ease-in-back"
              className={`${styles.rightContent} ${styles.firstRightContent}`}
            >
              <h2 className={`${styles.contentTop} ${styles.rightContentTop}`}>
                The Beginning
              </h2>
              <p className={`${styles.paragraph} ${styles.rightParagraph}`}>
                Tiidelab Cohort 4 fellowship commenced officially on the 8th,
                June 2022 with 62 fellows admitted after going through three
                rigorous application phases. Fellows were admitted from all six
                geo-political zones of Nigeria in order to fulfill the goals and
                objective of NECA-ITF TSDP project, which is to promote training
                and development of Nigerian youths.
              </p>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-easing="ease-in-back"
              className={`${styles.rightContent} ${styles.secondRightContent}`}
            >
              <h2 className={`${styles.contentTop} ${styles.rightContentTop}`}>
                Soft Skills
              </h2>
              <p className={`${styles.paragraph} ${styles.rightParagraph}`}>
                In the words of the program coordinator, Mr. Shamshudeen, "a
                software developer is not complete without soft skills." In
                order to ensure that fellows are complete problem solvers, soft
                skills were taught on Fridays, covering different topics such as
                problem framing, design thinking, effective coomunication,
                e.t.c. Some of the classes were physical and they helped to
                foster bonding among the fellows.
              </p>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-easing="ease-in-back"
              className={`${styles.rightContent} ${styles.thirdRightContent}`}
            >
              <h2 className={`${styles.contentTop} ${styles.rightContentTop}`}>
                Community Development Service
              </h2>
              <p className={`${styles.paragraph} ${styles.rightParagraph}`}>
                {" "}
                In a bid to give back to the community, fellows in Lagos and
                Abuja engaged in Community Development Services to IDP camps.
                The people in the IDP camps were enligthened on some diseases
                and how to prevent and cure them. Students in the camp were also
                taught the basics of Computer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
