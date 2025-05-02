import React from "react";

const projects = [
  { title: "Creative Agency Site", img: "/project1.png" },
  { title: "Fashion Brand Landing", img: "/project2.png" },
  { title: "Tech Startup Website", img: "/project3.png" },
];

const PortfolioSection = () => {
  return (
    <section className="py-20 px-6 bg-[#0e2017] text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#03A791] mb-12">
          Our Work
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <img src={project.img} alt={project.title} className="w-full h-60 object-cover" />
              <div className="bg-[#1a1a1a] p-4">
                <h3 className="text-lg font-semibold text-[#03A791]">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
