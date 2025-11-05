import React from 'react';
import { useNavigate } from 'react-router-dom';
import PersonaSelector from '../components/PersonaSelector.jsx';
import ToolCard from '../components/ToolCard.jsx';
import { personas, tools } from '../data/tools.js';

export default function HomePage() {
  const navigate = useNavigate();
  const [personaId, setPersonaId] = React.useState(personas[0]?.id ?? 'all');
  const [query, setQuery] = React.useState('');
  const [selectedForComparison, setSelectedForComparison] = React.useState([]);

  const filtered = React.useMemo(() => {
    const base = personaId === 'all' ? tools : tools.filter((t) => !t.personas || t.personas.includes(personaId));
    if (!query.trim()) return base;
    const q = query.toLowerCase();
    return base.filter((t) => {
      const hay = [t.name, t.vendor, t.summary, ...(t.tags || [])].join(' ').toLowerCase();
      return hay.includes(q);
    });
  }, [personaId, query]);

  const handleCompareChange = React.useCallback((toolId, isSelected) => {
    console.log(`[HomePage] handleCompareChange called - toolId:`, toolId, 'isSelected:', isSelected);
    setSelectedForComparison((prev) => {
      console.log(`[HomePage] State update - prev:`, prev, 'prev.includes:', prev.includes(toolId));
      let next;
      if (isSelected) {
        next = prev.includes(toolId) ? prev : [...prev, toolId];
      } else {
        next = prev.filter((id) => id !== toolId);
      }
      console.log(`[HomePage] State update - next:`, next);
      return next;
    });
  }, []);

  React.useEffect(() => {
    console.log(`[HomePage] Render - selectedForComparison:`, selectedForComparison);
    filtered.forEach((tool) => {
      const isIncluded = selectedForComparison.includes(tool.id);
      console.log(`[HomePage] Tool ${tool.id} - isIncluded:`, isIncluded);
    });
  });

  const handleCompareClick = () => {
    const ids = selectedForComparison.join(',');
    navigate(`/compare?tools=${ids}`);
  };

  return (
    <main>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, marginBottom: 16 }}>
        <h2 style={{ margin: 0 }}>Choose your persona</h2>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <PersonaSelector personas={personas} value={personaId} onChange={setPersonaId} />
          {selectedForComparison.length > 0 && (
            <button className="btn" onClick={handleCompareClick} style={{ background: 'linear-gradient(135deg, #6aa6ff, #b388ff)', color: '#0b0c10', border: 'none', fontWeight: 600 }}>
              Compare ({selectedForComparison.length})
            </button>
          )}
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
        <input
          aria-label="Search tools"
          placeholder="Search by name, vendor, or tag..."
          className="select"
          style={{ flex: 1 }}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      <section className="grid" aria-label="AI tools">
        {filtered.map((tool) => (
          <ToolCard 
            key={tool.id} 
            tool={tool} 
            onCompareChange={handleCompareChange}
            isComparing={selectedForComparison.includes(tool.id)}
          />
        ))}
      </section>
    </main>
  );
}


