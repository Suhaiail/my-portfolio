import { useEffect, useState } from "react";
import FaultyTerminal from "./components/FaultyTerminal";
import "./App.css";

// 1. Move this static array outside the component so its reference never changes
const GRID_MULTIPLIER = [2, 1];

function App() {
  const [hideTitle, setHideTitle] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHideTitle(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        style={{
          width: "100%",
          height: "600px",
          position: "relative",
        }}
      >
        <FaultyTerminal
          scale={3}
          gridMul={GRID_MULTIPLIER} // 2. Pass the stable reference here
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
        />

        <h1 className={`heroName ${hideTitle ? "hide" : ""}`}>
          MOHAMMED
          <br />
          SUHAIL
        </h1>
      </div>

      {/* Actual site content */}
      <div style={{ height: "2000px" }} />
    </>
  );
}

export default App;