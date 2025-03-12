import React from 'react';
import { motion } from 'framer-motion'; // Import motion from framer-motion
import TinDog from '../assets/TinDog.png';
import SimonGame from '../assets/SimonGame.png';
import DrumKit from '../assets/DrumKit.png';

// Define motion variants
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
      title: "TinDog",
      link: "https://ayushgirathe.github.io/TinDog/",
      image: TinDog,
      description: "A Tinder-inspired web app for dog lovers, built using HTML, CSS, and Bootstrap.",
    },
    {
      id: 2,
      title: "Simon Game",
      link: "https://ayushgirathe.github.io/SimonGame/",
      image: SimonGame,
      description: "A memory-based game inspired by the Simon toy, created using HTML, CSS, and JavaScript.",
    },
    {
      id: 3,
      title: "Drum Kit",
      link: "https://ayushgirathe.github.io/drumKit/",
      image: DrumKit,
      description: "An interactive drum kit that allows users to play drum sounds using keyboard keys or mouse clicks.",
    }
  ];

  return (
    <div id="projects" className="border-b border-neutral-800 pb-24 py-25 mb-11">
      {/* Styled Project Heading with Subtle Glow and Transition */}
      <motion.h2
        className="my-20 text-center text-5xl font-semibold text-white tracking-wide drop-shadow-[0_0_10px_rgba(255,255,255,0.6)]"
        initial="hidden"
        animate="visible"
        variants={headingVariants}
      >
        Projects
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6 relative">
        {projects.map((project) => (
          <motion.a
            key={project.id}
            href={project.link}
            className="relative group overflow-hidden w-80 h-72 mx-auto rounded-2xl bg-zinc-900 text-gray-50 flex flex-col justify-between p-6 transition-transform duration-300 transform hover:scale-105 hover:shadow-glow"
            variants={projectVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Project Image - displayed at the top */}
            <div
              className="w-full h-32 bg-cover bg-center rounded-lg mb-4"
              style={{ backgroundImage: `url(${project.image})` }}
            ></div>

            {/* Card Content (Title and Description) */}
            <div className="relative flex flex-col justify-between">
              {/* Project Title */}
              <span className="text-xl font-bold bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                {project.title}
              </span>

              {/* Project Description */}
              <p className="text-sm mt-2">{project.description}</p>
            </div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/30 rounded-2xl opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>

            {/* Glowing Shadow on Hover */}
            <div className="absolute inset-0 rounded-2xl z-10 group-hover:shadow-glow transition-all duration-500"></div>
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default Project;