import {React, useEffect} from "react";
import { FaReact } from "react-icons/fa";
import { SiGreensock, SiFramer } from "react-icons/si";
import { FaPlay } from "react-icons/fa";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Web from "../assets/web.png"; // Replace with your actual image path

gsap.registerPlugin(ScrollTrigger);


const AnimatedWebsiteSection = () => {
  useEffect(() => {
    gsap.from(".animated-section", {
      scrollTrigger: {
        trigger: ".animated-section",
        start: "top 80%",
      },
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  return (
    <section className="animated-section  min-h-screen  text-white px-4 py-20 flex justify-center items-center">

      <div className="max-w-6xl w-full bg-[#1a1a1a] rounded-3xl shadow-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-10">

        {/* Left Text Section */}
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-[#03A791] mb-6">
            ANIMATED WEBSITE DEVELOPMENT
          </h1>

          <h2 className="text-2xl font-semibold mb-4 text-gray-300">SERVICES</h2>

          <ul className="space-y-3 text-lg text-gray-400">
            <li>👉 Landing Pages with Animation</li>
            <li>👉 Scroll-based Effects</li>
            <li>👉 Lottie & SVG Integration</li>
            <li>👉 Portfolio & Agency Sites</li>
            <li>👉 High-conversion UI/UX</li>
          </ul>

          {/* Tech Stack Icons */}
          <div className="flex gap-4 mt-6 text-3xl text-cyan-400">
            <FaReact title="React" />
            <SiFramer title="Framer Motion" />
            <SiGreensock title="GSAP" />
          </div>
        </div>

        {/* Right Image / Preview */}
        <div className="relative w-full md:w-[45%]">
          <img
            src={Web} // Replace with actual image
            alt="Web Dev"
            className="rounded-xl w-full h-auto object-cover"
          />
          <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-black p-4 rounded-full hover:scale-110 transition">
            <FaPlay className="text-xl" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default AnimatedWebsiteSection;
