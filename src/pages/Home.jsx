import { useEffect, useState } from "react";
import FaultyTerminal from "../components/FaultyTerminal"; /* Adjust path if needed */
import ProjectBox from "../components/ProjectBox";
import "./Home.css";

const GRID_MULTIPLIER = [2, 1];

export default function Home() {
  const [hideTitle, setHideTitle] = useState(false); //[cite: 4]

  useEffect(() => {
    const handleScroll = () => {
      setHideTitle(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); //[cite: 4]

  const handleHomeClick = (e) => {
    e.preventDefault(); 
    window.scrollTo({
      top: 0,
      behavior: "smooth" 
    });
  }; //[cite: 4]

  // Mock data for the 9 projects to fill the 3x3 grid
  const projects = [
    { id: 1, title: "Neural Models", description: "Simple creation of feed-forward and recurrent neural models in TensorFlow.", color: "#ffd700", image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=600&q=80" },
    { id: 2, title: "NN Trainer Library", description: "A library intended to automate supervised training of neural models.", color: "#ffd700", image: "https://images.unsplash.com/photo-1518932945647-7a3c96922214?auto=format&fit=crop&w=600&q=80" },
    { id: 3, title: "NN Experiments", description: "A collection of various neural network models in TensorFlow.", color: "#4ade80", image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=600&q=80" },
    { id: 4, title: "Collage Generator", description: "Intelligently draws a message with images.", color: "#60a5fa", image: "https://images.unsplash.com/photo-1456428199391-a3b1cb5e93aa?auto=format&fit=crop&w=600&q=80" },
    { id: 5, title: "OpenGL Game Engine", description: "A custom game engine including dynamic lighting, terrain, and static objects.", color: "#4ade80", image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=600&q=80" },
    { id: 6, title: "Ray Casting Simulation", description: "A simulation using AI techniques such as ray casting, spatial mapping, and pathfinding.", color: "#ffd700", image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80" },
    { id: 7, title: "Seam Carver", description: "An application for content-aware image resizing.", color: "#f87171", image: "https://images.unsplash.com/photo-1620121692029-d088224ddc74?auto=format&fit=crop&w=600&q=80" },
    { id: 8, title: "Object Tracker", description: "An object recognition and tracking tool.", color: "#ffd700", image: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&w=600&q=80" },
    { id: 9, title: "Audio Analyzer", description: "An audio analyzer and controller for an Arduino-driven LED strip.", color: "#60a5fa", image: "https://images.unsplash.com/photo-1516280440502-3c2242171120?auto=format&fit=crop&w=600&q=80" },
  ];

  return (
    <>
      <div style={{ width: "100%", height: "600px", position: "relative" }}>
        <FaultyTerminal
          scale={3}
          gridMul={GRID_MULTIPLIER}
          digitSize={1.2}
          timeScale={0.5}
          pause={false}
          scanlineIntensity={0.5}
          glitchAmount={1}
          flickerAmount={1.5}
          noiseAmp={1}
          chromaticAberration={0}
          dither={0}
          curvature={0.15}
          tint="#A7EF9E"
          mouseReact
          mouseStrength={0.5}
          pageLoadAnimation
          brightness={0.6}
        /> {/*[cite: 4] */}

        <a 
          href="/" 
          onClick={handleHomeClick}
          className={`heroName ${hideTitle ? "hide" : ""}`}
        >
          HOME
        </a> {/*[cite: 4] */}
      </div>

      {/* 3x3 Projects Section */}
      <section className="home-projects-section">
        <h2>Personal Proects</h2>
        <div className="projects-3x3-grid">
          {projects.map((project) => (
            <ProjectBox 
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              titleColor={project.color}
            />
          ))}
        </div>
      </section>
    </>
  );
}