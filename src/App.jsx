import { useRef } from "react";
import Eye from "./components/eyes";
import MainPage from "./components/MainPage";
import MarqueContainer from "./components/marque_container";
import Project from "./components/projects";
import Footer from "./components/footer";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Skills from "./components/Skills";
gsap.registerPlugin(ScrollTrigger);

const App = () => {
  let crusor = useRef();

  window.addEventListener("mousemove", (e) => {
    gsap.to(crusor.current, {
      x: e.clientX,
      y: e.clientY,

      duration: 1.25,
      ease: "power1.out",
      // y: -500,
      // margin:10
    });
  });

  return (
    <div id="main">
      <div
        className=" w-5 h-5 bg-white rounded-full fixed z-50"
        ref={crusor}
      ></div>
      <MainPage />
      <hr className="border-white" />
      <MarqueContainer />
      <hr className="border-white" />
      <Project />
      <hr className="border-white" />
      <Skills />
      <hr className="border-white" />
      <Eye />
      <hr className="border-white" />
      <Footer />
    </div>
  );
};

export default App;
