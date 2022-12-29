import { Route, Routes } from 'react-router-dom';
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import './Body.module.css'
import './App.css';
import  './preloader.css'

//Components
import Homepage from './Pages/HomePage/HomePage';
import Journey from './Pages/Journey/Journey';

//GSAP imports
import {gsap, CSSPlugin, Expo} from 'gsap'
// import { Timeline } from 'gsap/gsap-core';
import { RevealAnimation } from './Components/Animations';
// gsap.registerPlugin(CSSPlugin);

function App() {

  let main = useRef(null)
  const [counter, setCounter] = useState(0);
  const [complete, setComplete] = useState(false);

  useEffect(()=>{
    const count = setInterval(()=>{
      setCounter(counter=> {
        if(counter < 100) {
          setCounter(counter => counter + 1)
        } else {
          clearInterval(count)
          setCounter(100)
          RevealAnimation(setComplete)
        }
            
    })
    },300)
  }, [])


  

  return (
    <main ref={el=>{main = el}}>
      <div className='preloader'>
        <div className='load'> </div>
        <div className='progressBar' style={{width: `${counter}%`}}></div>
        <div className='count'>{counter}%</div>
      </div>
    <Routes>
      <Route path="/" element={complete && <Homepage />} />
      <Route path="/journey" element={<Journey />} />
      
    </Routes>
    </main>
  );
  
}

export default App;

