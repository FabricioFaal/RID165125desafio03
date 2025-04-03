import React, { useContext } from "react";
import "../styles/projects.css";
import { ThemeContext } from "../ThemeContext"; 
import ArquiteturaImage from "../assets/Arquitetura.jpeg";
import DNCWeatherImage from "../assets/DNCWeather.jpeg";
import SiteConstrução from "../assets/site_em_construcao.jpg";

function Projects() {
  const { darkMode } = useContext(ThemeContext);

  const projects = [
    {
      id: 1,
      title: "Tradição em projetos de arquitetura",
      description: "Projeto landing page de arquitetura, para mostragem de serviços, com captação de leads em formulário.",
      imageUrl: ArquiteturaImage,
      link: "https://arquiteturadesafiobase.netlify.app",
      tags: ["CSS", "HTML"]
    },
    {
      id: 2,
      title: "DncWeather",
      description: "Projeto onde criamos uma página, onde buscamos CEP, Latitude e Longitude, e fornecemos por meio de API, previsão do tempo e localidade.",
      imageUrl: DNCWeatherImage,
      link: "https://rid165125desafio01.netlify.app/",
      tags: ["Java", "CSS", "HTML"]
    },
    {
      id: 3,
      title: "Projeto em construção",
      description: "Descrição do projeto em construção",
      imageUrl: SiteConstrução,
      tags: ["Java", "CSS", "HTML"]
    },
    {
      id: 4,
      title: "Projeto em construção",
      description: "Descrição do projeto em construção",
      imageUrl: SiteConstrução,
      tags: ["Java", "CSS", "HTL"]
    }
  ];

  return (
    <div className={`projects-container ${darkMode ? "dark" : ""}`}>
      <h2 className="projects-title">Projetos</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            
            <div className="project-visual">
              {project.link ? (
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <img src={project.imageUrl} alt={project.title} className="project-thumbnail" />
                </a>
              ) : (
                <img src={project.imageUrl} alt={project.title} className="project-thumbnail" />
              )}
              
              <div className="tags-container">
                {project.tags.map((tag, index) => (
                  <span key={index} className="tag">{tag}</span>
                ))}
              </div>
            </div>

            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
