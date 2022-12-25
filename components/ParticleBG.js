import Particles from "react-tsparticles";
import { useCallback, useMemo } from "react";
import { loadStarsPreset } from "tsparticles-preset-stars";

const Stars = () => {
    const particlesInit = useCallback(async (engine) => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadStarsPreset(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        await console.log(container);
    }, []);

    const options = {
        background: {
            color: "#000", // this sets a background color for the canvas
        },
        fullScreen: {
            enable: true, // enabling this will make the canvas fill the entire screen, it's enabled by default
            zIndex: -1, // this is the z-index value used when the fullScreen is enabled, it's 0 by default
        },
        fpsLimit: 120,
        particles: {
            color: {value: "#ffffff"},
            move: {
                direction: "none",
                enable: true,
                outModes: "out",
                random: false,
                speed: 0.5,
                straight: false
            },
            number: {density: {enable: true, area: 800}, value: 80},
            opacity: {
                value: 0.5
            },
            shape: {
                type: "circle"
            },
            size: {
                value: {min: 1, max: 5}
            }
        },
    };
    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={options}
        />
    );
};

export default Stars;

