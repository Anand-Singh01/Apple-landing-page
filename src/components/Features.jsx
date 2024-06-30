import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'
import { explore1Img, explore2Img, exploreVideo } from '../utils'

const Features = () => {

    const videoRef = useRef(null);

    useGSAP(() => {
        gsap.to('#features_title', {
            duration: 1,
            opacity: 1, y: 0,
            scrollTrigger: {
                start: 'bottom bottom',
                trigger: '#features_title',
                toggleActions: 'restart reverse restart reverse'
            }
        })

        gsap.to('.g_grow', {
            opacity: 1,
            duration: 2,
            scale: 1.1,
            ease: 'power1',
            scrollTrigger: {
                start: 'bottom bottom',
                trigger: '.g_grow',
                toggleActions: 'restart reverse restart reverse'
            }
        })

        gsap.to('.g_text', {
            opacity: 1,
            duration: 1,
            ease: 'power2.inOut',
            y: 0,
            scrollTrigger: {
                start: 'top 95%',
                trigger: '.g_text',
                toggleActions: 'restart reverse restart reverse'
            }
        })

        gsap.to(videoRef.current, {
            scrollTrigger: {
                trigger: videoRef.current,
                start: 'top bottom',
                toggleActions: 'play pause reverse restart'
            },
            onComplete: () => {
                videoRef.current.play();
            }
        })

    }, [])
    return (
        <section className='h-full common-padding bg-zinc relative overflow-hidden'>
            <div className='screen-max-width'>
                <div className='mb-12 w-full'>
                    <h1 id='features_title' className='section-heading'>
                        Explore the full story.
                    </h1>
                </div>
                <div className='flex flex-col justify-center items-center overflow-hidden'>
                    <div className='mt-32 mb-24 pl-24'>
                        <h2 className='text-5xl lg:text-7xl font-semibold'>iPhone.</h2>
                        <h2 className='text-5xl lg:text-7xl font-semibold'>Forged in titanium.</h2>
                    </div>
                    <div className='flex-center flex-col sm:px-10'>
                        <div className='relative h-[50vh] w-full flex items-center'>
                            <video id='exploreVideo' ref={videoRef} preload='none' muted autoPlay className='w-full h-full object-cover object-center' playsInline src={exploreVideo} type='video/mp4' />
                        </div>
                        <div className='flex flex-col w-full relative'>
                            <div className='feature-video-container'>
                                <div className='overflow-hidden flex-1 h-[50vh]'>
                                    <img src={explore1Img} className='feature-video g_grow' alt="titanium" />
                                </div>
                                <div className='overflow-hidden flex-1 h-[50vh]'>
                                    <img src={explore2Img} className='feature-video g_grow' alt="titanium2" />
                                </div>
                            </div>
                            <div className='feature-text-container'>
                                <div className='flex-1 flex-center'>
                                    <p className='feature-text g_text'>iPhone 15 Pro is {' '}
                                        <span className='text-white'>
                                            the first iPhone to feature an aerospace grey titanium design
                                        </span>, using the same alloy that spacecrafts use for missions to Mars.

                                    </p>
                                </div>
                                <div className='flex-1 flex-center'>
                                    <p className='feature-text g_text'>Titanium has on eof the best strength-to-weight ratios of any metal, making these our {' '}
                                        <span className='text-white'>
                                            lightest Pro models ever.
                                        </span>, You'll notice the difference the moment you pick one up

                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features