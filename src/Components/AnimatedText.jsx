import React, { useRef} from 'react'
import {clsx} from "clsx";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import {ScrollTrigger} from "gsap/all";
import {cn} from "../utils.js";

gsap.registerPlugin(useGSAP,ScrollTrigger);

const AnimatedText = ({text, className, active=false}) => {

    const containerRef = useRef(null);

    useGSAP(()=>{
        let ctx = gsap.context(()=>{
            const timeline = gsap.timeline({
                scrollTrigger:{
                    trigger: containerRef.current,
                    start: '100 bottom',
                    end: "20 bottom",
                    // scrub: 0.5,
                    toggleActions: "play none none reverse",
                }
            })
            timeline.to(".animated-text", {
                opacity: 1,
                duration: .8,
                transform: "translate3d(0, 0, 0) rotateX(0deg) rotateY(0deg)",
                ease: "power2.out",
                stagger: 0.02,

            })
        }, containerRef.current);
        return () => ctx.revert();
    },[])
    return (

        <div  className={cn("w-full z-20 overflow-hidden px-4 py-3 h-fit ", active ? "mix-blend-difference" : "") }>
        <div ref={containerRef} className={clsx("animated-title", className)}>
            {
                text.split("<br />").flatMap((sentence, index) => (
                    <div key={index} className="flex items-center justify-center max-w-full gap-3  flex-wrap">
                        {sentence.split(" ").map((word, i) => (
                            <span className="animated-text" key={i} dangerouslySetInnerHTML={{__html: word}}/>
                        ))
                        }
                    </div>

                ))
            }
        </div>
         </div>



    )
}
export default AnimatedText
