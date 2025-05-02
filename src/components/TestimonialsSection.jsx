import React from "react";

const testimonials = [
  {
    name: "Sophie L.",
    quote:
      "Absolutely blown away by their design and development. Truly exceeded our expectations!",
  },
  {
    name: "Arjun M.",
    quote:
      "They turned our ideas into a living, breathing brand. Pure creative genius!",
  },
  {
    name: "Emily R.",
    quote:
      "A dream team for our launch. The site was fast, sleek, and stunning. 10/10.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 px-6 bg-[#101f1a] text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#03A791] mb-12">
          What Our Clients Say
        </h2>
        <div className="space-y-10">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-[#1a1a1a] p-8 rounded-3xl shadow-lg border border-[#03A791]/20"
            >
              <p className="italic text-gray-300">"{t.quote}"</p>
              <p className="mt-4 font-semibold text-[#03A791]">– {t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
