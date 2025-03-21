import React from 'react'
import {TiLocationArrow} from "react-icons/ti";
import { gsap } from "gsap";
import {clsx} from "clsx";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);


const Feature = () => {

    const BentoCard = ({src, title, subtitle})=>{
        return (
            <div className="relative size-full bento-card">
                <video src={src} autoPlay loop muted className="absolute top-0 left-0 size-full object-cover object-center" />
                <div className="absolute z-10 top-6 left-4 w-full flex flex-col gap-4">
                    {title && <span
                        className="font-zentry font-black text-blue-100 uppercase special-font text-[5rem] leading-[5rem]">{title}</span>}
                    { subtitle && <p className="max-w-sm text-blue-75">{subtitle}</p>}
                </div>
            </div>
            )
    }
    const TiltCard = ({children, className})=>{
        const [rotateX, setRotateX] = React.useState(0)
        const [rotateY, setRotateY] = React.useState(0)
        const [transform, setTransform] = React.useState("")
        const itemRef = React.useRef(null)

        const handleMouseMove = (e)=>{
            if(!itemRef.current) return;
            const {clientX, clientY} = e;
            const {left, top, height, width} = itemRef.current.getBoundingClientRect();
            // console.log(left, top, height, width)
            const relativeX = clientX - left;
            const relativeY = clientY - top;
            const relativeXWidth = relativeX / width;
            const relativeYHeight = relativeY / height;
            const rotatesX = (relativeYHeight - 0.5) * 5;
            const rotatesY = (relativeXWidth -0.5) * -5;
            // console.log(rotatesX, rotatesY)
            setRotateX(rotatesX)
            setRotateY(rotatesY)
            // console.log({rotatesX, rotatesY})
            setTransform( `perspective(700px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(.95, .95, .95) `)
        }
        const handleMouseLeave = ()=>{
            setTransform( "")
        }

        return (
            <div ref={itemRef}  onMouseEnter={handleMouseLeave} style={{transform: `${transform}`, transition:"transform 0.5 ease-in-out "}} className={clsx("tilt", className)} onMouseMove={handleMouseMove}  onMouseLeave={handleMouseLeave}>
                {children}
            </div>
        )
    }
    return (
        <div className="relative w-screen overflow-x-hidden bg-black">
            <div className="container mx-auto px-10 md:px-3 mt-[64px] flex flex-col items-start font-circular-web ">
                    <div className="px-3 mb-12">
                        <h2 className="text-blue-100 text-md">Into the Metagame Layer</h2>
                        <p className="opacity-50 text-white max-w-md">
                            Immerse yourself in a rich and ever-expanding universe where a vibrant array of products converge into an interconnected overlay experience on your world.
                        </p>
                    </div>


                <TiltCard className="h-96 w-full overflow-hidden border-hsla md:h-[65vh] rounded-md mb-7">
                    <BentoCard src="/videos/feature-1.mp4" title={
                        <>
                        radia<b>n</b>t
                        </>
                    } subtitle="A cross-platform metagame app, turning your activities across Web2 and Web3 games into a rewarding adventure." />
                </TiltCard>


                    <div className="grid grid-cols-2 grid-rows-3 gap-7 h-[135dvh] overflow-hidden w-full ">
                        <TiltCard className="col-span-1 row-span-1 md:row-span-2 border-hsla">
                            <BentoCard src="/videos/feature-2.mp4" title="zigma" subtitle="An anime and gaming-inspired NFT collection - the IP primed for expansion." />
                        </TiltCard>
                        <TiltCard className="col-span-1 row-span-1 border-hsla">
                            <BentoCard src="/videos/feature-3.mp4" title="nexus" subtitle="A gamified social hub, adding a new dimension of play to social interaction for Web3 communities." />
                        </TiltCard>
                        <TiltCard className="col-span-1 row-span-1 border-hsla">
                            <BentoCard src="/videos/feature-4.mp4" title="azul" subtitle="A cross-world AI Agent - elevating your gameplay to be more fun and productive." />
                        </TiltCard>
                        <TiltCard className=" bg-violet-300 col-span-1 row-span-1 rounded-md flex flex-col justify-between py-5 px-4">
                            <span className="font-zentry font-black text-black uppercase special-font text-[3rem] md:max-w-min leading-[3rem]">m<b>o</b>re co<b>m</b>ing s<b>o</b>oon!</span>
                            <span>
                                <TiLocationArrow className="size-10 justify-self-end" />
                            </span>
                        </TiltCard>
                        <TiltCard className="col-span-1 row-span-1 rounded-md overflow-hidden">
                            <BentoCard src="/videos/feature-5.mp4" />
                        </TiltCard>
                    </div>

            </div>
        </div>
    )
}
export default Feature
