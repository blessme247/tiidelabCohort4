import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import "swiper/css";
import "swiper/swiper-bundle.min.css";
import "swiper/css/navigation";
// import "swiper/css/pagination";
import styles from "./Homepage.module.css";



const SwiperSlides = () => {
  return (
    <>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={20}
        // slidesPerView={2.8}
        // slidesPerView={3}
        loop={true}
        // navigation={true}
        // navigation={{
        //   nextEl: ".image-swiper-button-next",
        //   prevEl: ".image-swiper-button-prev",
        //   disabledClass: "swiper-button-disabled"
        // }}

        autoplay={true}
        breakpoints={{
          // when window width is >= 350px
          990: {
            // width: 250,
            slidesPerView: 3,
          },
          700: {
            // width: 250,
            slidesPerView: 2,
          },
          
          
        }}

        pagination={{ clickable: true }}
        className={`${styles.swiper} ${styles.heroImageContainer}`}
        
      >
        <div className={styles.swiperWrapper}>
          <SwiperSlide className={styles.testimonialCard}>
       
            
      <p className={styles.testimonialText}>
              For the past 6 months, Tiidelab gave me a well structured plan to live, learn and become self reliant with, I am glad to have been a beneficiary.
            </p>

            <p className={styles.fellowName}>Victor Bassey</p>

          </SwiperSlide>

          <SwiperSlide className={styles.testimonialCard}>
            
            
      <p className={styles.testimonialText}>
              Tiidelab came in at the right time and not only did the program help shape my technical skills, but also my communication and leadership skills.
            </p>
            <p className={styles.fellowName}>Godswill Udoh</p>

          </SwiperSlide>

          <SwiperSlide className={styles.testimonialCard}>
            
           
            <p className={styles.testimonialText}>
              I have been equiped with enough technical and soft skills to leverage upon in order to help me expand my food catering business outside Tiidelab.
            </p>
            <p className={styles.fellowName}>Maymounah Mogaji</p>
          </SwiperSlide>

          <SwiperSlide className={styles.testimonialCard}>
          
            
      <p className={styles.testimonialText}>
              While I was affected by the nationwide ASUU strike and I could not be in school, Tiidelab gave me the opportunity to learn and be productive.
            </p>
            <p className={styles.fellowName}>Iyiola Oluwatosin</p>
          </SwiperSlide>

          <SwiperSlide className={styles.testimonialCard}>
         
            
      <p className={styles.testimonialText}>
              I feel blessed to have met a lot of good people during the fellowship and I look forward to seeing everyone thrive in life. Best wishes to everyone! 
            </p>
            <p className={styles.fellowName}>Bongshim Edward</p>
          </SwiperSlide>

          <SwiperSlide className={styles.testimonialCard}>
            
         
            <p className={styles.testimonialText}>
              A journey of 6 months has finally come to an end but not without me honing my skills and creating long lasting memories that I will always cherish. 
            </p>
            <p className={styles.fellowName}>Cynthia Nwankwo</p>
          </SwiperSlide>
        </div>

        {/* </div> */}
      </Swiper>
    </>
  );
};

export default SwiperSlides;
