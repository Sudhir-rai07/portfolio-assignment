// src/components/Contact.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="relative py-20 bg-gradient-to-br from-blue-500 to-purple-600 dark:from-gray-800 dark:to-gray-900">
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 2, ease: 'easeInOut' }}
          className="absolute top-0 left-0 w-40 h-40 bg-blue-300 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 2, ease: 'easeInOut', delay: 0.5 }}
          className="absolute top-0 right-0 w-40 h-40 bg-purple-300 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-2000"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 2, ease: 'easeInOut', delay: 1 }}
          className="absolute bottom-0 w-40 h-40 bg-pink-300 rounded-full left-20 mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-4000"
        />
      </div>
      <div className="container relative z-10 px-4 mx-auto">
        <div className="mb-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-4 text-5xl font-extrabold text-white"
          >
            Let’s Connect
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-lg text-white/80"
          >
            Reach out to me and let’s create something amazing together!
          </motion.p>
        </div>
        <div className="max-w-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="p-8 bg-white shadow-2xl rounded-2xl shadow-blue-500/50 dark:bg-gray-800 dark:shadow-gray-700/50"
          >
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block mb-2 font-semibold text-gray-700 dark:text-gray-300"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-4 border border-gray-300 rounded-xl bg-gray-50 focus:ring-4 focus:ring-blue-200 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 focus:outline-none focus:border-blue-500 dark:focus:ring-blue-700"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block mb-2 font-semibold text-gray-700 dark:text-gray-300"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-4 border border-gray-300 rounded-xl bg-gray-50 focus:ring-4 focus:ring-blue-200 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 focus:outline-none focus:border-blue-500 dark:focus:ring-blue-700"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block mb-2 font-semibold text-gray-700 dark:text-gray-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-4 border border-gray-300 rounded-xl bg-gray-50 focus:ring-4 focus:ring-blue-200 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 focus:outline-none focus:border-blue-500 dark:focus:ring-blue-700"
                  rows="6"
                  placeholder="Your Message"
                  required
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full px-6 py-4 font-bold text-white shadow-md bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl hover:bg-gradient-to-l focus:outline-none focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-700"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
