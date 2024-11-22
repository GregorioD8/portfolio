///src/context/PortfolioContext.js
import React, { createContext, useState } from "react";

export const PortfolioContext = createContext();

export const PortfolioProvider = ({ children }) => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: "DelMarket Project",
      description: "An investment firm. Buy/sell/research equity.",
      video: "/videos/DelMarket.mp4", // Path to the video
    },
    {
      id: 2,
      name: "Project Two",
      description: "Another cool project.",
      video: null,
    },
  ]);

  return (
    <PortfolioContext.Provider value={{ projects, setProjects }}>
      {children}
    </PortfolioContext.Provider>
  );
};
