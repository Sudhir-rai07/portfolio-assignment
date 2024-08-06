import React from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "MongoDB", image: "mongodb.png" },
  { name: "Express.js", image: "express.png" },
  { name: "React", image: "react.png" },
  { name: "Node.js", image: "nodejs.png" },
];

const additionalSkills = [
  { name: "Tailwindcss", image: "tailwindcss.webp" },
  { name: "React Query", image: "tanstack.png" },
  { name: "Git", image: "git.png" },
  { name: "GitHub", image: "github" },
  { name: "Redux", image: "redux.webp" },
];

const AboutMe = () => {
  return (
    <section id="about" className="py-20 dark:bg-gray-900">
      <div className="container px-4 mx-auto">
        <div className="mb-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-4 text-4xl font-bold dark:text-gray-100"
          >
            About Me
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-lg text-gray-700 dark:text-gray-300"
          >
            Hello! I’m a MERN Stack Developer with a passion for creating
            interactive and dynamic web applications. With experience in
            MongoDB, Express.js, React, and Node.js, I specialize in building
            full-stack applications that provide seamless user experiences. I
            enjoy solving complex problems and continuously learning new
            technologies to enhance my skills.
          </motion.p>
        </div>
        <div className="mb-12">
          <h3 className="mb-4 text-2xl font-semibold text-center dark:text-gray-100">
            Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {skills.map((skill, index) => (
              <div className="group" key={index}>
                <span className="invisible text-white transition-all duration-100 group-hover:visible">
                  {skill.name}
                </span>

                <motion.div
                  className="flex items-center justify-center w-24 h-24 bg-gray-100 rounded-lg shadow-lg group dark:bg-gray-800"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={`/images/skills/${skill.image}`}
                    alt={`${skill.name} logo`}
                    className="object-contain w-16 h-16"
                  />
                </motion.div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="mb-4 text-2xl font-semibold text-center dark:text-gray-100">
            Additional Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {additionalSkills.map((skill, index) => (
              <div className="group" key={index}>
                <span className="invisible text-white transition-all duration-100 group-hover:visible">
                  {skill.name}
                </span>
                <motion.div
                  className="flex items-center justify-center w-24 h-24 bg-gray-100 rounded-lg shadow-lg dark:bg-gray-800"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={`/images/skills/${skill.image}`}
                    alt={`${skill.name} logo`}
                    className="object-contain w-16 h-16"
                  />
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
