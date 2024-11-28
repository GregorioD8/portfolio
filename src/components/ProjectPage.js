import React, { useState } from "react";

const ProjectPage = ({ project }) => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center">
      <header className="py-6 text-3xl font-bold">{project.name}</header>

      {/* Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex justify-center items-center">
          <div className="relative">
            <button
              className="absolute top-4 right-4 text-white text-2xl"
              onClick={() => setShowVideo(false)}
            >
              ✕
            </button>
            <video
              src={project.video}
              controls
              autoPlay
              className="w-full max-w-4xl rounded-lg"
            />
          </div>
        </div>
      )}

      <section className="px-6 text-center max-w-3xl">
        <p className="mb-4">{project.description}</p>
        <button
          className="btn bg-blue-500 text-white px-6 py-2 rounded"
          onClick={() => setShowVideo(true)}
        >
          Watch Demo
        </button>
        <div className="flex justify-center mt-6 space-x-4">
          <a
            href={project.github}
            className="btn bg-gray-700 px-6 py-2 rounded"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href={project.demo}
            className="btn bg-blue-600 px-6 py-2 rounded"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Demo
          </a>
        </div>
      </section>
    </div>
  );
};

export default ProjectPage;
