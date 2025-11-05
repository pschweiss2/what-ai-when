import React from 'react';

export default function Fundamentals() {
  return (
    <main>
      <article className="card" style={{ padding: 24 }}>
        <h2 style={{ marginTop: 0 }}>AI Fundamentals for Augmentation</h2>
        <p className="muted">
          This site focuses on how AI can augment human work and life — helping you
          do more with less friction, not replacing people. Below are quick fundamentals
          to guide practical adoption.
        </p>

        <h3>Core concepts</h3>
        <ul>
          <li><strong>Generative models</strong>: Create text, images, and code from prompts.</li>
          <li><strong>Reasoning</strong>: Step-by-step problem solving; great for planning and analysis.</li>
          <li><strong>Multimodal</strong>: Understands text plus images (and sometimes audio/video).</li>
          <li><strong>Context window</strong>: How much info a model can consider at once.</li>
        </ul>

        <h3>Augmentation patterns</h3>
        <ul>
          <li><strong>Draft then refine</strong>: Let AI produce a first pass; you edit with judgment.</li>
          <li><strong>Summarize and extract</strong>: Pull key points, tasks, and decisions from docs and meetings.</li>
          <li><strong>Co-pilot for creation</strong>: Use AI for outlines, code scaffolds, and design ideas.</li>
          <li><strong>Guardrails</strong>: Verify facts and keep sensitive data out unless policies allow.</li>
        </ul>

        <h3>Good prompts include</h3>
        <ul>
          <li>Role and audience (who it’s for)</li>
          <li>Goal and constraints (tone, length, format)</li>
          <li>Reference material (snippets, examples)</li>
          <li>Evaluation criteria (what “good” looks like)</li>
        </ul>

        <h3>Responsible use</h3>
        <ul>
          <li>Check outputs for accuracy; cite or link sources when possible.</li>
          <li>Follow your organization’s data policies.</li>
          <li>Disclose AI assistance when appropriate.</li>
        </ul>
      </article>
    </main>
  );
}


