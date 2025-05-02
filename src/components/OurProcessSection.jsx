import React from "react";
import { FaLightbulb, FaLaptopCode, FaRocket } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const steps = [
  {
    icon: <FaLightbulb />,
    title: "01. Discover",
    desc: "We dive deep into your goals and gather inspiration to align our creative vision.",
  },
  {
    icon: <FaLaptopCode />,
    title: "02. Design & Build",
    desc: "We craft stunning layouts and code them to pixel-perfection using the latest tech.",
  },
  {
    icon: <FaRocket />,
    title: "03. Launch & Scale",
    desc: "We go live with a bang, and help you scale with ongoing support and optimization.",
  },
];

const Card = ({ step, index }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  React.useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: index * 0.3 },
      });
    }
  }, [controls, inView, index]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={controls}
      className={`relative z-[${10 - index}] -mt-16 md:-mt-20 lg:-mt-28 max-w-xl mx-auto bg-[#1a1a1a] p-8 rounded-3xl shadow-lg hover:shadow-cyan-700/50 transition duration-300`}
    >
      <div className="text-4xl mb-4 text-[#03A791]">{step.icon}</div>
      <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
      <p className="text-gray-400">{step.desc}</p>
    </motion.div>
  );
};

const OurProcessSection = () => {
  return (
    <section className="py-32 px-6 bg-black text-white relative">
      <div className="max-w-4xl mx-auto text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-bold text-[#03A791]">
          Our Process
        </h2>
      </div>

      <div className="relative">
        {steps.map((step, index) => (
          <Card key={index} step={step} index={index} />
        ))}
      </div>
    </section>
  );
};

export default OurProcessSection;
