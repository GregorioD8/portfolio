///src/hooks/usePortfolio.js
import { useContext } from "react";
import { PortfolioContext } from "../context/PortfolioContext";

const usePortfolio = () => {
  return useContext(PortfolioContext);
};

export default usePortfolio;