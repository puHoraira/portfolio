import React from 'react';
import { FaHeart, FaGithub, FaEnvelope, FaArrowUp } from 'react-icons/fa';
import { Link } from 'react-scroll';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Abu Horaira Tonmoy</h3>
            <p>
              Computer Science Student passionate about software development
              and technical problem-solving.
            </p>
            <div className="footer-social">
              <a href="https://github.com/puHoraira" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="mailto:mdabu-2021911202@cs.du.ac.bd">
                <FaEnvelope />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li>
                <Link to="hero" smooth={true} duration={500}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="about" smooth={true} duration={500}>
                  About
                </Link>
              </li>
              <li>
                <Link to="education" smooth={true} duration={500}>
                  Education
                </Link>
              </li>
              <li>
                <Link to="skills" smooth={true} duration={500}>
                  Skills
                </Link>
              </li>
              <li>
                <Link to="projects" smooth={true} duration={500}>
                  Projects
                </Link>
              </li>
              <li>
                <Link to="contact" smooth={true} duration={500}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Info</h4>
            <ul className="footer-contact">
              <li>Dhaka, Bangladesh</li>
              <li>
                <a href="mailto:mdabu-2021911202@cs.du.ac.bd">
                  mdabu-2021911202@cs.du.ac.bd
                </a>
              </li>
              <li>
                <a href="tel:+8801751777543">+880 1751 777543</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {currentYear} Abu Horaira Tonmoy. Made with <FaHeart className="heart-icon" /> by Me. Thanks for visiting...
          </p>
          <p className="footer-credits">
            All Rights Reserved
          </p>
        </div>

        <Link 
          to="hero" 
          smooth={true} 
          duration={500}
          className="scroll-top"
        >
          <FaArrowUp />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
