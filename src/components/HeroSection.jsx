// src/components/HeroSection.jsx
import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="relative h-screen bg-fixed bg-center bg-cover" style={{ backgroundImage: `url('/background.jpg')` }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex items-center justify-center h-full">
        <motion.div 
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
          className="p-4 text-center text-white"
        >
          <h1 className="mb-4 text-5xl font-bold">
            Welcome to My Portfolio
          </h1>
          <p className="mb-6 text-lg">
            I’m a MERN Stack Developer with a passion for building dynamic web applications using MongoDB, Express.js, React, and Node.js.
          </p>
          <p className="mb-6 text-lg font-bold tracking-wide">
            Nature  || Music || Code
          </p>
          <a href="#about" className="px-4 py-2 font-semibold text-white transition duration-300 bg-teal-500 rounded hover:bg-teal-600">See More</a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
