import React from 'react';
import { FiGithub, FiArrowUpRight } from 'react-icons/fi';
import { projects, earlierWork } from '../data/profile';
import ProjectRow from '../components/ProjectRow';

const Projects = () => {
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <>
      <section className="page-intro container">
        <p className="eyebrow">Projects</p>
        <h1>Software I've designed and built</h1>
        <p className="lead">
          Mostly full-stack web systems for real use cases, plus mobile and desktop apps from
          coursework and side projects.
        </p>
      </section>

      <section className="section container">
        <article className="featured">
          <div className="featured-top">
            <div>
              <span className="label">Featured · {featured.year}</span>
              <h2>{featured.title}</h2>
              <p className="project-sub">{featured.subtitle}</p>
            </div>
            <div className="link-row">
              <a href={featured.live} target="_blank" rel="noopener noreferrer" className="btn btn-solid">
                Visit live site <FiArrowUpRight />
              </a>
              <a href={featured.github} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                <FiGithub /> Source
              </a>
            </div>
          </div>
          <p className="lead">{featured.summary}</p>
          <ul className="bullets two-col">
            {featured.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
          <ul className="tags" aria-label="Tech stack">
            {featured.stack.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="section container">
        <div className="section-head">
          <h2>More projects</h2>
        </div>
        <div className="project-list">
          {rest.map((p) => (
            <ProjectRow key={p.slug} project={p} />
          ))}
        </div>
      </section>

      <section className="section container">
        <div className="section-head">
          <h2>Earlier work</h2>
        </div>
        <ul className="simple-list">
          {earlierWork.map((w) => (
            <li key={w.title}>
              <a href={w.github} target="_blank" rel="noopener noreferrer" className="text-link">
                {w.title} <FiArrowUpRight />
              </a>
              <span className="muted"> {w.text}</span>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Projects;
