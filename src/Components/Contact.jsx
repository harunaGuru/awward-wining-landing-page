import React from 'react'
import Button from "./Button.jsx";
import SvgCorner from "./SvgCorner.jsx";

const Contact = () => {
    return (
        // py-20
        <div id="contact" className="relative  min-h-screen w-screen bg-inherit">
            <div className="relative my-20  bg-blue-200 flex flex-col items-center justify-center border mx-auto border-black rounded-lg bg-back w-[90vw] h-[100dvh] gap-4">
                <p className="font-general text-white uppercase text-sm text-center mt-10 md:mt-0 z-10">Join Zentry</p>
                <h1 className="special-font text-center font-zentry font-black text-blue-75 uppercase lg:text-[5rem] lg:leading-[5rem] text-[3rem] leading-[3rem] max-w-[19rem]  lg:max-w-[32rem] sm:z-20">Let's b<b>u</b>ild the  new era of  g<b>a</b>ming t<b>o</b>gether</h1>
                <Button title="contact us" className="uppercase !bg-white text-xs font-general"/>
                <div className="box_parent sm:-top-4 sm:left-auto sm:right-2 sm:translate-x-0 sm:w-[22vw]  sm:h-[75dvh] sm:z-10">
                    <div
                        className="absolute size-full  bg-blue-200 sword-clip-path  ">
                        <img src="/img/swordman.webp" alt="swordman"
                             className="absolute top-0 left-0 object-cover size-full "/>

                    </div>
                    <SvgCorner />
                </div>
                <div className="left-1/2 -translate-x-1/2 -top-[80px] h-[55dvh] w-[44dvh] z-10 absolute sm:top-7 sm:left-auto sm:right-0 sm:translate-x-0 sm:w-[22vw] sm:z-0">
                    <img src="/img/swordman-partial.webp" alt="swordmanPartial"
                         className="absolute top-0 left-0 object-cover size-full "/>
                </div>
                <div className="box_parent2 sm:left-20 sm:translate-x-0 sm:h-[30dvh] md:h-[35dvh] ">
                    <div className="absolute -bottom-10 left-0 size-full contact-clip-path">
                        <img src="/img/contact-2.webp" alt="contact" className="absolute left-0 bottom-0 object-cover size-full"/>
                    </div>
                    <SvgCorner />
                </div>
                <div className="box_parent3">
                    <div className="absolute top-0 left-0 size-full contact2-clip-path ">
                        <img src="/img/contact-1.webp" alt="contact1" className="absolute left-0 top-0 object-cover size-full"/>
                    </div>
                    <SvgCorner />
                </div>
            </div>
        </div>
    )
}
export default Contact
