// src/components/ProjectModal.jsx
import React from 'react';
import { motion } from 'framer-motion';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null; // Return null if no project is selected

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-2 text-black bg-black bg-opacity-75 md:px-0 ">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="relative w-full max-w-4xl overflow-hidden bg-white rounded-lg shadow-lg"
      >
        <button
          onClick={onClose}
          className="absolute flex items-center justify-center text-2xl text-white rounded-full right-4"
        >
          &times;
        </button>
        <img
          src={`/images/${project.image}`} // Ensure your images are in the public/images folder
          alt={project.title}
          className="object-cover w-full h-72"
        />
        <div className="p-6">
          <h3 className="mb-4 text-3xl font-semibold">{project.title}</h3>
          <p className="mb-4 text-gray-700">{project.description}</p>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            View Project
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectModal;
