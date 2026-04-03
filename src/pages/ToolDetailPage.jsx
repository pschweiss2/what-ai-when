import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Building2, Globe, Sparkles, Zap } from 'lucide-react';
import { tools } from '../data/index.js';
import { VendorIcon, CountryFlag, getIconForTag } from '../components/Icons.jsx';

export default function ToolDetailPage() {
  const { toolId } = useParams();
  const tool = tools.find((t) => t.id === toolId);

  if (!tool) {
    return (
      <main className="animate-fade-in">
        <div className="glass-card p-8 text-center">
          <p className="text-muted text-lg mb-4">Tool not found.</p>
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
      {/* Back Button */}
      <Link className="btn mb-6 inline-flex" to="/">
        <ArrowLeft className="w-4 h-4" />
        Back to Home
      </Link>

      {/* Main Card */}
      <div className="glass-card p-6 lg:p-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
          <div className="flex items-start gap-4">
            <VendorIcon vendor={tool.vendor} className="w-12 h-12 rounded-xl" />
            <div>
              <div className="flex items-center gap-3 mb-1">
                <h1 className="text-2xl font-bold text-text">{tool.name}</h1>
                {tool.hasNewModel && (
                  <span className="pill-new flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3" />
                    New Model
                  </span>
                )}
              </div>
              <div className="flex items-center gap-3">
                <span className="pill text-sm">
                  <Building2 className="w-3.5 h-3.5" />
                  {tool.vendor}
                </span>
                <span className="pill text-sm">
                  <CountryFlag country={tool.country} />
                  <span className="ml-1">{tool.country}</span>
                </span>
                {tool.hasFreeTier && (
                  <span className="pill-free flex items-center gap-1">
                    <Zap className="w-3 h-3" />
                    Free Tier
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="prose prose-invert max-w-none mb-8">
          <p className="text-lg text-text/90 leading-relaxed">{tool.description || tool.summary}</p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {tool.tags?.map((tag) => {
            const Icon = getIconForTag(tag);
            return (
              <span key={tag} className="tag flex items-center gap-1.5 px-3 py-1.5">
                <Icon className="w-3.5 h-3.5" />
                {tag}
              </span>
            );
          })}
        </div>

        {/* Models Section */}
        {tool.models && tool.models.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xl font-bold gradient-text mb-4">Models</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {tool.models.map((model) => (
                <div key={model.id} className="glass rounded-lg p-5">
                  <h3 className="font-semibold text-text mb-2">{model.name}</h3>
                  <p className="text-sm text-muted mb-4">{model.value}</p>
                  {model.useCases?.length > 0 && (
                    <div>
                      <p className="text-xs text-muted uppercase tracking-wider mb-2">Use Cases</p>
                      <ul className="space-y-2">
                        {model.useCases.map((useCase, i) => (
                          <li key={i} className="text-sm text-text/80 flex items-start gap-2">
                            <span className="text-accent mt-1">•</span>
                            {useCase}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Notes Section */}
        {tool.notes?.length > 0 && (
          <div>
            <h2 className="text-xl font-bold gradient-text mb-4">Important Notes</h2>
            <div className="glass rounded-lg p-5">
              <ul className="space-y-3">
                {tool.notes.map((note, i) => (
                  <li key={i} className="text-sm text-text/80 flex items-start gap-3">
                    <span className="text-warn mt-0.5">⚠</span>
                    <span dangerouslySetInnerHTML={{ 
                      __html: note.replace(/\*\*(.*?)\*\*/g, '<strong class="text-text">$1</strong>') 
                    }} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}


