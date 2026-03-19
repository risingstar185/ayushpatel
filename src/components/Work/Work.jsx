import React, { useState } from "react";
import { projects } from "../../constants";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="work"
      className="py-24 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        

        <h2 className="text-3xl md:text-5xl font-bold text-white mt-2">
          My <span className="text-[#8245ec]">Work</span>
        </h2>

        <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto">
          A showcase of my projects, demonstrating my skills in full-stack
          development and machine learning.
        </p>
      </div>
{/* Projects Grid */}
<div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
  {projects.slice(0, 4).map((project) => (
    <div
      key={project.id}
      onClick={() => setSelectedProject(project)}
      className="group relative bg-[#0f172a] border border-purple-700 rounded-2xl overflow-hidden cursor-pointer 
      transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_#8245ec]"
    >
      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-xl font-bold text-white mb-2">
          {project.title}
        </h3>

        <p className="text-gray-400 text-sm line-clamp-3">
          {project.description}
        </p>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="text-xs bg-[#1e1b2e] text-purple-400 px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  ))}
</div>

      {/* Modal */}
      {selectedProject && (
        <div
          onClick={() => setSelectedProject(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-[#0f172a] border border-purple-700 rounded-2xl max-w-3xl w-full overflow-hidden shadow-[0_0_40px_#8245ec]"
          >
            {/* Close Button */}
            <div className="flex justify-end p-4">
              <button
                onClick={() => setSelectedProject(null)}
                className="text-white text-2xl hover:text-[#8245ec]"
              >
                ✕
              </button>
            </div>

            {/* Image */}
            <div className="px-6">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full max-h-[300px] object-contain rounded-xl"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                {selectedProject.title}
              </h3>

              <p className="text-gray-400 mb-6 text-sm md:text-base">
                {selectedProject.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-[#1e1b2e] text-purple-400 px-3 py-1 text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-4">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 text-center py-2 rounded-lg bg-gray-800 text-gray-300 hover:bg-gray-700 transition"
                >
                  View Code
                </a>

                <a
                  href={selectedProject.webapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 text-center py-2 rounded-lg bg-[#8245ec] text-white hover:bg-purple-700 transition"
                >
                  View Live
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;