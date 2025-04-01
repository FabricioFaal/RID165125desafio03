import React, { useState, useEffect } from "react"; 
import { useLocation, Link } from "react-router-dom"; 
import "../styles/header.css";
import logo from "../assets/dnc.svg";

function Header() {
  const location = useLocation();
  const text = "Front-End.Web (Desenvolvedor)";
  const [displayedText, setDisplayedText] = useState("");  

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText(text.substring(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <aside className="sidebar">
        <img src={logo} alt="Ícone do Curso" className="logo-svg" />
        <nav>
          <ul>
            <li><Link to="/">home</Link></li> 
            <li><Link to="/projects">projetos</Link></li>
            <li><Link to="/about">sobre mim</Link></li>
            <li><Link to="/contact">contato</Link></li>
          </ul>
        </nav>
      </aside>

      {location.pathname === "/" && (
        <header className="header-title">
          <h1>{displayedText}</h1>
        </header>
      )}
    </>
  );
}

export default Header;
