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
import { Timeline } from 'gsap/gsap-core';
import { RevealAnimation } from './Components/Animations';

function App() {

  let main = useRef(null)
  gsap.registerPlugin(CSSPlugin);
  const [counter, setCounter] = useState(0);
  const [complete, setComplete] = useState(false);
  let c = counter;

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
    },30)
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

