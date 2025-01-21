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
    gsap.to(logoRef.current, {
      fontSize: 60,
      scrollTrigger: {
        start: "top 0",
        scrub: true,
        pin: true,
      },
    });

    gsap.from(".about", {
      opacity: 0,
      scale: 0,
      scrollTrigger: {
        trigger: ".bg",
        scroller: "body",
        start: "top 0%",
        scrub: 1,
        pin: true,
      },
    });
  });

  return (
    <div className="bg bg-[url(/public/images/background-image.jpg)] bg-center bg-fixed bg-cover h-screen">
      <div className="flex items-center justify-between p-4 fixed">
        <h1
          ref={logoRef}
          className={` text-7xl md:text-9xl text-white font-[Jersey] font-extrabold`}
        >
          AJAY
        </h1>
      </div>

      <h1 className="about text-[#FE3C00] text-5xl md:text-8xl pl-5 pr-5 font-extrabold text-center pt-72">
        I Create Things For The Web
      </h1>

      <div className="bottom-24 absolute flex justify-between items-center w-full px-4 py-2">
        {/* Left section: Icons */}
        <div className="text-2xl md:text-3xl text-white flex flex-col">
          <a
            href="https://www.linkedin.com/in/ajay-kumar-200203260?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
          >
            <i className="ri-linkedin-box-fill hover:bg-orange-500 duration-500 rounded-md"></i>
          </a>
          <a href="https://github.com/Ajay1628Kumar" target="_blank">
            <i className="ri-github-fill hover:bg-orange-500 duration-500 rounded-md"></i>
          </a>
          <a href="tel:+91 9773675405" target="_blank">
            <i className="ri-phone-fill hover:bg-orange-500 duration-500 rounded-md"></i>
          </a>

          <a href="mailto:dhillonajay784@gmail.com">
            <i className="ri-mail-fill hover:bg-orange-500 duration-500 rounded-md"></i>
          </a>
        </div>

        {/* Right section: Time */}
        <div className="text-white font-[domaine] text-2xl text-right">
          <p className="underline">Time</p>
          <p>
            {currentHour} : {currentMinute} :{" "}
            <span className="text-[#FE3C00]">{currentSecond}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
