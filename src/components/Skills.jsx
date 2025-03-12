import { TbBrandJavascript } from "react-icons/tb";
import { GrMysql } from "react-icons/gr";
import { FaJava } from "react-icons/fa6";
import { BsRobot } from "react-icons/bs";
import { GiBrain, GiTalk, GiTeamUpgrade, GiClockwork } from "react-icons/gi";
import { motion } from "framer-motion";
import { SiC } from "react-icons/si";


// Technical Skills
const technicalSkills = [
  { icon: <TbBrandJavascript className="text-5xl" />, label: "JavaScript", color: "text-cyan-400" },
  { icon: <GrMysql className="text-5xl" />, label: "SQL", color: "text-orange-500" },
  { icon: <FaJava className="text-5xl" />, label: "Java", color: "text-red-500" },
  { icon: <BsRobot className="text-5xl" />, label: "Machine Learning", color: "text-green-500" },
  { icon: <SiC className="text-5xl" />, label: "C", color: "text-blue-500" }, // Corrected C logo
];

// Soft Skills
const softSkills = [
  { icon: <GiBrain className="text-5xl" />, label: "Critical Thinking", color: "text-blue-400" },
  { icon: <GiTalk className="text-5xl" />, label: "Communication", color: "text-purple-400" },
  { icon: <GiTeamUpgrade className="text-5xl" />, label: "Teamwork", color: "text-pink-500" },
  { icon: <GiClockwork className="text-5xl" />, label: "Adaptability", color: "text-indigo-500" },
  { icon: <BsRobot className="text-5xl" />, label: "Hardworking", color: "text-yellow-400" },
];

const boxVariants = (offset) => ({
  initial: { y: 0 },
  animate: {
    y: [offset, -offset],
    transition: {
      duration: 3,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const headingVariants = {
  hidden: { y: -100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 1, ease: "easeInOut" },
  },
};

const Skills = () => {
  return (
    <div className="pb-24">
      {/* Section Title */}
      <motion.h2
        className="my-20 text-center text-4xl font-semibold text-white tracking-wide drop-shadow-[0_0_10px_rgba(255,255,255,0.6)]"
        initial="hidden"
        animate="visible"
        variants={headingVariants}
      >
        Skills
      </motion.h2>

      {/* Technical Skills */}
      <div className="mb-16">
        <h3 className="text-center text-3xl font-medium text-gray-300 mb-6">Technical Skills</h3>
        <div className="flex flex-wrap items-center justify-center gap-6">
          {technicalSkills.map((skill, index) => (
            <motion.div
              key={index}
              variants={boxVariants(index % 2 === 0 ? 10 : -10)}
              initial="initial"
              animate="animate"
              className="flex flex-col items-center justify-center w-36 h-36 rounded-2xl border-4 border-neutral-800 p-4 text-center bg-transparent shadow-lg"
            >
              <div className={`mb-2 ${skill.color}`}>{skill.icon}</div>
              <span className="text-lg font-medium text-white">{skill.label}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Soft Skills */}
      <div>
        <h3 className="text-center text-3xl font-medium text-gray-300 mb-6">Soft Skills</h3>
        <div className="flex flex-wrap items-center justify-center gap-6">
          {softSkills.map((skill, index) => (
            <motion.div
              key={index}
              variants={boxVariants(index % 2 === 0 ? 10 : -10)}
              initial="initial"
              animate="animate"
              className="flex flex-col items-center justify-center w-36 h-36 rounded-2xl border-4 border-neutral-800 p-4 text-center bg-transparent shadow-lg"
            >
              <div className={`mb-2 ${skill.color}`}>{skill.icon}</div>
              <span className="text-lg font-medium text-white">{skill.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
