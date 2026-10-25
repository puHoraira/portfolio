import React from 'react';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { profile } from '../data/profile';

const Footer = () => (
  <footer className="site-footer">
    <div className="container footer-inner">
      <p className="muted">
        © {new Date().getFullYear()} {profile.name} · {profile.location}
      </p>
      <div className="social">
        <a href={`mailto:${profile.email}`} aria-label="Email">
          <FiMail />
        </a>
        <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FiGithub />
        </a>
        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FiLinkedin />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
