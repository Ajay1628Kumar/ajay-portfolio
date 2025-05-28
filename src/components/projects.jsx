import React from "react";

const Project = () => {
  const porjects = [
    {
      id: 1,
      name: "Clinic Dashboard",
      url: "https://clinivention.vercel.app/dashboard",
      imgSrc: "/images/clinic-dashboard.png",
    },
    {
      id: 2,
      name: "Ecommerce Website Front-End",
      url: "https://we-frame-tech-ecommerce-website-cmr1.vercel.app/",
      imgSrc: "/images/ecom.png",
    },
    {
      id: 3,
      name: "Dribble Clone",
      url: "https://ajay1628kumar.github.io/dribble-clone/",
      imgSrc: "/images/dribble.png",
    },
    {
      id: 4,
      name: "To-do Web-App",
      url: "https://to-do-web-app-weld.vercel.app/",
      imgSrc: "/images/todoapp.png",
    },
    {
      id: 5,
      name: "Register Karo Wesbite Landing Page",
      url: "https://register-karo-app-rust.vercel.app/",
      imgSrc: "/images/registerkaro.png",
    },
  ];
  return (
    <div className="text-white bg-[#0A0A0A] pt-10 pb-10">
      <h1 className="ml-10 font-[Domaine] text-4xl underline md:text-6xl">
        Recent Projects
      </h1>

      <div className="flex flex-col justify-center items-center border-2 border-[#878787] m-10 mb-0 rounded-lg p-8 md:text-3xl font-[Domaine] tracking-wide">
        {porjects.map((project) => {
          return (
            <>
              <div className="lg:w-2/3" key={project.id}>
                <a href={project.url}>
                  <img
                    src={project.imgSrc}
                    className="rounded-lg"
                    alt="projects"
                  />
                  <h3 className="text-center">{project.name}</h3>
                </a>
              </div>

              <hr className="border-[#878787] w-full m-3" />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Project;
