//src/App.js
import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Projects from "./components/Projects";
import Portfolio3D from "./components/Portfolio3D";
import Footer from "./components/Footer";
import { PortfolioProvider } from "./context/PortfolioContext";

const App = () => {
  return (
    <PortfolioProvider>
      <Navbar />
      <HeroSection />
      <div className="w-full h-screen flex justify-center items-center bg-gray-800">
      <Portfolio3D />
      </div>
      
      <Projects />
      <Footer />
    </PortfolioProvider>
  );
};

export default App;