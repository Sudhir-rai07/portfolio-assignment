// src/components/Footer.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="py-8 text-gray-400 bg-gray-900">
      <div className="container px-4 mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="mb-6">
            <a
              href="#"
              className="text-2xl font-bold text-white hover:text-blue-500"
            >
              Sudhir Rai
            </a>
          </div>

          <div className="flex justify-center mb-8 space-x-6">
            <motion.a
              href="https://github.com/Sudhir-rai07"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="text-gray-400 hover:text-white"
            >
              <FaGithub size={24} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/sudhir-rai-78360b256/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="text-gray-400 hover:text-white"
            >
              <FaLinkedin size={24} />
            </motion.a>
            <motion.a
              href="https://x.com/sudhirrai0"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="text-gray-400 hover:text-white"
            >
              <FaTwitter size={24} />
            </motion.a>
            <motion.a
              href="mailto:sudhirrai7856@gmail.com"
              whileHover={{ scale: 1.1 }}
              className="text-gray-400 hover:text-white"
            >
              <FaEnvelope size={24} />
            </motion.a>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-sm"
          >
            &copy; {new Date().getFullYear()} Sudhir Rai. All rights reserved.
          </motion.p>

          <motion.a
            href="#"
            whileHover={{ scale: 1.1 }}
            className="inline-block mt-4 text-sm text-blue-500 hover:text-blue-400"
          >
            Back to Top
          </motion.a>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
