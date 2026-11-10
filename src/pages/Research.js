import React, { useState } from 'react';
import { FiArrowUpRight, FiCopy, FiCheck, FiDownload, FiFileText } from 'react-icons/fi';
import { thesis, dataset, preprint, profile } from '../data/profile';

const Authors = ({ authors }) => (
  <p className="authors">
    {authors.map((a, i) => (
      <React.Fragment key={a}>
        {a === profile.name ? <strong>{a}</strong> : a}
        {i < authors.length - 1 ? ', ' : ''}
      </React.Fragment>
    ))}
  </p>
);

const Research = () => {
  const [copied, setCopied] = useState(null);
  const pub = process.env.PUBLIC_URL;

  const citation = `${dataset.authors.join(', ')} (${dataset.year}). ${dataset.title}. ${dataset.venue}, V1. https://doi.org/${dataset.doi}`;
  const preprintCitation = `${preprint.authors.join(', ')} (${preprint.year}). ${preprint.title}. arXiv:${preprint.arxivId} [${preprint.category}]. https://doi.org/${preprint.doi}`;

  const copyCitation = async (key, text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(key);
      setTimeout(() => setCopied(null), 2000);
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
          <h2>Preprint</h2>
          <span className="pill">{preprint.venue} · {preprint.year}</span>
        </div>
        <article className="paper">
          <h3 className="paper-title">{preprint.title}</h3>
          <Authors authors={preprint.authors} />
          <p className="muted small">
            arXiv:{preprint.arxivId} [{preprint.category}] · Submitted {preprint.submitted} · License{' '}
            {preprint.license}
          </p>
          <p>{preprint.summary}</p>

          <dl className="facts">
            {preprint.facts.map((f) => (
              <div key={f.label}>
                <dt>{f.value}</dt>
                <dd>{f.label}</dd>
              </div>
            ))}
          </dl>

          <h4>Key results</h4>
          <ul className="bullets">
            {preprint.findings.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
          <p className="muted small">{preprint.details}</p>

          <div className="link-row">
            <a href={preprint.pdf} target="_blank" rel="noopener noreferrer" className="btn btn-solid">
              <FiFileText /> Read PDF <FiArrowUpRight />
            </a>
            <a href={preprint.url} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
              arXiv:{preprint.arxivId}
            </a>
            <a href={`${pub}/${preprint.localPdf}`} download className="btn btn-ghost">
              <FiDownload /> Download
            </a>
          </div>

          <div className="citation">
            <div className="citation-head">
              <span className="label">Cite</span>
              <button
                type="button"
                className="text-link"
                onClick={() => copyCitation('preprint', preprintCitation)}
              >
                {copied === 'preprint' ? <><FiCheck /> Copied</> : <><FiCopy /> Copy</>}
              </button>
            </div>
            <p>{preprintCitation}</p>
          </div>
        </article>
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
          <Authors authors={dataset.authors} />
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
              <button type="button" className="text-link" onClick={() => copyCitation('dataset', citation)}>
                {copied === 'dataset' ? <><FiCheck /> Copied</> : <><FiCopy /> Copy</>}
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
