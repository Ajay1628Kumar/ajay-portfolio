import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const MainPage = () => {
  let logoRef = useRef();
  let time = new Date();
  let [currentHour, setHour] = useState(time.getHours());
  let [currentMinute, setMinute] = useState(time.getMinutes());
  let [currentSecond, setSecond] = useState(time.getSeconds());

  setInterval(() => {
    let time = new Date();
    setHour(time.getHours());
    setMinute(time.getMinutes());
    setSecond(time.getSeconds());
  }, 1000);

  useGSAP(() => {
    let tl = gsap.timeline();

    // Logo animation (unchanged)
    gsap.to(logoRef.current, {
      fontSize: 60,
      scrollTrigger: {
        start: "top 0",
        scrub: true,
        pin: true,
      },
    });

    // About animation (unchanged)
    tl.from(".about", {
      opacity: 0,
      scale: 0,
      scrollTrigger: {
        trigger: ".bg",
        scroller: "body",
        start: "top 0%",
        // end: "bottom -50%",
        scrub: 1,
        pin: true,
      },
    }).from(".btn", {
      opacity: 0,
      scale: 0,
      // delay: 1,
      duration: 2,
    });

    // Stagger animation for .intro words
    // gsap.from(".intro span", {
    //   scale: 0,
    //   opacity: 0,
    //   duration: 1,
    //   ease: "power2.out",
    //   stagger: 0.2,
    // });
  });

  // Split the intro text into words and wrap each in a span
  const introText = "Hi! I am Ajay Kumar".split(" ").map((word, index) => (
    <span key={index} className="inline-block mx-2">
      {word}
    </span>
  ));

  return (
    <div className="bg bg-[url(/public/images/background-image.jpg)] bg-center bg-fixed bg-cover h-screen">
      <div className="flex items-center justify-between p-4 fixed">
        <h1
          ref={logoRef}
          className="text-7xl md:text-9xl font-[jersey] text-white font-extrabold"
        >
          AJAY
        </h1>
      </div>

      <div className="absolute flex flex-col justify-center items-center w-full h-full gap-[50px]">
        <h1 className="bebas-neue-regular about text-[#d14614] text-5xl md:text-9xl font-extrabold text-center">
          I Create Things For The Web
        </h1>
        <a
          href="/src/assets/Ajay Frontend Resume.pdf"
          download="Ajay Resume.pdf"
          target="_blank"
          className="relative cursor-pointer py-4 px-8 text-center font-barlow inline-flex justify-center text-base uppercase text-white rounded-lg border-solid transition-transform duration-300 ease-in-out group outline-offset-4 focus:outline focus:outline-2 focus:outline-white focus:outline-offset-4 overflow-hidden"
        >
          <a
            href="/src/assets/Ajay Frontend Resume.pdf"
            className="orbitron relative z-50"
          >
            Resume
          </a>

          <span className="absolute left-[-75%] top-0 h-full w-[50%] bg-white/20 rotate-12 z-10 blur-lg group-hover:left-[125%] transition-all duration-1000 ease-in-out"></span>

          <span className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#d14614] absolute h-[20%] rounded-tl-lg border-l-2 border-t-2 top-0 left-0"></span>
          <span className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#d14614] absolute group-hover:h-[90%] h-[60%] rounded-tr-lg border-r-2 border-t-2 top-0 right-0"></span>
          <span className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#d14614] absolute h-[60%] group-hover:h-[90%] rounded-bl-lg border-l-2 border-b-2 left-0 bottom-0"></span>
          <span className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#d14614] absolute h-[20%] rounded-br-lg border-r-2 border-b-2 right-0 bottom-0"></span>
        </a>
      </div>

      <div className="bottom-24 absolute flex justify-between items-center w-full px-4 py-2">
        {/* Left section: Icons */}
        <div className="text-2xl md:text-3xl text-white flex flex-col gap-[10px]">
          <a
            href="https://www.linkedin.com/in/ajay-kumar-200203260?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="ri-linkedin-box-fill bg-white bg-opacity-10 backdrop-blur-sm duration-500 rounded-md p-1 border-t border-b"></i>
          </a>
          <a
            href="https://github.com/Ajay1628Kumar"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="ri-github-fill bg-white bg-opacity-10 backdrop-blur-sm duration-500 rounded-md p-1 border-t border-b"></i>
          </a>
          <a
            href="tel:+91 9773675405"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="ri-phone-fill  bg-white bg-opacity-10 backdrop-blur-sm duration-500 rounded-md p-1 border-t border-b"></i>
          </a>
          <a href="mailto:dhillonajay784@gmail.com" rel="noopener noreferrer">
            <i className="ri-mail-fill  bg-white bg-opacity-10 backdrop-blur-sm duration-500 rounded-md p-1 border-t border-b"></i>
          </a>
        </div>
      </div>
      {/* Right section: Time */}
      <div className="orbitron absolute top-10 right-5 text-white text-2xl text-right">
        <p>Time</p>
        <p>
          {currentHour} : {currentMinute} :{" "}
          <span className="text-[#d14614]">{currentSecond}</span>
        </p>
      </div>
    </div>
  );
};

export default MainPage;
