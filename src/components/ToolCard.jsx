import React from 'react';
import { Link } from 'react-router-dom';

export default function ToolCard({ tool, onCompareChange, isComparing }) {
  React.useEffect(() => {
    console.log(`[ToolCard ${tool.id}] Render - isComparing:`, isComparing, 'type:', typeof isComparing);
  });

  const handleCheckboxChange = (e) => {
    e.stopPropagation();
    const newValue = !isComparing; // Toggle based on current prop, not DOM state
    console.log(`[ToolCard ${tool.id}] Checkbox clicked - newValue:`, newValue, 'current isComparing:', isComparing);
    onCompareChange?.(tool.id, newValue);
  };

  return (
    <div className="card" style={{ position: 'relative' }}>
      <div 
        style={{ position: 'absolute', bottom: 12, right: 12, zIndex: 10 }}
        onClick={(e) => e.stopPropagation()}
        data-checkbox-container
      >
        <input
          type="checkbox"
          checked={Boolean(isComparing)}
          onChange={handleCheckboxChange}
          aria-label={`Compare ${tool.name}`}
        />
      </div>
      <Link 
        to={`/tool/${tool.id}`} 
        aria-label={`${tool.name} details`} 
        style={{ textDecoration: 'none', color: 'inherit', display: 'block', paddingBottom: 8 }}
        onClick={(e) => {
          // Don't navigate if clicking the checkbox area
          if (e.target.closest('[data-checkbox-container]')) {
            e.preventDefault();
          }
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
          <h3 style={{ margin: 0, display: 'flex', alignItems: 'center', gap: 8 }}>
            {tool.name}
            {tool.hasNewModel && (
              <span className="pill" style={{ background: 'linear-gradient(135deg, #6aa6ff, #b388ff)', color: '#0b0c10', fontSize: '0.75rem', fontWeight: 600 }}>
                New Model
              </span>
            )}
          </h3>
          <span className="pill">{tool.vendor}</span>
        </div>
        <p className="muted" style={{ marginTop: 8 }}>{tool.summary}</p>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 10 }}>
          {tool.tags?.slice(0, 4).map((t) => (
            <span key={t} className="pill" style={{ fontSize: '0.8rem' }}>{t}</span>
          ))}
        </div>
      </Link>
    </div>
  );
}
