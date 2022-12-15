import React, {useEffect} from 'react'
import Footer from '../../Components/FooterComponent/Footer'
import NavBar from '../../Components/NavBarComponent/NavBar'

import GridSection from './GridSection'
import HeroSection from './HeroSection'
import TestimonialSection from './TestimonialSection'
import AOS from 'aos';
import 'aos/dist/aos.css';



function Homepage() {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <>
 
        <NavBar />
      <HeroSection />

      <GridSection />

      <TestimonialSection />

      <Footer />
    </>
  )
}

export default Homepage