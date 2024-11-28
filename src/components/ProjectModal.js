///src/components/ProjectModal.js
import React from "react";

const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!isOpen || !project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex justify-center items-center backdrop-blur-sm bg-black bg-opacity-80"
      style={{ pointerEvents: "all" }}
    >
      {/* Modal Content */}
      <div className="relative w-full h-full flex flex-col justify-center items-center">
        {/* Background Video */}
        <div className="video-container relative w-full h-full">
          <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover">
            <source src={project.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Gradient Overlay */}
          <div className="gradient-overlay absolute inset-0 bg-gradient-to-b from-transparent via-black to-black opacity-80"></div>
          {/* Floating Text */}
          <div className="floating-text absolute bottom-16 left-16">
            <h2 className="text-5xl font-bold text-white mb-2 leading-tight drop-shadow-lg">
              {project.name}
            </h2>
            <p className="text-lg text-white leading-relaxed opacity-90">
              {project.description}
            </p>
          </div>
        </div>
        {/* Close Button */}
        <button
          className="absolute top-6 right-6 text-white text-2xl bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70 transition"
          onClick={onClose}
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default ProjectModal;