// import React, {useRef, useEffect, useState, useLayoutEffect} from 'react'
// import logo from './logo.svg';
// import './App.css';
// import {gsap,  Power3} from "gsap";
// import fellows from './ASSETS/images/fellow.jpg'
// import CSSRulePlugin from 'gsap/CSSRulePlugin'; //This allows us to select a css pseudo rule
// import { Timeline } from 'gsap/gsap-core';

// function App() {

//   let main = useRef(null);
//   let timeline = useRef(null);

//   const [status, setStatus] = useState(true)

//   gsap.registerPlugin( CSSRulePlugin)

//   let container = useRef(null);
//   let image = useRef(null);
//   let imageReveal = CSSRulePlugin.getRule(".img-container:after") // This allows us to access a pseudo element of any node element that exists in the dom

//   // const tl = new Timeline( {paused: true})
//   // useEffect(()=>{
//   //     tl.to(container, 1, {css: {visibility: "visible"}})
//   //     .to(imageReveal, 1.4, {width: "0%", ease: Power3.easeInOut})
//   //     // .fromTo(image,  {scale: 1.5}, {scale: 1, duration: 1.4, repeat: 0,  ease: Power3.easeInOut});
//   //     // .from(image, 1.4, {scale:1.6, ease: Power3.easeInOut})
      
//   //   },[])

//   //   useEffect(() => {
//   //     status && tl.play();
//   //     // return () => tl.kill();
//   //   }, [status]);

    
//     useLayoutEffect(() => {

//       let ctx = gsap.context(() => {

//         timeline.current = new Timeline()
//         .to(".container", 1, {css: {visibility: "visible"}})
//         .to(imageReveal, 1.4, {width: "0%", ease: Power3.easeInOut})
//         .fromTo("img",  {scale: 1.5}, {scale: 1, duration: 1.4, repeat: 0,  ease: Power3.easeInOut});
//           // });
//       }, main);

//     }, []);
  

//   return (
//     // <div className="App">
//     //   <header className="App-header">
//     //     <img 
//     //     ref={el=>{logoItem = el}}
//     //     src={logo} className="App-logo" alt="logo" />
//     //     <p>
//     //       Edit <code>src/App.js</code> and save to reload.
//     //     </p>
//     //     <a
//     //       className="App-link"
//     //       href="https://reactjs.org"
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //     >
//     //       Learn React
//     //     </a>
//     //   </header>
//     // </div>
//     <section 
//     ref={el=>{main = el}}
//     className='main'>
//       <div 
//       //  ref={el=>{container = el}}
//       className="container">
//         <>
//         <div className='img-container'>
//           <img 
//           //  ref={el=>{image = el}}
//           src={fellows} />
//         </div>
//         </>

//       </div>

//     </section>
//   );
// }

// export default App;