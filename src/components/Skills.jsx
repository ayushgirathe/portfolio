import { TbBrandJavascript } from "react-icons/tb";
import { GrMysql } from "react-icons/gr";
import { FaJava } from "react-icons/fa6";
import { BsRobot } from "react-icons/bs";
import { motion } from "framer-motion";

const skills = [
  { icon: <TbBrandJavascript className="text-5xl" />, label: "JavaScript", color: "text-cyan-400", duration: 3 },
  { icon: <GrMysql className="text-5xl" />, label: "SQL", color: "text-orange-500", duration: 3 },
  { icon: <FaJava className="text-5xl" />, label: "Java", color: "text-red-500", duration: 3 },
  { icon: <BsRobot className="text-5xl" />, label: "Machine Learning", color: "text-green-500", duration: 3 },
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
    transition: { duration: 1, ease: "easeInOut" }
  }
};

const Skills = () => {
  return (
    <div className=" pb-24">
      <motion.h2
  className="my-20 text-center text-4xl font-semibold text-white tracking-wide drop-shadow-[0_0_10px_rgba(255,255,255,0.6)]"
  initial="hidden"
  animate="visible"
  variants={headingVariants}
>
  Skills
</motion.h2>


      <div className="flex flex-wrap items-center justify-center gap-4">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            variants={boxVariants(index % 2 === 0 ? 10 : -10)}
            initial="initial"
            animate="animate"
            className="flex flex-col items-center justify-center w-36 h-36 rounded-2xl border-4 border-neutral-800 p-4 text-center"
          >
            <div className={`mb-2 ${skill.color}`}>{skill.icon}</div>
            <span className="text-lg font-medium">{skill.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;