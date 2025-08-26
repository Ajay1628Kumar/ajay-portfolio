import React from "react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["HTML", "CSS", "React.js", "Next.js", "Tailwind CSS", "GSAP"],
    },
    {
      title: "Programming Languages",
      skills: ["C", "C++", "JavaScript"],
    },
    {
      title: "Version Control Systems",
      skills: ["Git", "GitHub"],
    },
  ];

  return (
    <div className="w-full bg-black text-white py-10 pb-12 px-4 sm:px-6 lg:px-8">
      {skillCategories.map((category, catIndex) => (
        <div key={catIndex} className="mb-12">
          <h2 className="orbitron text-3xl sm:text-4xl md:text-4xl text-[#d14614] text-left mb-8">
            {category.title}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl">
            {category.skills.map((skill, index) => (
              <div
                key={index}
                className="relative p-6 rounded-lg bg-white/10 backdrop-blur-md border-t border-b border-white/20 
                  shadow-lg hover:shadow-xl hover:shadow-[#d14614] transition-all duration-300
                  flex items-center justify-center min-h-[120px]
                  hover:scale-105 hover:bg-white/20"
              >
                <span className="text-lg sm:text-xl font-semibold text-white text-center">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;