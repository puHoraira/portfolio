import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaDownload } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'TravelHeaven',
      subtitle: 'AI-Powered Travel Planning Platform',
      description: 'MERN stack travel platform with Google Gemini AI integration, real-time collaborative itinerary editing, live chat, and Bangladesh Railway API. Implements design patterns showcasing advanced software engineering.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'AI', 'WebSocket'],
      category: 'web',
      github: 'https://github.com/puHoraira/TravelHeaven',
      image: 'web',
      featured: true
    },
    {
      id: 2,
      title: 'Rescue_Track',
      subtitle: 'Disaster Relief Management System',
      description: 'Disaster management platform with 5 user roles, camp management, inventory optimization, supply chain tracking, volunteer coordination, and financial dashboards. Integrated SSLCommerz for donations and email notifications.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'SSLCommerz'],
      category: 'web',
      github: 'https://github.com/puHoraira/Rescue_Track',
      image: 'web',
      featured: true
    },
    {
      id: 3,
      title: 'LearnSphere',
      subtitle: 'Cross-Platform EdTech Mobile App',
      description: 'Flutter mobile app for Android/iOS with online courses, video lectures, assignments, and quizzes. Features Firebase Authentication, Cloud Firestore, progress tracking, and video player integration.',
      technologies: ['Flutter', 'Dart', 'Firebase', 'Cloud Firestore', 'Android/iOS'],
      category: 'mobile',
      github: 'https://github.com/puHoraira/edtech',
      image: 'mobile',
      apk: 'https://drive.google.com/drive/folders/10mQJtZjhcYVyHDqe6WLUhivX_pow-DzS?usp=sharing'
    },
    {
      id: 4,
      title: 'Hospital Management System',
      subtitle: 'Enterprise Healthcare Solution',
      description: 'Node.js and Oracle SQL system managing patient registration, appointments, doctor records, medical history, and billing. Features RESTful API and administrative dashboards.',
      technologies: ['Node.js', 'Express', 'Oracle SQL', 'REST API', 'Multer'],
      category: 'web',
      github: 'https://github.com/puHoraira/hospitalManagement',
      image: 'web'
    },
    {
      id: 5,
      title: 'CSEDU Bank Management',
      subtitle: 'Desktop Banking Application',
      description: 'JavaFX desktop banking system with MySQL. Features account management (Savings, Current, Fixed Deposit), transactions (Deposit, Withdraw, Transfer), loan management, and admin panel.',
      technologies: ['Java', 'JavaFX', 'MySQL', 'CSS'],
      category: 'desktop',
      github: 'https://github.com/horaira1015/CSEDU_BANK_MANAGMENT_SYSTEM',
      image: 'desktop'
    },
    {
      id: 6,
      title: 'DualGame: Chess + Tic-Tac-Toe',
      subtitle: 'C++ Game Development with AI',
      description: 'C++ and SDL2 game featuring Chess and Tic-Tac-Toe with AI opponents. Includes custom graphics, animations, sound effects, and seamless game switching.',
      technologies: ['C++', 'SDL2', 'AI', 'Game Dev'],
      category: 'desktop',
      github: 'https://github.com/puHoraira/DualGameProject-CHESS-TICTACTOE-',
      image: 'desktop'
    },
    {
      id: 7,
      title: 'ADC Hardware Project',
      subtitle: 'Analog to Digital Converter',
      description: 'Electronics hardware project implementing an ADC circuit with complete design, implementation, testing, and technical documentation.',
      technologies: ['Electronics', 'Circuit Design', 'Hardware', 'Testing'],
      category: 'hardware',
      github: 'https://github.com/horaira1015/ADC_EEE-project',
      image: 'hardware'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Apps' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'desktop', label: 'Desktop' },
    { id: 'hardware', label: 'Hardware' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="section-title fade-in-up">
          <h2>Projects</h2>
          <p>7 comprehensive projects showcasing full-stack development, mobile apps, and hardware engineering</p>
        </div>

        <div className="project-filters">
          {categories.map(category => (
            <button
              key={category.id}
              className={`filter-btn ${filter === category.id ? 'active' : ''}`}
              onClick={() => setFilter(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div 
              className="project-card card fade-in-up" 
              key={project.id}
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className={`project-image ${project.image}`}>
                <div className="project-overlay">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <FaGithub />
                  </a>
                </div>
              </div>

              <div className="project-content">
                <h3>{project.title}</h3>
                <h4>{project.subtitle}</h4>
                <p>{project.description}</p>

                <div className="project-tech">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>

                <div className="project-links">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-btn btn-github"
                  >
                    <FaGithub /> <span>View Code</span>
                  </a>
                  {project.apk && (
                    <a 
                      href={project.apk} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-btn btn-download"
                    >
                      <FaDownload /> <span>Download APK</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
