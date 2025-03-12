import AboutImage from "../assets/AboutImage.png"; // Import the image
import { motion } from "framer-motion";
import Skills from './Skills'; // Import the Skills component

// Motion variants for the heading transition from top
const headingVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: 0 }
    }
};

// Motion variants for the image transition from left
const imageVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.7, delay: 0.5 }
    }
};

// Motion variants for the content transition from right
const contentVariants = {
    hidden: { x: 100, opacity: 0 }, // Start from the right side
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.7, delay: 1 }
    }
};

const AboutMe = () => {
    return (
        <div id="about" className="border-b border-neutral-900 pb-8 lg:mb-35">
            {/* Heading in the middle */}
            <div className="text-center">
                <motion.h2
                    variants={headingVariants}
                    initial="hidden"
                    animate="visible"
                    className="my-20 text-center text-5xl font-semibold text-white tracking-wide drop-shadow-[0_0_10px_rgba(255,255,255,0.6)]"
                >
                    About Me
                </motion.h2>
            </div>

            {/* Content and Image side by side */}
            <div className="flex flex-wrap justify-center lg:justify-start max-width: 800px;">
                {/* Left side - Image */}
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-center">
                        <motion.img
                            variants={imageVariants}
                            initial="hidden"
                            animate="visible"
                            src={AboutImage}
                            alt="aboutpic"
                            className="rounded-full"
                            style={{ maxHeight: '400px' }}
                        />
                    </div>
                </div>

                {/* Right side - Content */}
                <div className="w-full lg:w-1/2 pl-10 mt-7">
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.p
                            variants={contentVariants}
                            initial="hidden"
                            animate="visible"
                            className="my-2 max-w-xl py-6 font-light tracking-tight text-lg"
                        >
                            I am currently pursuing B.Tech in Electronics and Telecommunication Engineering from Vishwakarma Institute of Technology, Pune, with a strong passion for technology. I am focused on honing my skills in Java, C, Machine Learning, SQL databases, and have a keen eye for UI/UX design. My curiosity and passion for technology drive me to continuously explore new tools, frameworks, and methodologies.

                            As an active member of the Web Development Team at IEEE VIT Pune, I’ve gained hands-on experience in developing web applications, collaborating with cross-functional teams, and solving complex technical problems. This role has greatly enhanced my technical skills and allowed me to improve my teamwork and communication abilities.  
                        </motion.p>
                    </div>
                </div>
            </div>

            {/* Skills Section below AboutMe */}
            <Skills />
        </div>
    );
};

export default AboutMe;