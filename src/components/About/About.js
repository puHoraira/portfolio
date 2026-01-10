import React from 'react';
import { FaCode, FaLaptopCode, FaTools, FaUsersCog } from 'react-icons/fa';
import './About.css';

const About = () => {
  const stats = [
    { number: '3.83', label: 'CGPA', icon: <FaCode /> },
    { number: '10+', label: 'Projects', icon: <FaLaptopCode /> },
    { number: '10+', label: 'Technologies', icon: <FaTools /> },
    { number: '100%', label: 'Dedication', icon: <FaUsersCog /> }
  ];

  return (
    <section className="about" id="about">
      <div className="container">
        <div className="section-title fade-in-up">
          <h2>About Me</h2>
          <p>Get to know more about my background and expertise</p>
        </div>

        <div className="about-content">
          <div className="about-text slide-in-left">
            <h3>Hello! I'm Abu Horaira Tonmoy</h3>
            <p>
              I'm a Computer Science undergraduate student at the University of Dhaka with a 
              passion for software development and technical problem-solving. Currently in my 3rd year, 
              first semester, maintaining a <strong>3.83 CGPA</strong>, I focus on building user-facing 
              software systems and providing reliable technical support.
            </p>
            <p>
              My experience spans across <strong>full-stack development</strong>, where I've worked 
              with modern technologies including React, Node.js, MongoDB, and various other tools. 
              I'm comfortable in diagnosing technical issues across web, backend, and operating 
              system environments.
            </p>
            <p>
              I have hands-on experience with <strong>microcontrollers</strong> (Cortex-M4, ESP32), 
              sensor interfacing, and basic PCB design. I'm skilled in debugging hardware-software 
              integration issues and providing technical solutions clearly to both technical and 
              non-technical users.
            </p>

            <div className="about-info">
              <div className="info-item">
                <span className="info-label">Location:</span>
                <span className="info-value">Dhaka, Bangladesh</span>
              </div>
              <div className="info-item">
                <span className="info-label">Email:</span>
                <span className="info-value">mdabu-2021911202@cs.du.ac.bd</span>
              </div>
              <div className="info-item">
                <span className="info-label">Phone:</span>
                <span className="info-value">+880 1751 777543</span>
              </div>
              <div className="info-item">
                <span className="info-label">GitHub:</span>
                <span className="info-value">
                  <a href="https://github.com/puHoraira" target="_blank" rel="noopener noreferrer">
                    github.com/puHoraira
                  </a>
                </span>
              </div>
            </div>
          </div>

          <div className="about-stats slide-in-right">
            {stats.map((stat, index) => (
              <div className="stat-card card" key={index}>
                <div className="stat-icon">{stat.icon}</div>
                <h3>{stat.number}</h3>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
