import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { Home, BookOpen, MessageSquare, Sparkles, Shield } from 'lucide-react';
import HomePage from './pages/HomePage.jsx';
import ToolDetailPage from './pages/ToolDetailPage.jsx';
import ComparisonPage from './pages/ComparisonPage.jsx';
import Fundamentals from './pages/Fundamentals.jsx';
import AdminPage from './pages/AdminPage.jsx';
import Disclaimer from './components/Disclaimer.jsx';
import { FEEDBACK_FORM_URL } from './config.js';

function NavLink({ to, icon: Icon, children }) {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link 
      to={to} 
      className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
        isActive 
          ? 'bg-accent/20 text-accent' 
          : 'text-muted hover:text-text hover:bg-panel'
      }`}
    >
      <Icon className="w-4 h-4" />
      {children}
    </Link>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-bg">
      {/* Header */}
      <header className="border-b border-border sticky top-0 z-50 bg-bg/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-accent-secondary flex items-center justify-center shadow-lg shadow-accent/20 group-hover:shadow-accent/40 transition-shadow">
                <Sparkles className="w-4 h-4 text-bg" />
              </div>
              <div>
                <h1 className="font-bold text-text text-lg leading-tight">What AI, When?</h1>
                <p className="text-xs text-muted hidden sm:block">Find the right AI tool for your task</p>
              </div>
            </Link>

            {/* Navigation */}
            <nav className="flex items-center gap-1">
              <NavLink to="/" icon={Home}>Home</NavLink>
              <NavLink to="/fundamentals" icon={BookOpen}>Fundamentals</NavLink>
              <a 
                href={FEEDBACK_FORM_URL} 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-muted hover:text-text hover:bg-panel transition-all duration-200"
              >
                <MessageSquare className="w-4 h-4" />
                Feedback
              </a>
              <Link 
                to="/admin"
                className="flex items-center gap-2 px-3 py-2 rounded-lg text-muted hover:text-text hover:bg-panel transition-all duration-200 ml-2"
                title="Admin"
              >
                <Shield className="w-4 h-4" />
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Disclaimer />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tool/:toolId" element={<ToolDetailPage />} />
          <Route path="/compare" element={<ComparisonPage />} />
          <Route path="/fundamentals" element={<Fundamentals />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-muted text-sm">
              MIT Licensed · <a href="https://github.com/" target="_blank" rel="noreferrer" className="text-accent hover:underline">Open Source</a>
            </p>
            <a 
              href={FEEDBACK_FORM_URL} 
              target="_blank" 
              rel="noreferrer"
              className="text-sm text-muted hover:text-accent transition-colors"
            >
              Submit feedback or suggest new tools
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}


