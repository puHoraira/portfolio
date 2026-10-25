import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiArrowUpRight, FiDownload, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { profile, thesis, dataset, projects } from '../data/profile';
import ProjectRow from '../components/ProjectRow';

const Home = () => {
  const nexus = projects.find((p) => p.slug === 'csedu-nexus');
  const selected = projects.filter((p) => !p.featured).slice(0, 3);
  const pub = process.env.PUBLIC_URL;

  return (
    <>
      <section className="hero container">
        <div className="hero-text">
          <p className="eyebrow">{profile.role}</p>
          <h1>
            Hi, I'm {profile.shortName}.
            <span className="hero-line">{profile.tagline}</span>
          </h1>
          <div className="btn-row">
            <a className="btn btn-solid" href={`${pub}/${profile.cv}`} target="_blank" rel="noopener noreferrer">
              <FiDownload /> Download CV
            </a>
            <a className="btn btn-ghost" href={`mailto:${profile.email}`}>
              <FiMail /> Get in touch
            </a>
          </div>
          <div className="social hero-social">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FiGithub />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FiLinkedin />
            </a>
          </div>
        </div>
        <figure className="hero-photo">
          <img src={`${pub}/${profile.photo}`} alt={`Portrait of ${profile.name}`} />
        </figure>
      </section>

      <section className="section container">
        <div className="section-head">
          <h2>What I'm working on</h2>
        </div>
        <div className="now-grid">
          <Link to="/research" className="now-card">
            <span className="label">Thesis · {thesis.status}</span>
            <h3>Agentic AI for autonomous UAV missions</h3>
            <p>
              An on-device language model with task-aware LoRA adapters that plans and flies drone
              missions from plain-language commands.
            </p>
            <span className="card-more">
              Read more <FiArrowRight />
            </span>
          </Link>
          <Link to="/research" className="now-card">
            <span className="label">Dataset · {dataset.year}</span>
            <h3>Illegal road crossing detection in Dhaka</h3>
            <p>
              Co-authored a public dataset of {dataset.facts[0].value} annotated street images for
              YOLO-based pedestrian detection, published on {dataset.venue}.
            </p>
            <span className="card-more">
              Read more <FiArrowRight />
            </span>
          </Link>
        </div>
      </section>

      <section className="section container">
        <div className="section-head">
          <h2>Selected projects</h2>
          <Link to="/projects" className="text-link">
            All projects <FiArrowRight />
          </Link>
        </div>
        <div className="project-list">
          {selected.map((p) => (
            <ProjectRow key={p.slug} project={p} />
          ))}
        </div>
      </section>

      <section className="section container">
        <div className="contact-band">
          <div>
            <h2>Let's talk</h2>
            <p className="muted">
              I'm open to research collaborations, internships and software engineering roles.
            </p>
          </div>
          <a className="btn btn-solid" href={`mailto:${profile.email}`}>
            Email me <FiArrowUpRight />
          </a>
        </div>
      </section>
    </>
  );
};

export default Home;
