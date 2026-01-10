import React, { useState } from 'react';
import {
  FaReact, FaNode, FaHtml5, FaCss3Alt, FaJs, FaPython,
  FaJava, FaGitAlt, FaGithub, FaDocker, FaLinux, FaAndroid, FaDatabase
} from 'react-icons/fa';
import {
  SiMongodb, SiMysql, SiFirebase, SiExpress, SiDart, SiFlask,
  SiOracle, SiCplusplus
} from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('all');

  const skillsData = {
    programming: [
      { name: 'C', icon: <SiCplusplus /> },
      { name: 'C++', icon: <SiCplusplus /> },
      { name: 'Python', icon: <FaPython /> },
      { name: 'Java', icon: <FaJava /> },
      { name: 'JavaScript', icon: <FaJs /> },
      { name: 'Dart', icon: <SiDart /> }
    ],
    web: [
      { name: 'HTML', icon: <FaHtml5 /> },
      { name: 'CSS', icon: <FaCss3Alt /> },
      { name: 'React', icon: <FaReact /> },
      { name: 'Node.js', icon: <FaNode /> },
      { name: 'Express', icon: <SiExpress /> },
      { name: 'Flask', icon: <SiFlask /> }
    ],
    database: [
      { name: 'MongoDB', icon: <SiMongodb /> },
      { name: 'MySQL', icon: <SiMysql /> },
      { name: 'OracleSQL', icon: <SiOracle /> },
      { name: 'Firebase', icon: <SiFirebase /> }
    ],
    tools: [
      { name: 'Git', icon: <FaGitAlt /> },
      { name: 'GitHub', icon: <FaGithub /> },
      { name: 'Linux', icon: <FaLinux /> },
      { name: 'Docker', icon: <FaDocker /> },
      { name: 'Android Studio', icon: <FaAndroid /> }
    ]
  };

  const getAllSkills = () => {
    return [
      ...skillsData.programming,
      ...skillsData.web,
      ...skillsData.database,
      ...skillsData.tools
    ];
  };

  const getFilteredSkills = () => {
    if (activeTab === 'all') return getAllSkills();
    return skillsData[activeTab] || [];
  };

  const tabs = [
    { id: 'all', label: 'All Skills' },
    { id: 'programming', label: 'Programming' },
    { id: 'web', label: 'Web Technologies' },
    { id: 'database', label: 'Databases' },
    { id: 'tools', label: 'Tools & OS' }
  ];

  return (
    <section className="skills" id="skills">
      <div className="container">
        <div className="section-title fade-in-up">
          <h2>Technical Skills</h2>
          <p>Technologies and tools I work with</p>
        </div>

        <div className="skills-tabs">
          {tabs.map(tab => (
            <button
              key={tab.id}
              className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="skills-grid">
          {getFilteredSkills().map((skill, index) => (
            <div className="skill-card card fade-in-up" key={index} style={{animationDelay: `${index * 0.1}s`}}>
              <div className="skill-icon">{skill.icon}</div>
              <h3>{skill.name}</h3>
            </div>
          ))}
        </div>

        <div className="additional-skills fade-in-up">
          <h3>Additional Technical Experience</h3>
          <div className="skill-tags">
            <span className="skill-tag">Hardware & Embedded Systems</span>
            <span className="skill-tag">Microcontrollers (Cortex-M4, ESP32)</span>
            <span className="skill-tag">Sensor Interfacing</span>
            <span className="skill-tag">PCB Design</span>
            <span className="skill-tag">Debugging & Troubleshooting</span>
            <span className="skill-tag">Command Line (Linux)</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
