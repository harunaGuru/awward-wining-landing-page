import React, {useEffect} from 'react'
import Button from "./Button.jsx";
import { FaLocationArrow } from "react-icons/fa6";
import {useWindowScroll} from "react-use";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import {ScrollTrigger} from "gsap/all";
import {clsx} from "clsx";


gsap.registerPlugin(useGSAP,ScrollTrigger);
const navItems = [
    {name: "nexus", href: "#nexus"},
    {name: "vault", href: "#vault"},
    {name: "prologue", href: "#prologue"},
    {name: "about", href: "#about"},
    {name: "contact", href: "#contact"},
]
const Navbar = () => {
    const [isVisible, setIsVisible] = React.useState(true);
    const [scrollY, setScrollY] = React.useState(0);
    const [haveBgColor, setHaveBgColor] = React.useState(false);
    const audioRef = React.useRef(null);
    const [IsActive, setIsActive] = React.useState(false);
    const [isPlaying, setIsPlaying] = React.useState(false);
    const {y:currentScroll} = useWindowScroll()

    const handleAudioClick =()=>{
        setIsPlaying(prev => !prev)
        setIsActive(prev => !prev)
    }
    useEffect(()=>{
        if(isPlaying){
            audioRef.current.play();
        }else {
            audioRef.current.pause();
        }
    },[isPlaying])
    useEffect(() => {
        if(currentScroll === 0){
            setIsVisible(true);
            setHaveBgColor(false);
        }
        else if(currentScroll > scrollY){
            setIsVisible(false);
            setHaveBgColor(true);
        }
        else if(currentScroll < scrollY){
            setIsVisible(true);
            setHaveBgColor(true);
        }
        setScrollY(currentScroll)
    },[currentScroll, scrollY])

    useGSAP(()=>{
        if(haveBgColor){
            gsap.set("#header",{
                backgroundColor:  isVisible ? "#000000" : "",
                y: isVisible ? 0 : -100,
                duration: 0.2,
                ease: "power3",
            })
        }
        else if(!haveBgColor){
            gsap.set("#header",{
                backgroundColor:  "transparent",
                duration: 0.2,
                delay: 0.5,
                ease: "power3",
            })
        }
    },{dependencies:[scrollY], revertOnUpdate: true})
    return (
        <header id="header" className=" fixed overflow-x-hidden z-[100] top-4 left-3 right-3 bg-black rounded-lg border-none">
            <nav className="flex items-center justify-between w-full py-2 px-4">
                <div className="flex items-center gap-4">
                    <img src="/img/logo.png" alt="logo" className="h-10" />
                    <div className=" hidden md:flex items-center gap-2">
                        <Button title="products" rightIcon={<FaLocationArrow />} className='!bg-blue-75 ' />
                        <Button title="whitePaper" className='!bg-blue-75 ' />
                    </div>

                </div>
                <ul className="flex items-center">
                    {navItems.map((item, i) => (
                        <li className="hidden md:block nav-hover-btn" key={i}>
                            <a href={item.href}>{item.name}</a>
                        </li>
                    ))}
                    <li onClick={handleAudioClick} className="text-white ms-10 flex items-center gap-[1px] cursor-pointer h-6">
                        <audio loop ref={audioRef} src="/audio/loop.mp3" />
                        <div className={clsx("audioContainer flex items-center gap-[1px]", {active: IsActive})}>
                        <span className="line"></span>
                        <span className="line"></span>
                        <span className="line"></span>
                        <span className="line"></span>
                        <span className="line"></span><span className="line"></span>
                        <span className="line"></span>
                        <span className="line"></span>
                        </div>

                    </li>

                </ul>

            </nav>

        </header>
    )
}
export default Navbar
