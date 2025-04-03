import React from "react";
import "../styles/contact.css";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

function Contact() {
  return (
    <section className="contact">
      <h2>Contato</h2>
      <div className="contact-icons">
        <a href="https://instagram.com/fabriciofaal" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="icon" />
        </a>
        <a href="https://www.linkedin.com/in/fabriciofaal" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="icon" />
        </a>
        <a href="https://github.com/FabricioFaal" target="_blank" rel="noopener noreferrer">
          <FaGithub className="icon" />
        </a>
      </div>
    </section>
  );
}

export default Contact;
