import { Route, Routes } from 'react-router-dom';
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import './Body.module.css'
import './App.css';
import  './preloader.css'

//Components
import Homepage from './Pages/HomePage/HomePage';
import Journey from './Pages/Journey/Journey';


import { RevealAnimation } from './Components/Animations';

function App() {

  let main = useRef(null)
  const [counter, setCounter] = useState(0);
  const [complete, setComplete] = useState(false);

  useEffect(()=>{
    console.log("useEffect")
    const count = setInterval(()=>{
      setCounter(counter=> {
        if(counter < 100) {
          setCounter(counter => counter + 1)
        } else {
          clearInterval(count)
          setCounter(100)
        }
            
    })
    },300)
  }, [])

  useLayoutEffect(() => {
    console.log("layout effect")
    if(counter === 100) {
      RevealAnimation(setComplete, main)
    }
  
    // return () => {
    //   //Kill the animation to avoid multiple animations and memory leak..
    //   ctx.revert()
    // };
  }, [counter])


  

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

