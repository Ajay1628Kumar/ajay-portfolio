import React, { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Project = () => {
  useGSAP(() => {
    gsap.from(".project", {
      scale: 0,
      opacity: 0,
      stagger: 1,
      duration: 2,
      scrollTrigger: {
        trigger: ".projects",
        scroller: "body",
        start: "top 0%",
        scrub: 2,
        pin: true,
      },
    });
  });

  const [hoveredProject, setHoveredProject] = useState(null);
  const projects = [
    {
      id: 1,
      name: "Clinic Dashboard",
      url: "https://clinivention.vercel.app/dashboard",
      imgSrc: "/images/clinic-dashboard.png",
      description:
        "Built the fully responsive frontend of a healthcare appointment platform using Next.js and Tailwind CSS, featuring patient registration, login forms, and appointment booking UI.Designed a doctor’s dashboard to view scheduled appointments with clean layouts and optimized performance across devices.",
    },
    {
      id: 2,
      name: "CarVention",
      url: "https://we-frame-tech-ecommerce-website-cmr1.vercel.app/",
      imgSrc: "/images/ecom.png",
      description:
        "Developed a fully responsive car showcase platform using Next.js and Tailwind CSS, allowing users to browse cars based on their requirements with a clean and intuitive interface. Integrated Firebase and Google OAuth for secure authentication and smooth user login/signup experience. Focused on modern UI components, optimized performance, and seamless navigation across devices, highlighting strong frontend development and authentication integration skills.",
    },
    {
      id: 3,
      name: "Dribble Clone",
      url: "https://ajay1628kumar.github.io/dribble-clone/",
      imgSrc: "/images/dribble.png",
      description:
        "Crafted a responsive Dribbble-inspired landing page using HTML, CSS, and JavaScript. Implemented smooth animations and interactive elements to enhance user engagement. Optimized performance with minified code and lazy-loaded images. Ensured seamless adaptability across devices with tailored media queries.",
    },
    {
      id: 4,
      name: "To-do Web-App",
      url: "https://to-do-web-app-weld.vercel.app/",
      imgSrc: "/images/todoapp.png",
      description:
        "Built a fully responsive task management web application using React.js andTailwind CSS. Features include task creation, dynamic task addition, and marking  ascompleted. ",
    },
    // {
    //   id: 5,
    //   name: "Register Karo Landing Page",
    //   url: "https://register-karo-app-rust.vercel.app/",
    //   imgSrc: "/images/registerkaro.png",
    //   description:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique corporis iure nesciunt! Nostrum, quisquam quidem. ",
    // },
  ];

  return (
    <div className=" text-white bg-[black] px-[20px] py-[50px] pb-[80px]">
      <h1 className="orbitron text-4xl md:text-6xl text-[#d14614] mb-10">
        Recent Projects
      </h1>

      <div className=" grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
        {projects.map((project) => {
          const isHovered = hoveredProject === project.id;

          return (
            <div
              key={project.id}
              className=" relative p-5 pb-0 rounded-lg bg-white bg-opacity-5 backdrop-blur-md overflow-hidden transition-all duration-500 h-auto min-h-[200px]"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="flex flex-col md:flex-row gap-5">
                <img
                  src={project.imgSrc}
                  alt={project.name}
                  className="h-32 md:h-36 w-full md:w-2/5 object-cover rounded-lg"
                />
                <div className="flex flex-col justify-between w-full md:w-3/5">
                  <h2 className="text-xl font-semibold mb-2">{project.name}</h2>
                  <p className="text-sm text-gray-300 mb-4 line-clamp-4">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Link button with transition */}
              <div
                className={`mt-4 transition-all duration-500 ease-in-out overflow-hidden ${
                  isHovered ? "max-h-12 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-orange-500 hover:bg-orange-600 text-white text-center py-2 rounded-lg transition-colors duration-300"
                >
                  View Project
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Project;
