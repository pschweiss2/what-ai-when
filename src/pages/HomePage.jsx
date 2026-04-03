import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, ArrowRightLeft, ChevronDown } from 'lucide-react';
import PersonaSelector from '../components/PersonaSelector.jsx';
import ToolCard from '../components/ToolCard.jsx';
import { personas, tools, sortByCountry, sortByVendor, sortByName, sortByFreeTier } from '../data/index.js';

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
    <main className="animate-fade-in">
      {/* Header Section */}
      <div className="glass rounded-xl p-6 mb-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold gradient-text mb-1">
              Choose your persona
            </h1>
            <p className="text-muted text-sm">
              Filter AI tools tailored to your role and needs
            </p>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="relative">
              <PersonaSelector personas={personas} value={personaId} onChange={setPersonaId} />
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted pointer-events-none" />
            </div>
            
            {selectedForComparison.length > 0 && (
              <button 
                className="btn-primary" 
                onClick={handleCompareClick}
              >
                <ArrowRightLeft className="w-4 h-4" />
                Compare ({selectedForComparison.length})
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Search & Sort */}
      <div className="flex flex-col sm:flex-row items-center gap-3 mb-8">
        <div className="relative flex-1 w-full">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
          <input
            aria-label="Search tools"
            placeholder="Search by name, vendor, or tag..."
            className="input pl-11"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        
        <div className="relative w-full sm:w-auto">
          <select
            aria-label="Sort tools"
            className="select w-full sm:w-48"
            value={sortKey}
            onChange={e => setSortKey(e.target.value)}
          >
            <option value="default">Sort: Default</option>
            <option value="country">Sort by Country A-Z</option>
            <option value="vendor">Sort by Vendor A-Z</option>
            <option value="name">Sort by Name A-Z</option>
            <option value="freeTier">Sort by Free Tier</option>
          </select>
        </div>
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between mb-4">
        <p className="text-muted text-sm">
          Showing <span className="text-text font-medium">{filtered.length}</span> tools
          {personaId !== 'all' && (
            <span className="ml-1">
              for <span className="text-accent">{personas.find(p => p.id === personaId)?.name}</span>
            </span>
          )}
        </p>
      </div>

      {/* Tool Grid */}
      <section
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        aria-label="AI tools"
      >
        {filtered.map((tool, index) => (
          <ToolCard 
            key={tool.id} 
            tool={tool} 
            onCompareChange={handleCompareChange}
            isComparing={selectedForComparison.includes(tool.id)}
            index={index}
          />
        ))}
      </section>

      {/* Empty State */}
      {filtered.length === 0 && (
        <div className="glass-card p-12 text-center">
          <p className="text-muted text-lg mb-2">No tools found</p>
          <p className="text-muted text-sm">Try adjusting your search or persona filter</p>
        </div>
      )}
    </main>
  );
}


