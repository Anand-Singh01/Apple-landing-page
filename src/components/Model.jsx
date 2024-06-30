import { useGSAP } from "@gsap/react"
import { View } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import gsap from "gsap"
import { useEffect, useRef, useState } from "react"
import * as THREE from 'three'
import { models, sizes } from "../constants"
import { yellowImg } from "../utils"
import { animateWithGsapTimeline } from "../utils/animations"
import ModelView from "./ModelView"

const Model = () => {

    const tl = gsap.timeline();
    const [size, setSize] = useState('small');
    const [model, setModel] = useState({
        id: 1,
        title: "iPhone 15 Pro in Natural Titanium",
        color: ["#8F8A81", "#ffe7b9", "#6f6c64"],
        img: yellowImg,
    })

    //camera control
    const cameraControlSmall = useRef();
    const cameraControlLarge = useRef();

    // model
    const small = useRef(new THREE.Group());
    const large = useRef(new THREE.Group());

    //rotation
    const [smallRotation, setSmallRotation] = useState(0);
    const [largeRotation, setLargeRotation] = useState(0);


    useEffect(() => {
        if (size === 'large') {
            animateWithGsapTimeline(tl, small, smallRotation, '#view1', '#view2', {
                transform: 'translateX(-100%)',
                duration: 2
            });
        }
        else {
            animateWithGsapTimeline(tl, large, largeRotation, '#view2', '#view1', {
                transform: 'translateX(0)',
                duration: 2
            });
        }
    }, [size])

    useGSAP(() => {
        gsap.to('#heading', {
            // opacity:1,
            // y:0,
            scrollTrigger: {
                trigger: '#heading',
                top: 'bottom bottom',
                onEnter: () => gsap.to('#heading', { opacity: 1, y: 0, duration: 1 }),
                onLeave: () => gsap.to('#heading', { opacity: 0, y: 20, duration: 1, delay: 0.5 }),
                onEnterBack: () => gsap.to('#heading', { opacity: 1, y: 0, duration: 1 }),
                onLeaveBack: () => gsap.to('#heading', { opacity: 0, y: 20, duration: 1, delay: 0.2 })
            }
        })
    }, [])
    return (
        <section className="common-padding">
            <div className="screen-max-width">
                <h1 id="heading" className="section-heading">
                    Take a closer look.
                </h1>
                <div className="flex flex-col items-center mt-5">
                    <div className="w-full h-[75vh] md:h-[90vh] relative">
                        <ModelView
                            index={1}
                            groupRef={small}
                            gsapType='view1'
                            controlRef={cameraControlSmall}
                            setRotationState={setSmallRotation}
                            item={model}
                            size={size}
                        />

                        <ModelView
                            index={2}
                            groupRef={large}
                            gsapType='view2'
                            controlRef={cameraControlLarge}
                            setRotationState={setLargeRotation}
                            item={model}
                            size={size}
                        />

                        <Canvas
                            style={{ position: 'fixed', top: 0, bottom: 0, left: 0, right: 0, overflow: 'hidden' }}
                            eventSource={document.getElementById('root')}
                            className="w-full h-full"
                        >
                            <View.Port />
                        </Canvas>
                    </div>
                    <div className="mx-auto w-full">
                        <p className="text-sm font-light text-center mb-5">
                            {model.title}
                        </p>
                        <div className="flex-center">
                            <ul className="color-container">
                                {
                                    models.map((item, i) => (
                                        <li onClick={() => setModel(item)} className="w-6 h-6 rounded-full mx-2 cursor-pointer" key={i} style={{ backgroundColor: item.color[0] }} />
                                    ))
                                }
                            </ul>
                            <button className="size-btn-container">
                                {
                                    sizes.map(({ label, value }) => (
                                        <span
                                            onClick={() => setSize(value)}
                                            style={{ backgroundColor: size === value ? 'white' : 'transparent', color: size === value ? 'black' : 'white' }} className="size-btn" key={label}>{label}
                                        </span>))
                                }
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Model