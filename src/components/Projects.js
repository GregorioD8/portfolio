import React from "react";
import { motion } from "framer-motion";

const Projects = () => {
  const videoPlaceholder = "/videos/DelMarket.mp4"; // Placeholder video

  return (
    <section id="projects" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <motion.h2
          className="text-4xl md:text-6xl font-extrabold text-gray-900 text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          My Projects
        </motion.h2>

        {/* Project 1 */}
        <div className="video-section">
          <motion.h3
            className="text-2xl md:text-3xl font-bold text-gray-800 mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            DelMarket Project
          </motion.h3>
          <motion.p
            className="text-lg text-gray-700 mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            A marketplace project demonstrating advanced features.
          </motion.p>
          <motion.video
            className="w-full"
            controls
            src={videoPlaceholder}
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
          />
        </div>

        {/* Project 2 */}
        <div className="video-section">
          <motion.h3
            className="text-2xl md:text-3xl font-bold text-gray-800 mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Project Two
          </motion.h3>
          <motion.p
            className="text-lg text-gray-700 mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Another cool project.
          </motion.p>
          <motion.video
            className="w-full"
            controls
            src={videoPlaceholder}
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
