import React from 'react';
import { FiGithub, FiArrowUpRight } from 'react-icons/fi';

// One project in a list: title, one-line subtitle, summary, stack and links.
const ProjectRow = ({ project }) => (
  <article className="project-row">
    <div className="project-head">
      <h3>{project.title}</h3>
      <p className="project-sub">{project.subtitle}</p>
    </div>
    <div className="project-body">
      <p>{project.summary}</p>
      <ul className="tags" aria-label="Tech stack">
        {project.stack.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      <div className="link-row">
        <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-link">
          <FiGithub /> Source
        </a>
        {project.live && (
          <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-link">
            Live site <FiArrowUpRight />
          </a>
        )}
        {project.extra && (
          <a href={project.extra.url} target="_blank" rel="noopener noreferrer" className="text-link">
            {project.extra.label} <FiArrowUpRight />
          </a>
        )}
      </div>
    </div>
  </article>
);

export default ProjectRow;
