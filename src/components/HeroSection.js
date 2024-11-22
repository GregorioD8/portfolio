import React from "react";
import Particles from "react-tsparticles";

const HeroSection = () => {
  const particlesOptions = {
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "repulse", // Push particles away on hover
        },
        onClick: {
          enable: true,
          mode: "push", // Add particles on click
        },
      },
      modes: {
        repulse: { distance: 100 },
        push: { quantity: 4 },
      },
    },
    particles: {
      color: { value: "#ffffff" },
      links: {
        color: "#ffffff",
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      move: {
        enable: true,
        speed: 1.5,
        outModes: { default: "bounce" },
      },
      number: {
        density: { enable: true, area: 800 },
        value: 80,
      },
      opacity: { value: 0.5 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 5 } },
    },
    detectRetina: true,
  };

  return (
    <section className="relative h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Particle Background */}
      <Particles id="tsparticles" options={particlesOptions} className="absolute inset-0" />

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
        <h1 className="text-6xl md:text-7xl font-extrabold text-white mb-6">
          Creating Stunning Experiences
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl">
          Merging technology and creativity to build impactful solutions that
          inspire.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;