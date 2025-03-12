import React from 'react';
import { motion } from 'framer-motion';

const headingVariants = {
  hidden: { y: -100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const projectVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut", delay: 0.5 }
  }
};

const Project = () => {
  const projects = [
    {
      id: 1,
      title: "Inventory and Billing System",
      description: "A web-based system for managing inventory and generating bills efficiently.",
    },
    {
      id: 2,
      title: "Facial Recognition",
      description: "An AI-powered facial recognition system for security and authentication.",
    },
    {
      id: 3,
      title: "Car Rental System",
      description: "An OOP and DBMS project for managing car rentals with ease.",
    },
    {
      id: 4,
      title: "Hospital Management System",
      description: "A comprehensive system to manage hospital operations and patient records.",
    },
    {
      id: 5,
      title: "Movie and Book Recommendation System",
      description: "A recommendation engine that suggests movies and books based on user preferences.",
    }
  ];

  return (
    <div id="projects" className="border-b border-neutral-800 pb-24 py-25 mb-11 text-center">
      <motion.h2
        className="my-20 text-center text-5xl font-semibold text-white tracking-wide drop-shadow-[0_0_10px_rgba(255,255,255,0.6)]"
        initial="hidden"
        animate="visible"
        variants={headingVariants}
      >
        Projects
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6 relative justify-center">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="relative group overflow-hidden w-80 h-72 mx-auto rounded-2xl border border-neutral-800 text-gray-50 flex flex-col justify-center items-center p-6 transition-transform duration-300 transform hover:scale-105 hover:shadow-glow"
            variants={projectVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="relative flex flex-col justify-center items-center text-center">
              <span className="text-xl font-bold bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                {project.title}
              </span>
              <p className="text-sm mt-2">{project.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Project;
