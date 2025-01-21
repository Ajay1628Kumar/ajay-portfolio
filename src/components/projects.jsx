import React from "react";

const Project = () => {
  return (
    <div className="text-white bg-[#0A0A0A] pt-10 pb-10">
      <h1 className="ml-10 font-[Domaine] text-4xl underline md:text-6xl">
        Recent Projects
      </h1>

      <div className="flex flex-col justify-center items-center border-2 border-[#878787] m-10 mb-0 rounded-lg p-8 md:text-3xl font-[Domaine] tracking-wide">
        
        <div className="lg:w-2/3">
          <a href="https://we-frame-tech-ecommerce-website-cmr1.vercel.app/">
            <img src="/images/ecom.png" className="rounded-lg" alt="projects" />
            <h3 className="text-center">Ecommerce Website FrontEnd</h3>
          </a>
        </div>

        <hr className="border-[#878787] w-full m-3" />

        <div className="lg:w-2/3">
          <a href="https://ajay1628kumar.github.io/dribble-clone/">
            <img
              src="/images/dribble.png"
              className="rounded-lg"
              alt="projects"
            />

            <h3 className="text-center">Dribble Clone</h3>
          </a>
        </div>

        <hr className="border-[#878787] w-full m-3" />

        <div className="lg:w-2/3">
          <a href="https://to-do-web-app-weld.vercel.app/">
            <img
              src="/images/todoapp.png"
              className="rounded-lg"
              alt="projects"
            />
            <h3 className="text-center">To-Do-Web-App</h3>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
