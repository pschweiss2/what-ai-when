import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { tools } from '../data/tools.js';

export default function ComparisonPage() {
  const [searchParams] = useSearchParams();
  const toolIds = searchParams.get('tools')?.split(',').filter(Boolean) || [];
  const selectedTools = tools.filter((t) => toolIds.includes(t.id));

  if (selectedTools.length === 0) {
    return (
      <main>
        <p>No tools selected for comparison.</p>
        <Link className="btn" to="/">Back to Home</Link>
      </main>
    );
  }

  const allTags = new Set();
  selectedTools.forEach((t) => {
    t.tags?.forEach((tag) => allTags.add(tag));
  });

  return (
    <main>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
        <h2 style={{ margin: 0 }}>Tool Comparison</h2>
        <Link className="btn" to="/">← Back</Link>
      </div>

      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', background: 'var(--card)', borderRadius: 12, overflow: 'hidden' }}>
          <thead>
            <tr style={{ background: 'var(--panel)' }}>
              <th style={{ padding: 16, textAlign: 'left', borderBottom: '2px solid #202636' }}>Feature</th>
              {selectedTools.map((tool) => (
                <th key={tool.id} style={{ padding: 16, textAlign: 'left', borderBottom: '2px solid #202636', minWidth: 200 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <div>
                      <div style={{ fontWeight: 600 }}>{tool.name}</div>
                      <div className="muted" style={{ fontSize: '0.9rem' }}>{tool.vendor}</div>
                    </div>
                    {tool.hasNewModel && (
                      <span className="pill" style={{ background: 'linear-gradient(135deg, #6aa6ff, #b388ff)', color: '#0b0c10', fontSize: '0.7rem', fontWeight: 600 }}>
                        New
                      </span>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: 16, borderBottom: '1px solid #202636', fontWeight: 600 }}>Summary</td>
              {selectedTools.map((tool) => (
                <td key={tool.id} style={{ padding: 16, borderBottom: '1px solid #202636' }}>
                  <p className="muted" style={{ margin: 0 }}>{tool.summary}</p>
                </td>
              ))}
            </tr>
            <tr>
              <td style={{ padding: 16, borderBottom: '1px solid #202636', fontWeight: 600 }}>Tags</td>
              {selectedTools.map((tool) => (
                <td key={tool.id} style={{ padding: 16, borderBottom: '1px solid #202636' }}>
                  <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                    {tool.tags?.map((tag) => (
                      <span key={tag} className="pill" style={{ fontSize: '0.8rem' }}>{tag}</span>
                    ))}
                  </div>
                </td>
              ))}
            </tr>
            <tr>
              <td style={{ padding: 16, borderBottom: '1px solid #202636', fontWeight: 600 }}>Models</td>
              {selectedTools.map((tool) => (
                <td key={tool.id} style={{ padding: 16, borderBottom: '1px solid #202636' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {tool.models?.map((model) => (
                      <div key={model.id}>
                        <div style={{ fontWeight: 600, marginBottom: 4 }}>{model.name}</div>
                        <div className="muted" style={{ fontSize: '0.9rem', marginBottom: 4 }}>{model.value}</div>
                        {model.useCases?.length > 0 && (
                          <ul style={{ margin: 0, paddingLeft: 20, fontSize: '0.9rem' }}>
                            {model.useCases.slice(0, 3).map((uc, i) => (
                              <li key={i} className="muted">{uc}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                </td>
              ))}
            </tr>
            <tr>
              <td style={{ padding: 16, borderBottom: '1px solid #202636', fontWeight: 600 }}>Notes</td>
              {selectedTools.map((tool) => (
                <td key={tool.id} style={{ padding: 16, borderBottom: '1px solid #202636' }}>
                  {tool.notes?.length > 0 ? (
                    <ul style={{ margin: 0, paddingLeft: 20 }}>
                      {tool.notes.map((note, i) => (
                        <li key={i} className="muted">{note}</li>
                      ))}
                    </ul>
                  ) : (
                    <span className="muted">—</span>
                  )}
                </td>
              ))}
            </tr>
            <tr>
              <td style={{ padding: 16, fontWeight: 600 }}>Learn More</td>
              {selectedTools.map((tool) => (
                <td key={tool.id} style={{ padding: 16 }}>
                  <Link className="btn" to={`/tool/${tool.id}`} style={{ display: 'inline-block' }}>View Details</Link>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}

