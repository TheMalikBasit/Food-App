import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { heroVideo, smallHeroVideo } from '../utils';
import { useState } from "react";
import { useEffect } from "react";

const Hero = () => {
  const [videoSrc, setvideoSrc] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo)
  // use state parameters (get window size if its lesser than 720 px then set it to smallHeroVideo else heroVideo)

  const videoSrcHandler = () => {
    if(window.innerWidth < 720 ){
      setvideoSrc(smallHeroVideo)
    }else{
      setvideoSrc(heroVideo)
    }
  }

  useEffect(() => {
    window.addEventListener('resize', videoSrcHandler)

    return() => (
      window.removeEventListener('resize', videoSrcHandler)
    )
  }, [])
  useGSAP(() =>{
    gsap.to('.hello', {
      opacity: 1,
      delay: 2
    })
    gsap.fromTo('#cta',{
      y: 30
    } ,
    {
      opacity: 1,
      delay: 2,
      y: 0
    })

  },[])

  return (
    <section className="w-full nav-height bg-black relative">
      <div className="h-5/6 w-full flex-center flex-col">
        <p className="hero-title hello">iPhone 15 pro</p>
        <div className="md:w-10/12 w-9/12">
          <video className="pointer-events-none" autoPlay muted playsInline={true} key={videoSrc}>
            <source src={videoSrc} type="video/mp4"/>
          </video>
        </div>
      </div>

      <div id="cta" className="flex flex-col items-center opacity-0 translate-y-20">
        <a href="#highlights" className="btn">Buy</a>
        <p className="font-normal text-xl">From $199/month or $999</p>
      </div>
    </section>
  )
}

export default Hero