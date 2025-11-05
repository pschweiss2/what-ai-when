import React from 'react';

export default function PersonaSelector({ personas, value, onChange }) {
  return (
    <label style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <span className="pill">Persona</span>
      <select className="select" value={value} onChange={(e) => onChange(e.target.value)}>
        {personas.map((p) => (
          <option key={p.id} value={p.id}>{p.name}</option>
        ))}
      </select>
    </label>
  );
}


