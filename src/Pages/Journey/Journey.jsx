import React, {useEffect} from 'react'
import Footer from '../../Components/FooterComponent/Footer'
import Header from './Header'
import Highlights from './Highlights'
import MobileHighlights from './MobileHighlights'
import Projects from './Projects'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Journey = () => {

  useEffect(() => {
    AOS.init();
  }, [])


  return (
    <div>
        <Header />
        <Highlights />
        <MobileHighlights />
        <Projects />
        <Footer />
    </div>
  )
}

export default Journey