import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import ToolDetailPage from './pages/ToolDetailPage.jsx';
import ComparisonPage from './pages/ComparisonPage.jsx';
import Fundamentals from './pages/Fundamentals.jsx';
import Disclaimer from './components/Disclaimer.jsx';
import { FEEDBACK_FORM_URL } from './config.js';

export default function App() {
  return (
    <div className="container">
      <header className="header">
        <div className="brand">
          <div className="brand-logo" />
          <div>
            <div className="brand-title">What AI, When?</div>
            <div className="muted" style={{ fontSize: '0.9rem' }}>
              Suggestions for choosing AI tools by task and persona
            </div>
          </div>
        </div>
        <nav style={{ display: 'flex', gap: 8 }}>
          <Link className="btn" to="/">Home</Link>
          <Link className="btn" to="/fundamentals">AI Fundamentals</Link>
          <a className="btn" href={FEEDBACK_FORM_URL} target="_blank" rel="noreferrer">Feedback</a>
        </nav>
      </header>

      <Disclaimer />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tool/:toolId" element={<ToolDetailPage />} />
        <Route path="/compare" element={<ComparisonPage />} />
        <Route path="/fundamentals" element={<Fundamentals />} />
      </Routes>

      <footer className="footer">
        <div>
          <span className="muted">MIT Licensed. </span>
          <a href="https://github.com/" target="_blank" rel="noreferrer">Open Source</a>
          <span className="muted"> · </span>
          <a href={FEEDBACK_FORM_URL} target="_blank" rel="noreferrer">Submit feedback/new tools</a>
        </div>
      </footer>
    </div>
  );
}


