import React, { useState } from 'react';
import { FiArrowUpRight, FiCopy, FiCheck } from 'react-icons/fi';
import { thesis, dataset, profile } from '../data/profile';

const Research = () => {
  const [copied, setCopied] = useState(false);

  const citation = `${dataset.authors.join(', ')} (${dataset.year}). ${dataset.title}. ${dataset.venue}, V1. https://doi.org/${dataset.doi}`;

  const copyCitation = async () => {
    try {
      await navigator.clipboard.writeText(citation);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      /* clipboard unavailable */
    }
  };

  return (
    <>
      <section className="page-intro container">
        <p className="eyebrow">Research</p>
        <h1>Edge AI, UAV and autonomous systems</h1>
      </section>

      <section className="section container">
        <div className="section-head">
          <h2>Undergraduate thesis</h2>
          <span className="pill">{thesis.status}</span>
        </div>
        <article className="paper">
          <h3 className="paper-title">{thesis.title}</h3>
          <p className="muted">
            Supervised by{' '}
            <a href={thesis.supervisor.url} target="_blank" rel="noopener noreferrer" className="text-link">
              {thesis.supervisor.name}
            </a>
            , {thesis.supervisor.title}
          </p>
          <p>{thesis.summary}</p>

          <div className="feature-grid">
            {thesis.components.map((c) => (
              <div key={c.title} className="feature">
                <h4>{c.title}</h4>
                <p>{c.text}</p>
              </div>
            ))}
          </div>

          <p className="muted small">
            Target domains: {thesis.domains.join(' · ')}
          </p>
        </article>
      </section>

      <section className="section container">
        <div className="section-head">
          <h2>Dataset publication</h2>
          <span className="pill">{dataset.venue} · {dataset.year}</span>
        </div>
        <article className="paper">
          <h3 className="paper-title">{dataset.title}</h3>
          <p className="authors">
            {dataset.authors.map((a, i) => (
              <React.Fragment key={a}>
                {a === profile.name ? <strong>{a}</strong> : a}
                {i < dataset.authors.length - 1 ? ', ' : ''}
              </React.Fragment>
            ))}
          </p>
          <p className="muted small">
            {dataset.version} · Published {dataset.published} · License {dataset.license}
          </p>
          <p>{dataset.summary}</p>

          <dl className="facts">
            {dataset.facts.map((f) => (
              <div key={f.label}>
                <dt>{f.value}</dt>
                <dd>{f.label}</dd>
              </div>
            ))}
          </dl>

          <h4>My contribution</h4>
          <ul className="bullets">
            {dataset.contributions.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>

          <div className="link-row">
            <a href={dataset.url} target="_blank" rel="noopener noreferrer" className="btn btn-solid">
              View on {dataset.venue} <FiArrowUpRight />
            </a>
            <a
              href={`https://doi.org/${dataset.doi}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              DOI: {dataset.doi}
            </a>
          </div>

          <div className="citation">
            <div className="citation-head">
              <span className="label">Cite</span>
              <button type="button" className="text-link" onClick={copyCitation}>
                {copied ? <><FiCheck /> Copied</> : <><FiCopy /> Copy</>}
              </button>
            </div>
            <p>{citation}</p>
          </div>
        </article>
      </section>
    </>
  );
};

export default Research;
