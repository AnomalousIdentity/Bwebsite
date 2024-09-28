import Particles from "react-tsparticles";
import {useMemo} from "react";
import { useCallback } from "react";
import { loadFirePreset } from "tsparticles-preset-fire";
import { loadLinksPreset } from "tsparticles-preset-links";

const Stars = () => {
    const particlesInit = useCallback(async (engine) => {
      console.log(engine);
      await loadLinksPreset(engine);
    }, []);
  
    const particlesLoaded = useCallback(async (container) => {
      await console.log(container);
    }, []);
  
    const options = {
      preset: "links",
      size: {
        value: { min: 0.05, max: 0.15 }
      }
    };
    return (
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={options}
      />
    );
}

export default Stars;