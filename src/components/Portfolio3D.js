import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import Card from "./Card";
import ProjectModal from "./ProjectModal";
import usePortfolio from "../hooks/usePortfolio";

const Portfolio3D = () => {
  const { projects } = usePortfolio();
  const [selectedProject, setSelectedProject] = useState(null);

  const handleCardClick = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="portfolio-3d-container w-full h-screen bg-gray-900 relative">
      {/* 3D Canvas */}
      <Canvas shadows camera={{ position: [0, 5, 12], fov: 50 }}>
        <Environment preset="city" />
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 10]} intensity={1.2} castShadow />
        {/* 3D Cards */}
        {projects.map((project, index) => {
          const radius = 6;
          const angle = (index / projects.length) * Math.PI * 2;
          const x = Math.sin(angle) * radius;
          const z = Math.cos(angle) * radius;

          return (
            <Card
              key={project.id}
              color={`hsl(${(index * 360) / projects.length}, 70%, 50%)`}
              position={[x, 0, z]}
              frontText={project.name}
              backText="Click to learn more"
              onCardClick={() => handleCardClick(project)}
            />
          );
        })}
        <OrbitControls enableZoom={false} />
      </Canvas>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default Portfolio3D;