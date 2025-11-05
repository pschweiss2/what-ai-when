export const personas = [
  { id: 'all', name: 'All tools' },
  { id: 'general', name: 'General User' },
  { id: 'pm', name: 'Product Manager' },
  { id: 'developer', name: 'Developer' },
  { id: 'analyst', name: 'Data/Business Analyst' },
  { id: 'designer', name: 'Designer' },
];

export const tools = [
  {
    id: 'openai-chatgpt',
    name: 'ChatGPT',
    vendor: 'OpenAI',
    summary: 'General-purpose conversational assistant with broad capabilities.',
    description: 'Suitable for ideation, drafting, coding assistance, and reasoning tasks. Strong tool ecosystem and integrations.',
    tags: ['chat', 'reasoning', 'coding', 'writing'],
    personas: ['general', 'pm', 'developer', 'analyst', 'designer'],
    hasNewModel: true,
    models: [
      {
        id: 'o4-mini',
        name: 'o4-mini',
        value: 'Fast reasoning with good cost-performance balance for everyday tasks.',
        useCases: ['Ideation and drafting', 'Light coding help', 'Summarization', 'Customer support macros'],
      },
      {
        id: 'gpt-4o',
        name: 'GPT-4o',
        value: 'Multimodal model for text, vision, and some audio scenarios.',
        useCases: ['Analyzing images or charts', 'Creating content from screenshots', 'UI/UX review with visuals'],
      },
    ],
    notes: ['Great generalist; verify sensitive outputs.'],
  },
  {
    id: 'anthropic-claude',
    name: 'Claude',
    vendor: 'Anthropic',
    summary: 'Helpful, honest, and harmless assistant with strong writing quality.',
    description: 'Often favored for long-form writing, analysis, and instruction following. Strong at handling long contexts.',
    tags: ['writing', 'analysis', 'long-context'],
    personas: ['general', 'pm', 'analyst', 'designer'],
    models: [
      {
        id: 'claude-3-5-sonnet',
        name: 'Claude 3.5 Sonnet',
        value: 'Balanced performance for reasoning and high-quality prose.',
        useCases: ['Policy and strategy drafts', 'Analytical memos', 'Research synthesis'],
      },
      {
        id: 'claude-3-5-haiku',
        name: 'Claude 3.5 Haiku',
        value: 'Faster, more affordable model for everyday tasks.',
        useCases: ['Light drafting', 'Short analyses', 'Expanding notes'],
      },
    ],
    notes: ['Excels at long documents; check citations and sources.'],
  },
  {
    id: 'google-gemini',
    name: 'Gemini',
    vendor: 'Google',
    summary: 'Google’s family of multimodal models with strong integrations.',
    description: 'Useful if you work in Google ecosystem (Drive, Docs, Sheets). Multimodal strengths for images and docs.',
    tags: ['multimodal', 'productivity', 'ecosystem'],
    personas: ['general', 'pm', 'analyst', 'designer', 'developer'],
    models: [
      {
        id: 'gemini-1-5-pro',
        name: 'Gemini 1.5 Pro',
        value: 'Balanced multimodal performance with long-context support.',
        useCases: ['Extracting from PDFs', 'Sheet formulas with AI assist', 'Image-to-text insights'],
      },
      {
        id: 'gemini-1-5-flash',
        name: 'Gemini 1.5 Flash',
        value: 'Fast, lower-cost for frequent simple prompts.',
        useCases: ['Simple drafts', 'Quick Q&A', 'Snippet generation'],
      },
    ],
    notes: ['Consider for Google Workspace heavy users.'],
  },
  {
    id: 'meta-llama',
    name: 'Meta Llama',
    vendor: 'Meta',
    summary: 'Open models available via many providers and local runtimes.',
    description: 'Good for local/private deployments and fine-tuning experimentation.',
    tags: ['open', 'local', 'fine-tune'],
    personas: ['developer', 'analyst'],
    models: [
      {
        id: 'llama-3-1-70b',
        name: 'Llama 3.1 70B',
        value: 'Strong open model for coding and general tasks.',
        useCases: ['Local code assistant', 'RAG experiments', 'Private deployments'],
      },
      {
        id: 'llama-3-1-8b',
        name: 'Llama 3.1 8B',
        value: 'Lightweight for on-device or constrained environments.',
        useCases: ['Mobile prototypes', 'Edge inference', 'Cost-aware workloads'],
      },
    ],
    notes: ['Mind provider differences and quantization trade-offs.'],
  },
];


