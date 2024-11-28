import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
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
      <Footer />
    </PortfolioProvider>
  );
};

export default App;