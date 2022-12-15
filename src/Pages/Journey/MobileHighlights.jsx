import React from "react";
import styles from "./journey.module.css";

const MobileHighlights = () => {
  return (
    <section className={styles.mobileHighlightSection}>
      <div className={styles.container}>
        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-easing="ease-in-back"
          className={styles.mobileSectionTop}
        >
          HIGHLIGHTS
        </div>

        <div className={styles.mobileHighlights}>
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-easing="ease-in-back"
            className={`${styles.firstContent} ${styles.mobileContent} `}
          >
            <h2 className={`${styles.contentTop}`}>Introduction</h2>
            <p className={`${styles.paragraph}`}>
              TIIDELab (Think, Innovate, Ideate, Develop, Execute ) is a
              technical skills development project, which is a joint initiative
              of the Industrial Training Fund (ITF) and the Nigeria Employer's
              Consultative Association (NECA).
            </p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-easing="ease-in-back"
            className={`${styles.secondContent} ${styles.mobileContent}`}
          >
            <h2 className={`${styles.contentTop} `}>Technical Skills</h2>
            <p className={`${styles.paragraph} `}>
              {" "}
              Fellows were trained on several technologies which are applicable
              in the software development world. In order to achieve the goal of
              the training, fellows were divided into six different
              teams(Hobbes, Tech Stars, Pace Setters, High Tiide, Data Pirates
              and Alpha Devs). Each team consisted of an average of ten fellows
              and projects were assigned to each team.
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-easing="ease-in-back"
            className={`${styles.thirdContent} ${styles.mobileContent} `}
          >
            <h2 className={`${styles.contentTop} `}>Brown Bags</h2>
            <p className={`${styles.paragraph}`}>
              During the course of the fellowship, fellows in Lagos and Abuja
              had excursion visits to 3 and 2 different Tech Companies
              respectively. The Tech companies were well receptive and they
              helped the fellows to understand their mission in the Tech Space
              and how the mision were being executed. Fellows also got to meet
              the various Software developers in the organization which helped
              to give them the feeling of being a Software developer. Notable
              among the Tech Companies are TalentQL, FlexiSAF, Innov8 hub e.t.c
            </p>
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-easing="ease-in-back"
          className={`${styles.fourthContent} ${styles.mobileContent} `}
        >
          <h2 className={`${styles.contentTop} `}>The Beginning</h2>
          <p className={`${styles.paragraph} `}>
            Tiidelab Cohort 4 fellowship commenced officially on the 8th, June
            2022 with 62 fellows admitted after going through three rigorous
            application phases. Fellows were admitted from all six geo-political
            zones of Nigeria in order to fulfill the goals and objective of
            NECA-ITF TSDP project, which is to promote training and development
            of Nigerian youths.
          </p>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-easing="ease-in-back"
          className={`${styles.fifthContent} ${styles.mobileContent} `}
        >
          <h2 className={`${styles.contentTop}`}>Soft Skills</h2>
          <p className={`${styles.paragraph}`}>
            In the words of the program coordinator, Mr. Shamshudeen, "a
            software developer is not complete without soft skills." In order to
            ensure that fellows are complete problem solvers, soft skills were
            taught on Fridays, covering different topics such as problem
            framing, design thinking, effective coomunication, e.t.c. Some of
            the classes were physical and they helped to foster bonding among
            the fellows.
          </p>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-easing="ease-in-back"
          className={`${styles.sixthContent} ${styles.mobileContent}`}
        >
          <h2 className={`${styles.contentTop} `}>
            Community Development Service
          </h2>
          <p className={`${styles.paragraph} `}>
            {" "}
            In a bid to give back to the community, fellows in Lagos and Abuja
            engaged in Community Development Services to IDP camps. The people
            in the IDP camps were enligthened on some diseases and how to
            prevent and cure them. Students in the camp were also taught the
            basics of Computer.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MobileHighlights;
