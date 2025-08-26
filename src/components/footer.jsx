import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  let ref = useRef();
  useGSAP(() => {
    gsap.from(ref.current, {
      x: 1000,
      opacity: 0,
      scrollTrigger: {
        trigger: ref.current,
        scroller: "body",
        start: "top 50%",
        end: "top 70%",
        scrub: 3,
      },
    });
  });
  return (
    <div className=" bg-[url(/images/bg-gif.gif)] backdrop-brightness-50 bg-center bg-cover overflow-hidden">
      <div ref={ref} className="p-10 pb-10 md:p-14 ">
        <p className="text-white text-xl md:text-2xl font-extrabold">
          <i className="ri-circle-fill"></i>
          Ready to elevate your brand? <br />
          <span className="text-[#bdbdc0]">
            Let’s build something amazing together.
          </span>
        </p>

        <h1 className="tag text-white text-7xl md:text-9xl mt-20 md:mt-32 text-right font-extrabold">
          LET'S BRING <br /> YOUR <span className="text-[#d14614]">IDEAS</span>{" "}
          <br /> TO LIFE
        </h1>
      </div>

      <hr className="border-white" />

      <footer className="text-white bg-black text-md p-10 md:p-14">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-[#d14614]">(Contact)</h3>
            <a href="mailto:dhillonajay784@gmail.com">
              dhillonajay784@gmail.com
            </a>{" "}
            <br />
            <a href="tel:+91 9773675405">+91 9773675405</a>
          </div>

          <div className="text-right">
            <h3 className="text-[#d14614]">(Address)</h3>
            <h3>Gurugram , Haryana</h3>
          </div>
        </div>

        <h5 className="text-center mt-10">
          <i className="ri-copyright-line"></i> Ajay 2025. All rights reserved
        </h5>
      </footer>
    </div>
  );
};

export default Footer;
