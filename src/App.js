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

  useEffect(() => {
    const count = setInterval(() => {
      setCounter(counter => {
        if (counter < 100) {
          return counter + 1;
        } else {
          clearInterval(count);
          return 100;
        }
      });
    }, 30);
  
    return () => clearInterval(count);
  }, []);
  

  useLayoutEffect(() => {
    if(counter === 100) {
      RevealAnimation(setComplete, main)
    }
  
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

//In the useEffect code above, we're returning a cleanup function that clears the interval when the component unmounts. 
// We're also using an empty array as the second argument to the useEffect hook, which ensures that the effect runs only once when the component mounts.
// By updating the state variable counter directly inside the setInterval function and removing the console.log statement, the progress bar should update as the counter variable updates.

