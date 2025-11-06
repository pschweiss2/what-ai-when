import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { tools } from '../data/tools.js';

// Map country names to flag emojis
const countryFlags = {
  'USA': '🇺🇸',
  'UK': '🇬🇧',
  'France': '🇫🇷',
  'China': '🇨🇳',
  'Australia': '🇦🇺',
  'Denmark': '🇩🇰',
};

export default function ToolDetailPage() {
  const { toolId } = useParams();
  const tool = tools.find((t) => t.id === toolId);

  if (!tool) {
    return (
      <main>
        <p>Tool not found.</p>
        <Link className="btn" to="/">Back</Link>
      </main>
    );
  }

  return (
    <main>
      <Link className="btn" to="/" style={{ marginBottom: 16, display: 'inline-block' }}>← Back</Link>
      <div className="card" style={{ padding: 24 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <h2 style={{ margin: 0 }}>{tool.name}</h2>
            {tool.hasFreeTier && (
              <span className="pill" style={{ background: '#10b981', color: '#fff', fontSize: '0.75rem', fontWeight: 600 }}>
                Free Tier
              </span>
            )}
          </div>
          <span className="pill" style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            {tool.country && countryFlags[tool.country] && (
              <span style={{ fontSize: '1.2rem' }}>{countryFlags[tool.country]}</span>
            )}
            {tool.vendor}
          </span>
        </div>
        <p className="muted" style={{ marginTop: 10 }}>{tool.description || tool.summary}</p>

        <h3 style={{ marginTop: 20 }}>Models</h3>
        <div className="grid">
          {tool.models?.map((m) => (
            <article key={m.id} className="card">
              <h4 style={{ marginTop: 0 }}>{m.name}</h4>
              <p className="muted">{m.value}</p>
              {m.useCases?.length ? (
                <ul>
                  {m.useCases.map((u) => (
                    <li key={u}>{u}</li>
                  ))}
                </ul>
              ) : null}
            </article>
          ))}
        </div>

        {tool.notes?.length ? (
          <div style={{ marginTop: 16 }}>
            <h3>Notes</h3>
            <ul>
              {tool.notes.map((n, i) => (
                <li key={i}>{n}</li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </main>
  );
}


