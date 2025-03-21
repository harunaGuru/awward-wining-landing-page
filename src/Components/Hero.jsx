import React, {useEffect, useRef, useState} from 'react'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Button from "./Button.jsx";
import { FaLocationArrow } from "react-icons/fa6";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(useGSAP,ScrollTrigger);
const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(1)
    const [hasClicked, setHasClicked] = useState(false)
    const vidRef = useRef(null)
    const [isLoading, setIsLoading] = useState(true)
    const [loadedVideos, setLoadedVideos] = useState(0);
    const videos = 4
    function handleMiniClick() {
        setCurrentIndex(prev => prev % videos + 1)
        setHasClicked(true)
    }
    function handleLoadedData(){
        setLoadedVideos(prev=> prev + 1)
    }
    useEffect(() => {
        if(loadedVideos === videos - 1){
            setIsLoading(false)
        }
    },[loadedVideos])

    useGSAP(()=>{
        if(hasClicked){
            gsap.set("#currentVid", {visibility: 'visible'})
            gsap.to("#currentVid", {
                duration: 1,
                scale: 1,
                width: "100%",
                height: "100%",
                transformOrigin: "center",
                ease: "power2.inOut",
                onStart: (()=> vidRef.current.play())

            })

            gsap.from("#nextVid", {
                duration: 1.5,
                scale: 0,
                transformOrigin: "center",
                ease: "power2.inOut",

            })
        }

    }, {dependencies:[currentIndex], revertOnUpdate:true, })

    useGSAP(()=>{
        gsap.set("#container", {
            clipPath:  'polygon(20% 0, 80% 0%, 89% 93%, 8% 93%)',
            borderRadius: "0% 0% 40% 40%",
        });
        gsap.from("#container", {
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
            borderRadius: "0% 0% 0% 0%",
            ease: "power2.inOut",
            scrollTrigger:{
                trigger: "#container",
                start: 'center center',
                end: 'bottom center',
                scrub: true,
            }
        })
    });
    function getVideoSrc(index) {
        return `/videos/hero-${index}.mp4`
    }
    return (
        <div className="relative h-dvh w-screen overflow-x-hidden">
            {isLoading && (
                <div className="z-[1000] absolute  h-dvh w-screen overflow-hidden flex flex-col justify-center items-center bg-violet-100">
                    {/* https://uiverse.io/G4b413l/tidy-walrus-92 */}
                    <div className="three-body">
                        <div className="three-body__dot"></div>
                        <div className="three-body__dot"></div>
                        <div className="three-body__dot"></div>
                    </div>
                </div>
            )}
            <div id="container"  className='relative h-dvh w-screen bg-blue-75 z-20 rounded-lg overflow-hidden'>
                <div>
                    <div onClick={handleMiniClick} className='absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 size-64 opacity-0 hover:opacity-100 scale-50  origin-center transition-all duration-500 ease-in-out hover:scale-100 rounded-lg overflow-hidden z-[100]'>
                    <video onLoadedData={handleLoadedData} ref={vidRef} id="nextVid" src={getVideoSrc((currentIndex % videos) + 1)} loop muted className="size-64 object-cover object-center scale-150 "/>
                    </div>

                    <video onLoadedData={handleLoadedData} ref={vidRef} id='currentVid' src={getVideoSrc(currentIndex)}  loop muted className="size-96 object-cover object-center absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 invisible z-10"/>

                    <video onLoadedData={handleLoadedData} src={getVideoSrc(currentIndex)} autoPlay loop muted className="absolute left-0 top-0 size-full object-cover object-center " />
                </div>

                <div className="absolute bottom-[1rem] right-12 z-[70] leading-7 ">
                    <h1 className=" hero-heading special-font"> G<b>A</b>MING</h1>
                </div>
                <div className='absolute top-0 left-0 w-full h-full z-50'>
                    <div className='absolute mt-[70px] w-md px-10 '>
                        <h1 className=" hero-heading special-font ">REDIFI<b>N</b>E</h1>
                        <div className='flex flex-col gap-4'>
                            <p className='text-blue-100 font-robert-regular'>Enter the Metagame Layer <br />Unleash the Play Economy</p>
                            <Button title="Watch Trailer" leftIcon={<FaLocationArrow />}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-[1rem] right-12 leading-7">
                <h1 className="hero-heading special-font !text-black"> G<b>A</b>MING</h1>
            </div>
        </div>
    )
}
export default Hero
