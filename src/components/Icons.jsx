import { Sparkles, Brain, Code, Search, MessageSquare, Zap, Shield, Database, Globe, Lock, Palette, FileText } from 'lucide-react';

const iconMap = {
  'chat': MessageSquare,
  'conversational-ai': MessageSquare,
  'writing': FileText,
  'text-generation': FileText,
  'coding': Code,
  'code-generation': Code,
  'multimodal': Sparkles,
  'image-generation': Palette,
  'productivity': Zap,
  'research': Search,
  'reasoning': Brain,
  'data-analysis': Database,
  'search': Search,
  'search-engines': Search,
  'api-available': Globe,
  'local': Lock,
  'privacy': Shield,
  'open': Globe,
  'fine-tune': Brain,
  'long-context': Database,
  'business': Briefcase,
  'enterprise': Briefcase,
};

function Briefcase(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect width="20" height="14" x="2" y="7" rx="2" ry="2"/>
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
    </svg>
  );
}

export function getIconForTag(tag) {
  const Icon = iconMap[tag.toLowerCase()] || Zap;
  return Icon;
}

export function VendorIcon({ vendor, className = "w-5 h-5" }) {
  const vendorIcons = {
    'OpenAI': () => <span className="text-accent font-bold text-xs">AI</span>,
    'Anthropic': () => <span className="text-accent-secondary font-bold text-xs">Cl</span>,
    'Google': () => <span className="text-success font-bold text-xs">G</span>,
    'Meta': () => <span className="text-blue-500 font-bold text-xs">M</span>,
    'Microsoft': () => <span className="text-blue-400 font-bold text-xs">MS</span>,
    'Perplexity AI': () => <span className="text-teal-400 font-bold text-xs">P</span>,
  };
  
  const Icon = vendorIcons[vendor];
  if (Icon) {
    return <div className={`${className} flex items-center justify-center bg-panel rounded-md border border-border`}><Icon /></div>;
  }
  return <div className={`${className} flex items-center justify-center bg-panel rounded-md border border-border text-muted text-xs font-bold`}>{vendor.slice(0, 2).toUpperCase()}</div>;
}

export function CountryFlag({ country, className = "" }) {
  const flags = {
    'USA': '🇺🇸',
    'UK': '🇬🇧',
    'France': '🇫🇷',
    'China': '🇨🇳',
    'Australia': '🇦🇺',
    'Denmark': '🇩🇰',
  };
  
  return <span className={`text-lg ${className}`}>{flags[country] || '🌍'}</span>;
}
