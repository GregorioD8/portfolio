// /src/context/PortfolioContext.js
import React, { createContext, useState } from "react";

export const PortfolioContext = createContext();

export const PortfolioProvider = ({ children }) => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: "Mental Wellness Platform",
      description:
        "A full-stack application aimed at providing mental wellness services.",
      video: "/videos/DelMarket.mp4",
      route: "/wellness", // Add route
    },
    {
      id: 2,
      name: "AI Recommendation System",
      description:
        "An AI-driven system that generates personalized, data-driven recommendations.",
      video: "/videos/DelMarket.mp4",
      route: "/ai-recommend", // Add route
    },
    {
      id: 3,
      name: "Coach Management System",
      description:
        "A full-stack application built with React, Flask, and AWS for client tracking.",
      video: "/videos/DelMarket.mp4",
      route: "/coaching", // Add route
    },
    {
      id: 4,
      name: "Client Predictive Insights",
      description:
        "A tool to track and forecast client mood trends using machine learning.",
      video: "/videos/DelMarket.mp4",
      route: "/insights", // Add route
    },
    {
      id: 5,
      name: "Investment Platform",
      description:
        "An application allowing users to research and trade equities.",
      video: "/videos/DelMarket.mp4",
      route: "/invest", // Add route
    },
  ]);

  return (
    <PortfolioContext.Provider value={{ projects, setProjects }}>
      {children}
    </PortfolioContext.Provider>
  );
};