import React from 'react'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import {ScrollTrigger} from "gsap/all";
import AnimatedText from "./AnimatedText.jsx";


gsap.registerPlugin(useGSAP,ScrollTrigger);

const FloatingImage = () => {

    useGSAP(()=> {
        let timeline = gsap.timeline({
            scrollTrigger:{
                trigger: "#imgContainer",
                duration: 1,
                ease: "power3",
                // transformOrigin: "50% 50%",
                start: 'center center',
                end: '+=800 center',
                scrub: 1,
                pin: true,
                pinSpacing: true,
            }

        });
        timeline.to("#imgContent",{
            width: "100dvw",
            height: "100dvh",
            borderRadius: "0"
        })
    })

    return (
        <div id="about" className="w-screen min-h-screen">
            <div className="relative mt-[6rem] flex flex-col items-center px-7">
                <span className='text-xs font-general text-center mb-8 '>Welcome to Zentry</span>
                <AnimatedText text="Disc<b>o</b>ver the world's <br /> l<b>a</b>rgest shared adventure" className="floating-text" />
                <p className="absolute w-full text-center bottom-[-80dvh] font-general min-w-md">The Game of Games begins-your life, now an epic MMORPG <br/> Zentry unites every player from countless game and platforms</p>
            </div>
                <div id="imgContainer" className="relative h-dvh w-screen">
                    <div id="imgContent" className=" absolute top-0 left-1/2 z-[10]  w-[40dvw] md:w-[28dvw] -translate-x-1/2 origin-center rounded-lg overflow-hidden h-[60dvh]">
                        <img src="/img/about.webp" alt="about image"  className="absolute top-0 left-0 size-full object-cover " />
                    </div>

                </div>

        </div>
    )
}
export default FloatingImage
