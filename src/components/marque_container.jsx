import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);

const MarqueContainer = () => {
  useGSAP(() => {
    gsap.to(".heading", {
      translateX: "-120%",
      ease: "none",
      scrollTrigger: {
        trigger: ".main",
        scroller: "body",
        start: "top 10%",
        scrub: 2,
        pin: true,
      },
    });
  });

  return (
    <div className="bg-[#0A0A0A] overflow-hidden">
      <div className=" main ">
        <h1 className="heading text-[30vw] font-extrabold font-[canopee] whitespace-nowrap text-[#878787]">
          I AM A WEB <span className="text-[#FE3C00]">DEVELOPER</span> 
        </h1>
      </div>
    </div>
  );
};

export default MarqueContainer;
