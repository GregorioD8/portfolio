import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import Card from "./Card";

const cards = [
  {
    title: "Introduction",
    content: "I’m a Full Stack Engineer bridging technology and human experiences to build impactful solutions.",
    color: "#1E3A8A",
  },
  {
    title: "Projects",
    content: "Explore my innovative projects like the Etherheal Coach Management System and AR/VR prototypes.",
    color: "#9333EA",
  },
  {
    title: "Skills",
    content: "JavaScript, Python, React, Flask, AWS, PyTorch, and more.",
    color: "#059669",
  },
  {
    title: "Experience",
    content: "Developed scalable systems and innovative solutions for mental health and wellness.",
    color: "#DC2626",
  },
  {
    title: "Education",
    content: "Flatiron School Graduate | CompTIA A+ Certified | Ongoing Learning.",
    color: "#D97706",
  },
];

const Portfolio3D = () => {
  return (
    <div className="portfolio-3d-container w-full h-screen bg-gray-900">
      <Canvas shadows camera={{ position: [0, 5, 12], fov: 50 }}>
        {/* Environment lighting */}
        <Environment preset="city" />

        {/* Lighting */}
        <ambientLight intensity={0.4} />
        <directionalLight
          position={[10, 10, 10]}
          intensity={1.2}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />

        {/* Cards */}
        {cards.map((card, index) => {
          const radius = 6; // Distance from the center
          const angle = (index / cards.length) * Math.PI * 2; // Angle for each card
          const x = Math.sin(angle) * radius;
          const z = Math.cos(angle) * radius;

          return (
            <Card
              key={index}
              title={card.title}
              content={card.content}
              color={card.color}
              position={[x, 0, z]} // Circular placement
              rotation={[0, -angle, 0]} // Rotate to face the center
            />
          );
        })}

        {/* Controls */}
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
};

export default Portfolio3D;