import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import DarkModeButton from "./components/DarkModeButton";
import { ThemeProvider } from "./context/ThemeContext";
import "./styles/global.css";

function App() {
  return (
  <ThemeProvider>
    <div>
    <DarkModeButton />
    <Router>
      <Header />
      <main style={{ marginLeft: '80px', paddingTop: '20px' }}>
        
        <Routes>
          <Route path="/" element={<h2></h2>} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </Router>
    </div>
    </ThemeProvider>

 );
}


export default App;
