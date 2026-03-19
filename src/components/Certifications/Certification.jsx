import React from "react";

const certifications = [
  {
    provider: "IBM",
    name: "Machine Learning with Python",
    id: "Course ID: ML0101EN",
    icon: "🎖️",
  },
  {
    provider: "IBM",
    name: "Deep Learning with Python",
    id: "Course ID: ML0115EN",
    icon: "🎖️",
  },
  {
    provider: "Intellipaat",
    name: "AWS Foundation Course",
    id: "Amazon Web Services",
    icon: "☁️",
  },
  {
    provider: "Codec Technology",
    name: "Mern Developer ",
    id: " Mern Developer Intern",
    icon: "🧑🏼‍🎓",
  },
];

const Certifications = () => {
  return (
    <section
      id="certifications"
      className="py-16 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans"
    >
      {/* Section Header */}
      <div className="text-center mb-12">
       

        <h2 className="text-3xl md:text-5xl font-bold text-white mt-2">
          What I've <span className="text-[#8245ec]">Earned</span>
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="relative bg-[#0f172a] border border-purple-700 rounded-2xl p-6 
            transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_#8245ec]"
          >
            {/* Provider */}
            <h3 className="text-lg font-semibold text-purple-400">
              {cert.provider}
            </h3>

            {/* Name */}
            <p className="text-white text-xl font-bold mt-2">
              {cert.name}
            </p>

            {/* ID */}
            <p className="text-gray-400 text-sm mt-2">
              {cert.id}
            </p>

            {/* Icon */}
            <span className="absolute top-4 right-4 text-2xl">
              {cert.icon}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;