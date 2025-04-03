import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import "../styles/darkmode.css"; 

const DarkModeButton = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <button className="dark-mode-btn" onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? "☾" : "☀︎"}
    </button>
  );
};

export default DarkModeButton;
