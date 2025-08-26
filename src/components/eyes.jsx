import React, { useEffect, useState } from "react";

const Eye = () => {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const width = window.innerWidth / 2;
      const height = window.innerHeight / 2;

      const diffY = mouseY - height;
      const diffX = mouseX - width;

      const angle = Math.atan2(diffY, diffX) * 57.2958;
      setRotate(angle);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="bg-[url(/images/background-image-2.jpg)] bg-cover bg-center h-screen flex justify-center items-center">
      <div className="w-4/5 flex flex-col items-center gap-5">
        <div className="orbitron text-[#d14614] text-2xl md:text-[50px] font-bold mb-[50px]">
          Are you,
        </div>
        <div className="flex items-center gap-2 md:gap-4 uppercase">
          <span className="font-[canopee] text-white text-2xl md:text-[250px] font-bold">
            l
          </span>
          <div className="bg-white w-12 h-12 md:w-[200px] md:h-[200px] rounded-full flex justify-center items-center">
            <div
              style={{ transform: `rotate(${rotate - 180}deg)` }}
              className="w-full h-6 md:h-[60px]"
            >
              <div className="w-6 h-6 md:w-[60px] md:h-[60px] bg-black rounded-full"></div>
            </div>
          </div>
          <div className="bg-white w-12 h-12 md:w-[200px] md:h-[200px] rounded-full flex justify-center items-center">
            <div
              style={{ transform: `rotate(${rotate - 180}deg)` }}
              className="w-full h-6 md:h-[60px]"
            >
              <div className="w-6 h-6 md:w-[60px] md:h-[60px] bg-black rounded-full"></div>
            </div>
          </div>
          <span className="font-[canopee] text-white text-2xl md:text-[250px] font-bold">
            king
          </span>
        </div>
        <div className="orbitron text-[#d14614] text-2xl md:text-[50px] font-bold mt-[50px]">
          for web developer
        </div>
      </div>
    </div>
  );
};

export default Eye;
