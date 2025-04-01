import React from "react";
import "../styles/About.css";
import Icone1 from "../assets/icone1.svg";
import Icone2 from "../assets/icone2.svg";
import Icone3 from "../assets/icone3.svg";
import Icone4 from "../assets/icone4.svg";

const iconsData = [
  { icon: Icone1, title: "Interface & Design", subtitle: "Briefing, esboço e branding." },
  { icon: Icone2, title: "Html & Css", subtitle: "Sites responsivos com carregamento rápido." },
  { icon: Icone3, title: "React.js", subtitle: "Crie seu sistema com Node.js" },
  { icon: Icone4, title: "Design Gráfico", subtitle: "Crie sua arte gráfica." },
];

const listsData = [
  {
    title: "Experiências",
    items: [
      "Banco de Dados",
      "GIT, GitHub",
      "Figma",
      "CSS",
      "HTML",
      "Java",
      "Design Gráfico",
      "Web Design",
    ],
  },
  {
    title: "Outras tecnologias",
    items: [
      "Illustrator",
      "PhotoShop",
      "VS Code",
      "Vite",
      "React",
      "Node.js",
    ],
  },
  {
    title: "Habilidades sociais",
    items: [
      "Comunicação",
      "Liderança",
      "Trabalho em equipe",
      "Adaptável",
      "Resolução de problemas",
      "Criterioso",
    ],
  },
];

function About() {
  
  return (
    <div className="about-container">
      <h1>Sobre Mim</h1>
      <div className="about-content">
        <div className="about-text">
          <h2 id="NTL">Fabrício Ferreira</h2>
          <p id="NTL">
            Olá, meu nome é Fabrício Ferreira e sou hoje um estudante de tecnologia Full Stack. <br />
            Desde a infância, tive experiências na área de design, incluindo a criação de minha <br />
            própria marca de roupas e trabalhos gráficos como freelancer. No entanto, ao atingir a <br />
            maioridade, decidi me especializar e iniciei o ensino superior nas áreas de Administração <br />
            e Design Gráfico. Atualmente, estou focado na programação, com ênfase no desenvolvimento <br />
            Full Stack (Front-end, Back-end e Banco de Dados). Estou animado nessa nova área e ansioso <br />
            para contribuir em projetos inovadores.
          </p>

          <div className="social-links">
            <a href="https://www.linkedin.com/in/fabriciofaal/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://instagram.com/fabriciofaal" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://github.com/FabricioFaal/" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>


        <div className="about-icons">
  {iconsData.map((item, index) => (
    <div key={index} className="icon-block">
      <img src={item.icon} alt={`Ícone ${index + 1}`} className="icon-img" />
      <div className="separator-vertical"></div>
      <div className="icon-text">
        <h3>{item.title}</h3>
        <p>{item.subtitle}</p>
      </div>
    </div>
  ))}
</div>



        <div className="about-lists">
  {listsData.map((list, index) => (
    <div key={index} className="list-block">
      <div className="separator-vertical1"></div> 
      <div className="list-content">
        <h3>{list.title}</h3>
        <ul>
          {list.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  ))}
</div>


      </div>
    </div>
  );
}

export default About;
