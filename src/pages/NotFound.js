import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <section className="page-intro container">
    <p className="eyebrow">404</p>
    <h1>This page doesn't exist</h1>
    <p className="lead">
      <Link to="/" className="text-link">Go back home</Link>
    </p>
  </section>
);

export default NotFound;
