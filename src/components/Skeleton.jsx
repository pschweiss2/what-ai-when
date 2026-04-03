export function ToolCardSkeleton({ index = 0 }) {
  const staggerClass = index < 6 ? `stagger-${index + 1}` : '';
  
  return (
    <div className={`glass-card p-5 opacity-0 animate-slide-up ${staggerClass}`}>
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="skeleton w-10 h-10 rounded-lg" />
          <div className="skeleton h-5 w-32 rounded" />
        </div>
        <div className="skeleton h-6 w-16 rounded-full" />
      </div>
      
      <div className="space-y-2 mb-4">
        <div className="skeleton h-4 w-full rounded" />
        <div className="skeleton h-4 w-4/5 rounded" />
      </div>
      
      <div className="flex flex-wrap gap-2">
        <div className="skeleton h-6 w-16 rounded-full" />
        <div className="skeleton h-6 w-20 rounded-full" />
        <div className="skeleton h-6 w-14 rounded-full" />
      </div>
    </div>
  );
}

export function ToolGridSkeleton({ count = 6 }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {Array.from({ length: count }).map((_, i) => (
        <ToolCardSkeleton key={i} index={i} />
      ))}
    </div>
  );
}

export function PageSkeleton() {
  return (
    <div className="animate-fade-in">
      <div className="skeleton h-8 w-64 rounded mb-6" />
      <div className="skeleton h-12 w-full max-w-md rounded-lg mb-6" />
      <ToolGridSkeleton count={6} />
    </div>
  );
}
