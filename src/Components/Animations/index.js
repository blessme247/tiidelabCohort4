import {gsap, CSSPlugin, Expo} from 'gsap'

export const RevealAnimation = (setComplete)=> {
  gsap.registerPlugin(CSSPlugin);


        const tl = gsap.timeline({
          onComplete: () => {
            setComplete(true)
          }
        })
        tl.to('.load',{
          width: "100%",
          duration:2.4,
          ease: Expo.easeInOut,
        }, "+=.8")
        .to('.count',{
          opacity: 0,
          duration: 0.3,
          display: "none",
          color: "#00afef"
        })
        .to('.load',{
          height: "100%",
          duration:0.8,
          ease: Expo.easeInOut,
        }, "+=.5")
        .to('.content',{
          width: "100%",
          duration:0.7,
          ease: Expo.easeInOut,
        })
        .to('.preloader',{
          display: "none",
          opacity: 0,
          duration:0.5,
          ease: Expo.easeInOut,
        })

}