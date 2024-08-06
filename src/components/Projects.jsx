// src/components/Projects.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectModal from './ProjectModal';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // Sample project data
  const projects = [
    {
      title: "Social media app",
      description: "Connect-plus is a social media web app that I've made using MERN stack. It's fully responsive for all screens and also security is good to. Users can create account, Validate their account with a account validation email, Reset their password. In the application they can do stuffs like : Like a post, Comment, share, delete their posts, Update profile, Profile pic, Cover pic. And alos one-to-one chat with realtime",
      image: "project1-1.jpg",
      link: "https://x-clone-xast.onrender.com/"
    },
    {
      title: "Admin Dashboard",
      description: "This is frontend part of Admin Dashboard project, Fully responsive for all screens. Srctions like Dashbaord, Product, Customers And Transactions. All these are dummy data. Added two types of charts : Bar chart and Line chart for top selling products and annual revenue, active users.",
      image: "project2-1.jpg",
      link: "https://admin-dashboard-neon-two.vercel.app/"
    },
    {
      title: "School Website",
      description: "A school website: This was part of an assessment for a role of Reactjs Frontend developer. I have created this website withing 8 hours straight. This app includes multiple pages and a proper navigation to visit them. Like Home, Faculty, Student Life, Admission Form,  Gallery and a Contact page. This app is fully responsive for all screens. I have used framer-moiton for smooth scrolling and componant renderning.",
      image: "project3-1.jpg",
      link: "https://school-website-rose-beta.vercel.app/"
    },
    {
      title: "Portfolio Website",
      description: "This is a portfolio website i created earlier to showcase my skills.",
      image: "project4-1.jpg",
      link: "https://portfolio-xi-one-84.vercel.app/"
    },
    // Add more projects as needed
  ];

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="portfolio" className="relative py-20">
      <div className="container relative px-4 mx-auto">
        <div className="mb-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-4 text-4xl font-bold dark:text-gray-300"
          >
            My Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-lg text-gray-200 dark:text-gray-700"
          >
            Here are some of the projects I’ve worked on. Click on each project to see more.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="overflow-hidden bg-gray-100 rounded-lg shadow-[0px_0px_9px_1px_#edf2f7] cursor-pointer"
              onClick={() => openModal(project)}
            >
              <img
                src={`/images/${project.image}`} // Ensure your images are in the public/images folder
                alt={project.title}
                className="object-cover w-full h-64"
              />
              <div className="flex flex-col p-6">
                <h3 className="mb-2 text-xl font-semibold text-black">{project.title}</h3>
                <p className="text-gray-600">{project.description.slice(0, 170)}... <span className='text-blue-400'>read more</span></p>
                <a href={project.link} className="mt-3 text-blue-600 hover:underline">View project</a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Render the modal if a project is selected */}
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={closeModal} />
      )}
    </section>
  );
};

export default Projects;
