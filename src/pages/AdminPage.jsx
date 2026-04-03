import React, { useState } from 'react';
import { Lock, Eye, EyeOff, Download, Copy, Check, Save, RefreshCw, AlertTriangle } from 'lucide-react';
import { tools, personas, exportToYaml } from '../data/index.js';

const ADMIN_PASSWORD = 'admin123'; // Simple password for now

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState('tools');
  const [copied, setCopied] = useState(false);
  const [yamlContent, setYamlContent] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setError('');
      // Initialize YAML content
      setYamlContent(exportToYaml({ tools, personas }));
    } else {
      setError('Invalid password');
    }
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(yamlContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([yamlContent], { type: 'text/yaml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'tools.yaml';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleRefresh = () => {
    setYamlContent(exportToYaml({ tools, personas }));
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="glass-card p-8 w-full max-w-md">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
              <Lock className="w-5 h-5 text-accent" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-text">Admin Access</h2>
              <p className="text-sm text-muted">Enter password to continue</p>
            </div>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="input pr-11"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted hover:text-text"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>

            {error && (
              <div className="flex items-center gap-2 text-red-400 text-sm">
                <AlertTriangle className="w-4 h-4" />
                {error}
              </div>
            )}

            <button type="submit" className="btn-primary w-full">
              <Lock className="w-4 h-4" />
              Access Admin
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-fade-in">
      {/* Header */}
      <div className="glass rounded-xl p-6 mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold gradient-text mb-1">Admin Dashboard</h1>
            <p className="text-muted text-sm">
              Manage tools and export data · <span className="text-success">{tools.length} tools</span> · <span className="text-accent">{personas.length} personas</span>
            </p>
          </div>
          
          <div className="flex items-center gap-2">
            <button onClick={handleRefresh} className="btn">
              <RefreshCw className="w-4 h-4" />
              Refresh
            </button>
            <button onClick={handleCopy} className="btn">
              {copied ? <Check className="w-4 h-4 text-success" /> : <Copy className="w-4 h-4" />}
              {copied ? 'Copied!' : 'Copy YAML'}
            </button>
            <button onClick={handleDownload} className="btn-primary">
              <Download className="w-4 h-4" />
              Download
            </button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setActiveTab('tools')}
          className={`px-4 py-2 rounded-lg font-medium transition-all ${
            activeTab === 'tools'
              ? 'bg-accent/20 text-accent'
              : 'text-muted hover:text-text hover:bg-panel'
          }`}
        >
          Tools ({tools.length})
        </button>
        <button
          onClick={() => setActiveTab('personas')}
          className={`px-4 py-2 rounded-lg font-medium transition-all ${
            activeTab === 'personas'
              ? 'bg-accent/20 text-accent'
              : 'text-muted hover:text-text hover:bg-panel'
          }`}
        >
          Personas ({personas.length})
        </button>
        <button
          onClick={() => setActiveTab('yaml')}
          className={`px-4 py-2 rounded-lg font-medium transition-all ${
            activeTab === 'yaml'
              ? 'bg-accent/20 text-accent'
              : 'text-muted hover:text-text hover:bg-panel'
          }`}
        >
          Raw YAML
        </button>
      </div>

      {/* Content */}
      {activeTab === 'yaml' && (
        <div className="glass-card overflow-hidden">
          <div className="bg-panel px-4 py-2 border-b border-border flex items-center justify-between">
            <span className="text-sm text-muted">tools.yaml</span>
            <span className="text-xs text-muted">{yamlContent.length} chars</span>
          </div>
          <textarea
            value={yamlContent}
            onChange={(e) => setYamlContent(e.target.value)}
            className="w-full h-[600px] bg-bg text-text font-mono text-sm p-4 resize-none focus:outline-none"
            spellCheck={false}
          />
        </div>
      )}

      {activeTab === 'tools' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {tools.map((tool) => (
            <div key={tool.id} className="glass-card p-4">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="font-semibold text-text">{tool.name}</h3>
                  <p className="text-sm text-muted">{tool.vendor} · {tool.country}</p>
                </div>
                <div className="flex gap-1">
                  {tool.hasNewModel && <span className="pill-new text-xs">New</span>}
                  {tool.hasFreeTier && <span className="pill-free text-xs">Free</span>}
                </div>
              </div>
              <p className="text-sm text-muted line-clamp-2 mb-3">{tool.summary}</p>
              <div className="flex flex-wrap gap-1">
                {tool.tags?.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
              {tool.models && tool.models.length > 0 && (
                <div className="mt-3 pt-3 border-t border-border">
                  <p className="text-xs text-muted mb-2">Models:</p>
                  <div className="flex flex-wrap gap-1">
                    {tool.models.map((m) => (
                      <span key={m.id} className="pill text-xs">{m.name}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {activeTab === 'personas' && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {personas.map((persona) => (
            <div key={persona.id} className="glass-card p-4 text-center">
              <p className="font-medium text-text">{persona.name}</p>
              <p className="text-xs text-muted mt-1">ID: {persona.id}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
