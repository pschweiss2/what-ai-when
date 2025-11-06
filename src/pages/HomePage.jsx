import React from 'react';
import { useNavigate } from 'react-router-dom';
import PersonaSelector from '../components/PersonaSelector.jsx';
import ToolCard from '../components/ToolCard.jsx';
import { personas, tools, sortByCountry, sortByVendor, sortByName, sortByFreeTier } from '../data/tools.js';

export default function HomePage() {
  const navigate = useNavigate();
  const [personaId, setPersonaId] = React.useState(personas[0]?.id ?? 'all');
  const [query, setQuery] = React.useState('');
  const [selectedForComparison, setSelectedForComparison] = React.useState([]);
  const [sortKey, setSortKey] = React.useState('default');

  const filtered = React.useMemo(() => {
    let base = personaId === 'all' ? tools : tools.filter((t) => !t.personas || t.personas.includes(personaId));
    if (query.trim()) {
      const q = query.toLowerCase();
      base = base.filter((t) => {
        const hay = [t.name, t.vendor, t.summary, ...(t.tags || [])].join(' ').toLowerCase();
        return hay.includes(q);
      });
    }
    switch (sortKey) {
      case 'country':
        return sortByCountry(base);
      case 'vendor':
        return sortByVendor(base);
      case 'name':
        return sortByName(base);
      case 'freeTier':
        return sortByFreeTier(base);
      default:
        return base;
    }
  }, [personaId, query, sortKey]);

  const handleCompareChange = React.useCallback((toolId, isSelected) => {
    setSelectedForComparison((prev) => {
      if (isSelected) {
        return prev.includes(toolId) ? prev : [...prev, toolId];
      } else {
        return prev.filter((id) => id !== toolId);
      }
    });
  }, []);

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
        <select
          aria-label="Sort tools"
          className="select"
          style={{ minWidth: 160 }}
          value={sortKey}
          onChange={e => setSortKey(e.target.value)}
        >
          <option value="default">Sort: Default</option>
          <option value="country">Sort by Country A-Z</option>
          <option value="vendor">Sort by Vendor A-Z </option>
          <option value="name">Sort by Name A-Z </option>
          <option value="freeTier">Sort by Free Tier</option>
        </select>
      </div>

      <section
        className="grid"
        aria-label="AI tools"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px',
          alignItems: 'stretch',
          marginBottom: 32,
        }}
      >
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


