import React from 'react';
import ReactMarkdown from 'react-markdown';

export default function Fundamentals() {
  const [content, setContent] = React.useState('');

  React.useEffect(() => {
    fetch('/src/data/fundamentals.md')
      .then((res) => res.text())
      .then(setContent);
  }, []);

  return (
    <main>
      <article className="card" style={{ padding: 24, maxWidth: 800, margin: '0 auto' }}>
        <ReactMarkdown>{content}</ReactMarkdown>
      </article>
    </main>
  );
}


