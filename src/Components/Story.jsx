import React from 'react'
import Button from "./Button.jsx";
import AnimatedText from "./AnimatedText.jsx";
import { gsap } from "gsap";

const Story = () => {
    const storyRef = React.useRef(null);
    const [rotateX, setRotateX] = React.useState(0);
    const [rotateY, setRotateY] = React.useState(0);

    function handleMouseMove(e){
        const element = storyRef.current
        if(!element) return;
        const {clientX, clientY} = e;
        const {left, top, width, height} = storyRef.current.getBoundingClientRect();
        const relativeX = clientX - left ;
        const relativeXCenter = width/2
        const rotatedY = ((relativeX - relativeXCenter ) / relativeXCenter ) * 14
        setRotateY(rotatedY)
        const relativeY = clientY - top ;
        const relativeYCenter = height / 2
        const rotatedX = ((relativeY - relativeYCenter ) / relativeYCenter ) * -14
        setRotateX(rotatedX)
            gsap.to(element, {
                duration: 0.3,
                ease: "power1.out",
                perspective: 500,
                rotateX,
                rotateY
            })
    }
    function handleMouseLeave(e){
        const element = storyRef.current
        if(element){
            gsap.to(element, {
                duration: 0.3,
                ease: "power1.out",
                rotateX: 0,
                rotateY: 0,
            })
        }
    }
    return (
        <div className="min-h-screen w-full pb-8 overflow-hidden bg-black ">
            <div className="relative w-screen overflow-x-hidden h-full">
                <div className=" mt-56 flex flex-col items-center ">
                    <p className="text-[10px] mb-4  text-blue-75 text-center uppercase font-general"> the multiversal ip world</p>
                    <AnimatedText className="special-font text-center font-zentry font-black !text-blue-75 uppercase text-[5rem] leading-[5rem] overflow-hidden" text="The st<b>o</b>ry of <br /> a hidden real<b>m</b>" active/>
                </div>
            </div>
            <div className="relative w-full h-[100dvh] -mt-[76PX] mb-20 overflow-hidden clip-parent ">
                <div  className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-[70vw] md:w-[60vw]  img-clip-path ">
                    <img ref={storyRef} onMouseEnter={handleMouseLeave} onMouseUp={handleMouseLeave} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} src="/img/entrance.webp" alt="entrance" className="absolute left-0 top-0 size-full object-cover " />
                        <svg className="svg-class"  xmlns="http://www.w3.org/2000/svg" version="1.1">
                            <defs>
                                <filter id="goo"><feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                                    <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
                                    <feComposite in="SourceGraphic" in2="goo" operator="atop"/>
                                </filter>
                            </defs>
                        </svg>
                </div>
            </div>
            <div className="relative flex justify-self-end md:right-16 -mt-36 md:-mt-[145px] lg:-mt-44 max-w-80 text-white">
                <div className="flex flex-col items-start gap-3">
                    <p className="text-blue-100 text-sm font-circular-web">
                        Where realms converge, lies Zentry and the boundless pillar. Discover its secrets and shape your fate amidst infinite opportunities.
                    </p>
                    <Button title="discover prologue" className="uppercase !bg-white text-xs font-general"/>
                </div>
            </div>

        </div>
    )
}
export default Story
