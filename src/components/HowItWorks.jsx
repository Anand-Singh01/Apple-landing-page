import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'
import { chipImg, frameImg, frameVideo } from '../utils'

const HowItWorks = () => {

    const videoRef = useRef(null);

    useGSAP(() => {
        gsap.fromTo('#chip', {
            scale: 2.5,
            opacity: 0
        },
            {
                scale: 0.9,
                opacity: 1,
                duration: 1.3,
                ease: 'power2.inOut',
                scrollTrigger: {
                    trigger: '#chip',
                    start: 'top 70%',
                    toggleActions: 'restart reverse restart reverse'
                }
            }
        )

        gsap.to('.g_fadeIn', {
            opacity: 1,
            y: 0,
            scrollTrigger: {
                trigger: '.g_fadeIn',
                start: 'top 80%',
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
        <section className='common-padding'>
            <div className='screen-max-width'>
                <div id='chip' className='flex-center w-full my-20'>
                    <img src={chipImg} alt="chip" width={180} height={180} />
                </div>
                <div className='flex flex-col items-center'>
                    <h2 className='hiw-title'>
                        A17 Pro Chip
                        <br />
                        A monster win pro gaming.
                    </h2>
                    <p className='hiw-subtitle'>
                        It's here. The biggest redesign in the history of Apple GPUs.
                    </p>
                </div>
                <div className='mt-10 md:mt-20 mb-14'>
                    <div className='relative h-full flex-center '>
                        <div className='overflow-hidden'>
                            <img src={frameImg} alt="frame" className='bg-transparent relative z-10' />
                        </div>
                        <div className='hiw-video'>
                            <video ref={videoRef} className='pointer-events-none' muted playsInline={true} src={frameVideo} type='video/mp4' />
                        </div>
                    </div>
                    <p className='text-gray font-semibold text-center mt-3'>Honkai: Star Rail</p>

                    <div className='hiw-text-container'>
                        <div className='flex flex-1 flex-col justify-center'>
                            <p className='hiw-text  g_fadeIn'>A17 Pro is an entirely new class of iPhone chip that delivers our {' '}
                                <span className='text-white'>
                                    best graphic performance by far.
                                </span>

                            </p>
                            <p className='hiw-text g_fadeIn'>Mobile {' '}
                                <span className='text-white'>
                                    games will look and fee so immersive
                                </span>, with incredibly detailed environments and characters.

                            </p>
                        </div>
                        <div className='flex-1 flex justify-center flex-col g_fadeIn'>
                            <p className='hiw-text'>New</p>
                            <p className='hiw-bigtext'>Pro-class GPU</p>
                            <p className='hiw-text'>with 6 cores</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HowItWorks