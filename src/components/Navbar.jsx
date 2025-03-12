import logo from "../assets/AG.png";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

const Nav = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      {/* Logo Section */}
      <div className="flex flex-shrink-0 items-center">
        <img src={logo} alt="logo" className="w-24 h-24" />
      </div>

      {/* Middle Buttons Section */}
      <div className="flex items-center gap-8">
        <a 
          href="#about" 
          className="relative text-neutral-300 hover:bg-gradient-to-r hover:from-pink-400 hover:via-purple-500 hover:to-indigo-500 hover:bg-clip-text hover:text-fill-color-transparent transition-colors duration-300"
        >
          <span className="relative after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300">
            About Me
          </span>
        </a>
        <a 
          href="#projects" 
          className="relative text-neutral-300 hover:bg-gradient-to-r hover:from-pink-400 hover:via-purple-500 hover:to-indigo-500 hover:bg-clip-text hover:text-fill-color-transparent transition-colors duration-300"
        >
          <span className="relative after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300">
            Projects
          </span>
        </a>
        <a 
          href="#contact" 
          className="relative text-neutral-300 hover:bg-gradient-to-r hover:from-pink-400 hover:via-purple-500 hover:to-indigo-500 hover:bg-clip-text hover:text-fill-color-transparent transition-colors duration-300"
        >
          <span className="relative after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300">
            Contact Me
          </span>
        </a>
      </div>

      {/* Social Media Icons Section */}
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a 
          href="https://www.linkedin.com/in/ayush-girathe-19a637289/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-neutral-300 hover:text-blue-500 transition-colors duration-300"
        >
          <FaLinkedin />
        </a>
        <a 
          href="https://github.com/ayushgirathe" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-neutral-300 hover:text-gray-500 transition-colors duration-300"
        >
          <FaGithub />
        </a>
        
        <a 
          href="https://www.instagram.com/_.ayushhh/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-neutral-300 hover:text-pink-500 transition-colors duration-300"
        >
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Nav;