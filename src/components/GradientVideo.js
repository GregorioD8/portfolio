import React from "react";

const GradientVideo = ({ videoSrc, text }) => {
  return (
    <div className="video-container">
      {/* Background Video */}
      <video autoPlay loop muted>
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Gradient Overlay */}
      <div className="gradient-overlay"></div>

      {/* Floating Text */}
      <div className="floating-text">{text}</div>
    </div>
  );
};

export default GradientVideo;