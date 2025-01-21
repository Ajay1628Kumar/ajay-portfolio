import React, { useRef } from "react";
import { useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Eye = () => {
  let [rotate, setRotate] = useState(0);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let width = window.innerWidth / 2;
      let height = window.innerHeight / 2;

      let diffY = mouseY - height;
      let diffX = mouseX - width;

      let angle = Math.atan2(diffY, diffX) * 57.2958;

      setRotate(angle);
    });
  });

  return (
    <div className=" bg-[url(/images/background-image-2.jpg)] bg-cover bg-center h-screen flex justify-center items-center">
      <div className="w-4/5 h-2/5 md:w-2/3 md:h-2/3 bg-transparent flex justify-center items-center gap-5">
        <div className="bg-black w-32 h-32 md:h-52 md:w-52 rounded-full flex justify-center items-center">
          <div
            style={{ transform: `rotate(${rotate - 180}deg)` }}
            className="w-full h-10"
          >
            <div className="w-10 h-10 bg-white rounded-full"></div>
          </div>
        </div>

        <div className="bg-black w-32 h-32 md:h-52 md:w-52 rounded-full flex justify-center items-center">
          <div
            style={{ transform: `rotate(${rotate - 180}deg)` }}
            className="w-full h-10 "
          >
            <div className="w-10 h-10 bg-white rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eye;
