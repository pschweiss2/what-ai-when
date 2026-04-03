import React from 'react';
import { User } from 'lucide-react';

export default function PersonaSelector({ personas, value, onChange }) {
  return (
    <div className="relative">
      <div className="flex items-center gap-2 bg-panel border border-border rounded-lg px-3 py-2.5">
        <User className="w-4 h-4 text-muted" />
        <select 
          className="bg-transparent text-text font-medium focus:outline-none cursor-pointer appearance-none pr-6"
          value={value} 
          onChange={(e) => onChange(e.target.value)}
        >
          {personas.map((p) => (
            <option key={p.id} value={p.id}>{p.name}</option>
          ))}
        </select>
      </div>
    </div>
  );
}


