import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Research from './pages/Research';
import Projects from './pages/Projects';
import About from './pages/About';
import NotFound from './pages/NotFound';
import { profile } from './data/profile';

const titles = {
  '/': `${profile.name} · Portfolio`,
  '/research': `Research · ${profile.shortName}`,
  '/projects': `Projects · ${profile.shortName}`,
  '/about': `About · ${profile.shortName}`,
};

// Reset scroll and set the tab title on every page change.
function RouteEffects() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = titles[pathname] || `${profile.shortName} · Portfolio`;
  }, [pathname]);
  return null;
}

// HashRouter keeps deep links working on GitHub Pages.
function App() {
  return (
    <HashRouter>
      <RouteEffects />
      {/* With HashRouter a plain "#main" link would change the route, so focus it directly. */}
      <a
        className="skip-link"
        href="#/"
        onClick={(e) => {
          e.preventDefault();
          document.getElementById('main')?.focus();
        }}
      >
        Skip to content
      </a>
      <Header />
      <main id="main" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/research" element={<Research />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </HashRouter>
  );
}

export default App;
