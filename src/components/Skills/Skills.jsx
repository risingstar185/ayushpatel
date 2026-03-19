import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-24 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans"
    >
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
       

        <h2 className="text-3xl md:text-5xl font-bold text-white mt-2">
          My <span className="text-[#8245ec]">Skills</span>
        </h2>

        <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto">
          A collection of my technical skills developed through projects and
          real-world learning experiences.
        </p>
      </motion.div>

      {/* Skill Categories */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        {SkillsInfo.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <Tilt
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              perspective={1000}
              scale={1.03}
              transitionSpeed={800}
            >
              <div
                className="relative bg-[#0f172a] border border-purple-700 rounded-2xl p-6 
                shadow-[0_0_25px_rgba(130,69,236,0.3)] 
                hover:shadow-[0_0_40px_#8245ec] transition duration-300"
              >
                {/* Category Title */}
                <h3 className="text-xl sm:text-2xl font-semibold text-purple-400 mb-6 text-center">
                  {category.title}
                </h3>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center gap-2 justify-center bg-[#1e1b2e] border border-gray-700 
                      rounded-full py-2 px-3 text-center transition-all duration-300 
                      hover:scale-105 hover:border-purple-500 hover:shadow-[0_0_10px_#8245ec]"
                    >
                      <img
                        src={skill.logo}
                        alt={skill.name}
                        className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 hover:scale-110"
                      />
                      <span className="text-xs sm:text-sm text-gray-300">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Tilt>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;