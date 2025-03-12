import MyImage from "../assets/MyImage.png";
import {motion} from "framer-motion";

const container = (delay) => ({
    hidden:{x:-100, opacity:0},
    visible:{
        x: 0,
        opacity: 1,
        transition:{duration: 0.5, delay:delay}
    }
})

const Title = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap justify-center lg:justify-start max-width: 800px;">
        <div className="w-full lg:w-1/2 pl-10">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1 variants= {container(0)}
            initial="hidden"
            animate="visible"  className="my-20 text-center text-5xl font-semibold text-white tracking-wide drop-shadow-[0_0_10px_rgba(255,255,255,0.6)] ml-11">
              Ayush Girathe
            </motion.h1>
            <motion.span 
            variants= {container(0.5)}
            initial="hidden"
            animate="visible"
            className="bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 bg-clip-text text-transparent text-2xl ml-11">
              I am a Food connoisseur and binge-watch sitcoms
            </motion.span>
            <motion.p variants= {container(1)}
            initial="hidden"
            animate="visible"
             className="my-2 max-w-xl py-6 font-light tracking-tight ml-11">
              I am a student at Vishwakarma Institute of Technology, Pune, pursuing a BTech in Electronics and Telecommunications. I am a dedicated learner exploring various facets of computer languages. I have developed proficiency in JavaScript, C, Java, and SQL. My goal is to leverage these skills to make meaningful contributions to the field of technology.
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img initial={{x:100, opacity:0}}
            animate={{x:0,opacity:1}}
            transition={{duration: 1, delay:1.2}} 
            src={MyImage} alt="profilepic" 
            className="rounded-full" // This makes the image round
            style={{ maxHeight: '400px' }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Title;