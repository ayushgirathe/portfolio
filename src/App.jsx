import Navbar from "./components/Navbar";
import Title from "./components/Title";
import Projects from "./components/Project";
import ContactMe from "./components/Contact";
import AboutMe from "./components/AboutMe";
import './index.css';

const App = () => {
  return (
    <div className="relative overflow-x-hidden text-neutral-300 antialiased selection:text-cyan-900">
      {/* Full-screen background with radial gradient */}
      <div className="absolute inset-0 -z-10 bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      
      {/* Main content */}
      <div className="relative container mx-auto -px-8">
        <Navbar />
        <Title />
        <AboutMe />
        <Projects />
        <ContactMe />
      </div>
    </div>
  )
}

export default App;