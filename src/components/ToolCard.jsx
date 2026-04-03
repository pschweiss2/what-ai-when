import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';
import { VendorIcon, CountryFlag, getIconForTag } from './Icons.jsx';

export default function ToolCard({ tool, onCompareChange, isComparing, index = 0 }) {
  const handleCheckboxChange = (e) => {
    e.stopPropagation();
    const newValue = !isComparing;
    onCompareChange?.(tool.id, newValue);
  };

  const staggerClass = index < 6 ? `stagger-${index + 1}` : '';

  return (
    <div className={`glass-card p-5 relative group opacity-0 animate-slide-up ${staggerClass}`}>
      {/* Compare Checkbox */}
      <div 
        className="absolute bottom-4 right-4 z-10"
        onClick={(e) => e.stopPropagation()}
        data-checkbox-container
      >
        <button
          onClick={handleCheckboxChange}
          className={`w-6 h-6 rounded-md border-2 flex items-center justify-center transition-all duration-200 ${
            isComparing 
              ? 'bg-gradient-to-r from-accent to-accent-secondary border-accent' 
              : 'bg-panel border-border hover:border-accent/50'
          }`}
          aria-label={`Compare ${tool.name}`}
        >
          {isComparing && (
            <svg className="w-4 h-4 text-bg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          )}
        </button>
      </div>

      <Link 
        to={`/tool/${tool.id}`} 
        aria-label={`${tool.name} details`}
        className="block pb-8"
        onClick={(e) => {
          if (e.target.closest('[data-checkbox-container]')) {
            e.preventDefault();
          }
        }}
      >
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-3">
            <VendorIcon vendor={tool.vendor} />
            <h3 className="text-lg font-semibold text-text">
              {tool.name}
            </h3>
          </div>
          
          {tool.hasNewModel && (
            <span className="pill-new flex items-center gap-1.5">
              <Sparkles className="w-3 h-3" />
              New
            </span>
          )}
        </div>

        {/* Vendor & Country */}
        <div className="flex items-center gap-2 mb-3">
          <span className="pill text-xs">
            <CountryFlag country={tool.country} className="text-sm" />
            <span className="ml-1">{tool.vendor}</span>
          </span>
          {tool.hasFreeTier && (
            <span className="pill-free">Free</span>
          )}
        </div>

        {/* Summary */}
        <p className="text-muted text-sm leading-relaxed mb-4 line-clamp-2">
          {tool.summary}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tool.tags?.slice(0, 4).map((tag) => {
            const Icon = getIconForTag(tag);
            return (
              <span key={tag} className="tag flex items-center gap-1">
                <Icon className="w-3 h-3" />
                {tag}
              </span>
            );
          })}
          {tool.tags?.length > 4 && (
            <span className="tag">+{tool.tags.length - 4}</span>
          )}
        </div>
      </Link>
    </div>
  );
}
