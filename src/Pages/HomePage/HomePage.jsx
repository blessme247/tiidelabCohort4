import React, {useEffect} from 'react'
import Footer from '../../Components/FooterComponent/Footer'
import NavBar from '../../Components/NavBarComponent/NavBar'
import '../../preloader.css'

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
    <div >
 
        <NavBar />
      <HeroSection />

      <GridSection />

      <TestimonialSection />

      <Footer />
    </div>
  )
}

export default Homepage