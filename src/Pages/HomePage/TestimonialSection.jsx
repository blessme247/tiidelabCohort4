import React from 'react'
import styles from "./Homepage.module.css";
import SwiperSlides from './SwiperSlides';

const TestimonialSection = () => {
  return (

    <div className={styles.container}>
    <div className={styles.testimonialSection}>
        <h2 className={styles.testimonialSectionHead}>Testimonials</h2>
        <SwiperSlides />
    </div>
    </div>
  )
}

export default TestimonialSection