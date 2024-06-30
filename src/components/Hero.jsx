import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useEffect, useState } from 'react';
import { heroVideo, smallHeroVideo } from '../utils';
const Hero = () => {

  const [videoSrc, setVideoSrc] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo);


  const handleVideoSrcSet = () => {
    if (window.innerWidth < 760) {
      setVideoSrc(smallHeroVideo);
    } else {
      setVideoSrc(heroVideo);
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleVideoSrcSet);
    return () => {
      window.removeEventListener('resize', handleVideoSrcSet);
    }
  }, [])

  useGSAP(() => {
    gsap.to('.hero-title', {
      opacity: 1,
      delay: 2,
    })
    gsap.to('#cta', {
      y: -120,
      delay: 2,
      opacity: 1
    })
  }, [])

  return (
    <section className='w-full nav-height bg-black relative'>
      <div className='h-5/6 flex flex-col items-center'>
        <p className='hero-title'> iPhone 15 Pro</p>
        <div className='md:w-10/12 w-9/12'>
          <video className='pointer-events-none' muted autoPlay playsInline={true} key={videoSrc} type="video/mp4" src={videoSrc}></video>
        </div>
      </div>

      <div id='cta' className='flex flex-col items-center opacity-0 translate-y-20'>
        <a className='btn' href="#highlights">Buy</a>
        <p className='font-normal text-xl'>From $199/month or $999</p>
      </div>

    </section>
  )
}

export default Hero