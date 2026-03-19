import React from "react";
import ReactTypingEffect from "react-typing-effect";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import profileImage from "../../assets/image.png";

const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-10 md:mt-5 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">

        {/* LEFT SECTION */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 text-center md:text-left mt-8 md:mt-0"
        >

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2"
          >
            Hi, I am
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4"
          >
            Ayush Patel
          </motion.h2>

          {/* Typing Effect */}
          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec]"
          >
            <span className="text-white">I am a </span>
            <ReactTypingEffect
              text={[
                "Full Stack Developer",
                "Python Developer",
                "MERN Stack Developer",
                "Machine Learning Enthusiast",
              ]}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className="text-[#8245ec]">{cursor}</span>
              )}
            />
          </motion.h3>

          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-base sm:text-lg text-gray-400 mb-10 mt-8 leading-relaxed"
          >
            I am a passionate Fullstack Developer skilled in the MERN stack,
            creating responsive and user-friendly web applications. I am also
            exploring Machine Learning and aim to build intelligent, efficient,
            and impactful digital solutions.
          </motion.p>

          {/* Button */}
          <motion.a
            href="https://drive.google.com/file/d/1kJNfli6EO1ZUpOH5SlsmyvEJW8Tmk836/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1 }}
            whileHover={{ scale: 1.1 }}
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold"
            style={{
              background: "linear-gradient(90deg, #8245ec, #a855f7)",
              boxShadow: "0 0 20px #8245ec",
            }}
          >
           Get My Resume
          </motion.a>
        </motion.div>

        {/* RIGHT SECTION */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 flex justify-center md:justify-end"
        >
          <Tilt
            className="w-60 h-60 sm:w-72 sm:h-72 md:w-[28rem] md:h-[28rem] border-4 border-purple-700 rounded-full"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Ayush"
              className="w-full h-full rounded-full object-contain drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </Tilt>
        </motion.div>

      </div>
    </section>
  );
};

export default About;