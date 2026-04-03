import React from 'react';
import ReactMarkdown from 'react-markdown';
import { BookOpen, GraduationCap } from 'lucide-react';

export default function Fundamentals() {
  const [content, setContent] = React.useState('');
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    fetch('/src/data/fundamentals.md')
      .then((res) => res.text())
      .then((text) => {
        setContent(text);
        setLoading(false);
      })
      .catch(() => {
        setContent('# Error\\n\\nFailed to load fundamentals content.');
        setLoading(false);
      });
  }, []);

  return (
    <main className="animate-fade-in">
      {/* Header */}
      <div className="glass rounded-xl p-6 mb-8">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-accent-secondary flex items-center justify-center">
            <GraduationCap className="w-6 h-6 text-bg" />
          </div>
          <div>
            <h1 className="text-2xl font-bold gradient-text">AI Fundamentals</h1>
            <p className="text-muted text-sm">Learn the basics of AI tools and how to choose the right one</p>
          </div>
        </div>
      </div>

      {/* Content */}
      {loading ? (
        <div className="glass-card p-8 space-y-4">
          <div className="skeleton h-8 w-3/4 rounded" />
          <div className="skeleton h-4 w-full rounded" />
          <div className="skeleton h-4 w-5/6 rounded" />
          <div className="skeleton h-4 w-4/5 rounded" />
        </div>
      ) : (
        <article className="glass-card p-6 lg:p-8 max-w-4xl mx-auto prose prose-invert prose-headings:gradient-text">
          <ReactMarkdown
            components={{
              h1: ({ children }) => <h1 className="text-3xl font-bold gradient-text mb-6 mt-0">{children}</h1>,
              h2: ({ children }) => <h2 className="text-xl font-semibold text-text mt-8 mb-4 border-b border-border pb-2">{children}</h2>,
              p: ({ children }) => <p className="text-text/80 leading-relaxed mb-4">{children}</p>,
              ul: ({ children }) => <ul className="space-y-2 mb-4 list-disc list-inside text-text/80">{children}</ul>,
              li: ({ children }) => <li className="text-text/80">{children}</li>,
              code: ({ children }) => <code className="bg-panel px-1.5 py-0.5 rounded text-accent text-sm">{children}</code>,
            }}
          >
            {content}
          </ReactMarkdown>
        </article>
      )}
    </main>
  );
}


