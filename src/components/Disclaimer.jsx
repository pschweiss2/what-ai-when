import React from 'react';
import { Info } from 'lucide-react';

export default function Disclaimer() {
  return (
    <aside className="glass border-l-4 border-l-warn rounded-lg p-4 mb-6" role="note" aria-label="Disclaimer">
      <div className="flex items-start gap-3">
        <Info className="w-5 h-5 text-warn flex-shrink-0 mt-0.5" />
        <p className="text-sm text-text/90">
          <span className="font-semibold text-warn">Note:</span> These recommendations are based on research and real-world experience. They are suggestions only and do not necessarily represent the opinions of the respective companies.
        </p>
      </div>
    </aside>
  );
}


