import React from 'react';
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiDownload } from 'react-icons/fi';
import { profile, education, skills, interests, languages } from '../data/profile';

const About = () => (
  <>
    <section className="page-intro container about-intro">
      <div>
        <p className="eyebrow">About</p>
        <h1>{profile.name}</h1>
        {profile.intro.map((p) => (
          <p key={p.slice(0, 20)} className="lead">
            {p}
          </p>
        ))}
        <p className="muted">
          Interests: {interests.join(', ')}.
        </p>
      </div>
      <img className="about-photo" src={`${process.env.PUBLIC_URL}/${profile.photo}`} alt="" />
    </section>

    <section className="section container">
      <div className="section-head">
        <h2>Education</h2>
      </div>
      <ol className="timeline">
        {education.map((e) => (
          <li key={e.school}>
            <div className="timeline-period">{e.period}</div>
            <div>
              <h3>{e.school}</h3>
              <p>{e.degree}</p>
              <p className="muted small">{e.detail}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>

    <section className="section container">
      <div className="section-head">
        <h2>Skills</h2>
      </div>
      <dl className="skills">
        {skills.map((s) => (
          <div key={s.group} className="skill-row">
            <dt>{s.group}</dt>
            <dd>
              <ul className="tags">
                {s.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </section>

    <section className="section container" id="contact">
      <div className="section-head">
        <h2>Contact</h2>
      </div>
      <div className="contact-grid">
        <a href={`mailto:${profile.email}`} className="contact-item">
          <FiMail /> <span>{profile.email}</span>
        </a>
        <a href={profile.phoneHref} className="contact-item">
          <FiPhone /> <span>{profile.phone}</span>
        </a>
        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="contact-item">
          <FiLinkedin /> <span>LinkedIn</span>
        </a>
        <a href={profile.github} target="_blank" rel="noopener noreferrer" className="contact-item">
          <FiGithub /> <span>github.com/puHoraira</span>
        </a>
        <div className="contact-item">
          <FiMapPin /> <span>{profile.location}</span>
        </div>
        <a
          href={`${process.env.PUBLIC_URL}/${profile.cv}`}
          target="_blank"
          rel="noopener noreferrer"
          className="contact-item"
        >
          <FiDownload /> <span>Download CV (PDF)</span>
        </a>
      </div>
    </section>
  </>
);

export default About;
