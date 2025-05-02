import React from "react";
import { FaMagic, FaRocket, FaUsers } from "react-icons/fa";

const features = [
  {
    icon: <FaMagic />,
    title: "Wow-Worthy Animations",
    description: "We bring your brand to life with magical microinteractions and cinematic visuals.",
  },
  {
    icon: <FaRocket />,
    title: "Performance Optimized",
    description: "Our websites aren't just pretty – they’re blazing fast and SEO-friendly.",
  },
  {
    icon: <FaUsers />,
    title: "Client-Centric",
    description: "We co-create every step of the way to ensure you get exactly what you need.",
  },
];

const WhyChooseUsSection = () => {
  return (
    <section className="py-20 px-6 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#03A791] mb-12">
          Why Choose Us?
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {features.map((feat, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] p-8 rounded-3xl shadow-lg hover:shadow-cyan-700/50 transition duration-300"
            >
              <div className="text-4xl mb-4 text-[#03A791]">{feat.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feat.title}</h3>
              <p className="text-gray-400">{feat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
