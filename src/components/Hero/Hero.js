import React from 'react';
import { FaGithub, FaFacebook, FaEnvelope, FaPhone, FaDownload } from 'react-icons/fa';
import { Link } from 'react-scroll';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero-content container">
        <div className="hero-text fade-in-up">
          <h3 className="hero-greeting">Hello, I'm</h3>
          <h1 className="hero-name">Md. Abu Horaira Tonmoy</h1>
          <h2 className="hero-title">
            <span className="typing-text">Computer Science Student</span>
          </h2>
          <p className="hero-description">
            Detail-oriented CS undergraduate with strong technical aptitude and hands-on experience
            in full-stack development, debugging, and technical support. Skilled in diagnosing
            technical issues across web, backend, and operating system environments.
          </p>

          <div className="hero-buttons">
            <a
              href={`${process.env.PUBLIC_URL}/Abu_Horaira_Tonmoy_CV.pdf`}
              download="Abu_Horaira_Tonmoy_CV.pdf"
              className="btn btn-primary"
            >
              <FaDownload /> Download CV
            </a>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="btn btn-secondary"
            >
              Get In Touch
            </Link>
          </div>

          <div className="hero-social">
            <a href="https://github.com/puHoraira" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.facebook.com/i.horAIRA.11.01" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="mailto:mdabu-2021911202@cs.du.ac.bd">
              <FaEnvelope />
            </a>
            <a href="tel:+8801751777543">
              <FaPhone />
            </a>
          </div>
        </div>

        <div className="hero-image fade-in">
          <div className="hero-img-wrapper">
            <img src={`${process.env.PUBLIC_URL}/pp1.png`} alt="Abu Horaira Tonmoy" className="hero-img" />
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="mouse"></div>
      </div>
    </section>
  );
};

export default Hero;
