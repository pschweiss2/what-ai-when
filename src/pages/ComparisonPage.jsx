import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { ArrowLeft, Sparkles, Building2, Tag, FileText, Lightbulb, ExternalLink } from 'lucide-react';
import { tools } from '../data/index.js';
import { CountryFlag } from '../components/Icons.jsx';

export default function ComparisonPage() {
  const [searchParams] = useSearchParams();
  const toolIds = searchParams.get('tools')?.split(',').filter(Boolean) || [];
  const selectedTools = tools.filter((t) => toolIds.includes(t.id));

  if (selectedTools.length === 0) {
    return (
      <main className="animate-fade-in">
        <div className="glass-card p-8 text-center">
          <p className="text-muted text-lg mb-4">No tools selected for comparison.</p>
          <Link className="btn" to="/">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="animate-fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold gradient-text">Tool Comparison</h1>
          <p className="text-muted text-sm mt-1">Comparing {selectedTools.length} AI tools</p>
        </div>
        <Link className="btn" to="/">
          <ArrowLeft className="w-4 h-4" />
          Back
        </Link>
      </div>

      {/* Comparison Table */}
      <div className="overflow-x-auto -mx-4 px-4">
        <div className="glass-card min-w-[600px] overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-panel border-b border-border">
                <th className="text-left p-4 font-semibold text-text sticky left-0 bg-panel z-10">Feature</th>
                {selectedTools.map((tool) => (
                  <th key={tool.id} className="text-left p-4 min-w-[220px]">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-text">{tool.name}</span>
                      {tool.hasNewModel && (
                        <span className="pill-new text-xs flex items-center gap-1">
                          <Sparkles className="w-3 h-3" />
                          New
                        </span>
                      )}
                    </div>
                    <div className="text-xs text-muted mt-1 flex items-center gap-1">
                      <Building2 className="w-3 h-3" />
                      {tool.vendor}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* Summary Row */}
              <tr className="border-b border-border">
                <td className="p-4 font-medium text-text sticky left-0 bg-card z-10">
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-accent" />
                    Summary
                  </div>
                </td>
                {selectedTools.map((tool) => (
                  <td key={tool.id} className="p-4 align-top">
                    <p className="text-sm text-muted leading-relaxed">{tool.summary}</p>
                  </td>
                ))}
              </tr>

              {/* Free Tier Row */}
              <tr className="border-b border-border">
                <td className="p-4 font-medium text-text sticky left-0 bg-card z-10">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-success" />
                    Free Tier
                  </div>
                </td>
                {selectedTools.map((tool) => (
                  <td key={tool.id} className="p-4">
                    {tool.hasFreeTier ? (
                      <span className="pill-free text-xs">Available</span>
                    ) : (
                      <span className="text-muted text-sm">—</span>
                    )}
                  </td>
                ))}
              </tr>

              {/* Country Row */}
              <tr className="border-b border-border">
                <td className="p-4 font-medium text-text sticky left-0 bg-card z-10">Origin</td>
                {selectedTools.map((tool) => (
                  <td key={tool.id} className="p-4">
                    <div className="flex items-center gap-2">
                      <CountryFlag country={tool.country} />
                      <span className="text-sm text-muted">{tool.country}</span>
                    </div>
                  </td>
                ))}
              </tr>

              {/* Tags Row */}
              <tr className="border-b border-border">
                <td className="p-4 font-medium text-text sticky left-0 bg-card z-10">
                  <div className="flex items-center gap-2">
                    <Tag className="w-4 h-4 text-accent-secondary" />
                    Tags
                  </div>
                </td>
                {selectedTools.map((tool) => (
                  <td key={tool.id} className="p-4 align-top">
                    <div className="flex flex-wrap gap-1">
                      {tool.tags?.map((tag) => (
                        <span key={tag} className="tag text-xs">{tag}</span>
                      ))}
                    </div>
                  </td>
                ))}
              </tr>

              {/* Models Row */}
              <tr className="border-b border-border">
                <td className="p-4 font-medium text-text sticky left-0 bg-card z-10 align-top">
                  <div className="flex items-center gap-2">
                    <Lightbulb className="w-4 h-4 text-warn" />
                    Models
                  </div>
                </td>
                {selectedTools.map((tool) => (
                  <td key={tool.id} className="p-4 align-top">
                    <div className="space-y-3">
                      {tool.models?.map((model) => (
                        <div key={model.id} className="border-l-2 border-accent/30 pl-3">
                          <p className="font-medium text-sm text-text">{model.name}</p>
                          <p className="text-xs text-muted line-clamp-2">{model.value}</p>
                        </div>
                      ))}
                    </div>
                  </td>
                ))}
              </tr>

              {/* Notes Row */}
              <tr className="border-b border-border">
                <td className="p-4 font-medium text-text sticky left-0 bg-card z-10 align-top">Notes</td>
                {selectedTools.map((tool) => (
                  <td key={tool.id} className="p-4 align-top">
                    {tool.notes?.length > 0 ? (
                      <ul className="space-y-2">
                        {tool.notes.slice(0, 3).map((note, i) => (
                          <li key={i} className="text-xs text-muted flex items-start gap-1.5">
                            <span className="text-warn">•</span>
                            <span className="line-clamp-2">{note}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <span className="text-muted text-sm">—</span>
                    )}
                  </td>
                ))}
              </tr>

              {/* Actions Row */}
              <tr>
                <td className="p-4 font-medium text-text sticky left-0 bg-card z-10">Details</td>
                {selectedTools.map((tool) => (
                  <td key={tool.id} className="p-4">
                    <Link 
                      to={`/tool/${tool.id}`} 
                      className="btn text-sm inline-flex"
                    >
                      View Full Details
                      <ExternalLink className="w-3.5 h-3.5" />
                    </Link>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}

