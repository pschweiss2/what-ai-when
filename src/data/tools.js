export const personas = [
  { id: 'all', name: 'All tools' },
  { id: 'general', name: 'General User' },
  { id: 'pm', name: 'Product Manager' },
  { id: 'developer', name: 'Developer' },
  { id: 'analyst', name: 'Data/Business Analyst' },
  { id: 'designer', name: 'Designer' },
  { id: 'researcher', name: 'Researcher' },
  { id: 'student', name: 'Student' },
  { id: 'business', name: 'Business' },
];

export const tools = [
{
  "id": "openai-chatgpt",
  "name": "ChatGPT",
  "vendor": "OpenAI",
  "summary": "An AI conversational assistant that generates human-like responses to text, image, audio and multimodal prompts.",
  "description": "ChatGPT excels at conversational interaction across text (and increasingly audio/vision) with follow-up questions, edits and clarifications. It differentiates itself by supporting multimodal inputs (images, voice) and integration via API or custom GPTs, making it useful for writing, coding, research, and everyday productivity. Ideal for users from general consumers to professionals (writers, developers, analysts) who need an accessible AI assistant to accelerate tasks, brainstorm ideas or automate routine workflows.",
  "tags": ["chat", "writing", "coding", "multimodal", "productivity", "api-available"],
  "personas": ["general", "writer", "developer", "analyst", "student"],
  "hasNewModel": true,
  "models": [
    {
      "id": "gpt-5",
      "name": "GPT-5",
      "value": "Flagship unified reasoning model released August 2025 offering expert-level performance across domains.  [oai_citation:0‡OpenAI](https://openai.com/gpt-5/?utm_source=chatgpt.com)",
      "useCases": [
        "Analyze a large multimodal dataset (text + images + audio) for research insights.",
        "Develop and debug a full-stack web application from a high-level prompt.",
        "Assist with domain-specific expert tasks like medical imaging interpretation or complex legal analysis."
      ]
    },
    {
      "id": "gpt-4o",
      "name": "GPT-4o",
      "value": "Previously flagship multimodal model before GPT-5 that balances text, vision, and audio with fast throughput.  [oai_citation:1‡Wikipedia](https://en.wikipedia.org/wiki/GPT-4o?utm_source=chatgpt.com)",
      "useCases": [
        "Upload a photo of a circuit diagram and ask for explanation or debugging steps.",
        "Have a real-time voice-based conversation for brainstorming and planning.",
        "Translate and summarise a foreign-language document including embedded visuals."
      ]
    }
  ],
  "notes": [
    "Free tier exists but has usage limits, and newer models (like GPT-5) may initially be behind paid tiers.  [oai_citation:2‡OpenAI](https://openai.com/index/gpt-5-new-era-of-work/?utm_source=chatgpt.com)",
    "Even the most advanced models can hallucinate or produce incorrect responses; verification is recommended for factual, legal or medical content.",
    "Access to certain newer models or features (e.g., GPT-5 Pro, extended reasoning) may require higher-tier subscriptions or enterprise/API access.  [oai_citation:3‡OpenAI](https://openai.com/index/introducing-gpt-5/?utm_source=chatgpt.com)"
  ]
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
  "id": "google-gemini",
  "name": "Google Gemini",
  "vendor": "Google",
  "summary": "Google's powerful, multimodal AI assistant and model family designed for generation, reasoning, and coding across various applications.",
  "description": "Gemini's core differentiator is its native **multimodality** (text, code, image, audio, video) and deep integration across the Google ecosystem (Search, Workspace, Cloud). It excels in complex, multi-step reasoning and long-context processing, making it ideal for tasks requiring detailed analysis of large files or data, as well as powering developer tools and enterprise-wide automation.",
  "tags": [
    "chat",
    "reasoning",
    "coding",
    "multimodal",
    "api-available",
    "long-context"
  ],
  "personas": [
    "general",
    "developer",
    "researcher",
    "business",
    "analyst"
  ],
  "hasNewModel": false,
  "models": [
    {
      "id": "gemini-2-5-pro",
      "name": "Gemini 2.5 Pro",
      "value": "This is Google's most capable model, offering state-of-the-art performance for complex tasks, advanced reasoning, and a massive 1M token context window.",
      "useCases": [
        "Analyzing a 500-page legal document for key clauses and summarization",
        "Generating complex, multi-file code for a new web application feature",
        "Developing an AI agent that orchestrates steps across multiple apps like Gmail and Calendar",
        "Performing deep research by sifting through hundreds of websites and files for a comprehensive report"
      ]
    },
    {
      "id": "gemini-2-5-flash",
      "name": "Gemini 2.5 Flash",
      "value": "An extremely fast, cost-efficient, and lightweight model designed for high-frequency tasks where speed is critical, while still retaining strong multimodal capabilities.",
      "useCases": [
        "Building a high-throughput, low-latency customer service chatbot (for text and voice)",
        "Quickly analyzing images and video frames to detect specific objects or activities",
        "Generating quick draft emails or presentation outlines within Google Workspace apps",
        "Translating real-time conversations in Google Meet with high speed and accuracy"
      ]
    }
  ],
  "notes": [
    "Gemini Advanced access is bundled with the **Google One AI Premium** subscription ($19.99/month), which includes 2TB of storage and other Google benefits.",
    "The free tier typically uses a capable, but slightly lower-tier model (e.g., Gemini 2.5 Flash) and may have stricter daily usage limits.",
    "Gemini models can be accessed via the user-facing chat app or the API for developers through **Google AI for Developers** (for prototyping) and **Vertex AI** (for enterprise-scale production)."
  ]
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
  {
    id: 'perplexity-ai',
    name: 'Perplexity AI',
    vendor: 'Perplexity AI, Inc.',
    summary: 'An AI-powered answer engine providing instant, credible, and cited responses to user queries.',
    description: 'Perplexity AI is a dynamic multi-model assistant that excels at search-grounded reasoning, live web access, and complex research tasks, including document analysis and summarization. Its core differentiator is automatic model routing, enabling the blending of cutting-edge language models depending on task complexity, speed, and factuality needs. Ideal for users requiring up-to-date answers with verifiable sources, Perplexity supports research, business analysis, and decision-making workflows for both free and paying users.',
    tags: ['chat', 'reasoning', 'analysis', 'research', 'productivity', 'api-available'],
    personas: ['general', 'researcher', 'analyst', 'student', 'business'],
    hasNewModel: false,
    models: [
      {
        id: 'claude-4-5-sonnet',
        name: 'Claude 4.5 Sonnet',
        value: 'Primary engine for advanced summarization and deep research in Pro and Deep Research modes.',
        useCases: [
          'Summarizing multi-document research topics',
          'Decision support for business analysts',
          'Policy and academic report generation',
          'Synthesizing information from live web data',
        ],
      },
      {
        id: 'mistral-large-2',
        name: 'Mistral Large 2',
        value: 'Enables fast basic queries and simple conversational tasks for free plan and Quick Mode.',
        useCases: [
          'Real-time factual lookups',
          'Quick chat responses',
          'Basic file Q&A',
          'Short-form content generation',
        ],
      },
      {
        id: 'gpt-5',
        name: 'GPT-5',
        value: 'Delivers in-depth reasoning, complex coding, and multi-step analytical skills in Pro mode.',
        useCases: [
          'Technical troubleshooting',
          'Advanced programming/explaining code',
          'Multi-layered business analyses',
          'Custom workflow automation',
        ],
      },
      {
        id: 'gemini-2-5-pro',
        name: 'Gemini 2.5 Pro (Beta)',
        value: 'Experimental model for multimodal (text-visual) reasoning; used in Labs and beta features.',
        useCases: [
          'Image-grounded Q&A',
          'Visual document analysis',
          'Product comparison via screenshots',
          'Visual content summarization',
        ],
      },
    ],
    notes: [
      'Core features are free but Pro ($20/month), Max ($50/month), and Enterprise ($40+/user/month) plans unlock advanced models, unlimited research, and Labs features.',
      'Perplexity automatically selects backend models, so advanced users cannot fully control the engine.',
      'For sensitive or regulated data, verify outputs since live web grounding can introduce inaccuracies or undisclosed data sources.',
    ],
  },
  {
  "id": "microsoft-copilot",
  "name": "Microsoft Copilot (with GPT 5 On",
  "vendor": "Microsoft",
  "summary": "AI assistant integrated across Microsoft apps for productivity and automation",
  "description": "Microsoft Copilot is an AI-powered assistant embedded in Microsoft 365 apps like Word, Excel, PowerPoint, Outlook, and Teams. It leverages enterprise data through Microsoft Graph and advanced language models to deliver contextual insights, automate tasks, and enhance creativity. Ideal for businesses and professionals seeking to streamline workflows, improve decision-making, and boost productivity within a secure environment.",
  "tags": ["chat", "reasoning", "productivity", "business", "automation", "ecosystem"],
  "personas": ["business", "pm", "developer", "analyst", "writer"],
  "hasNewModel": false,
  "models": [
    {
      "id": "gpt-5-smart-mode",
      "name": "GPT-5 (Smart Mode)",
      "value": "Primary model powering Copilot with dynamic routing for reasoning and contextual tasks.",
      "useCases": [
        "Generate and refine business reports in Word",
        "Create complex data visualizations in Excel",
        "Summarize and draft emails in Outlook",
        "Provide meeting insights and action items in Teams"
      ]
    }
  ],
  "notes": [
    "Requires a qualifying Microsoft 365 license; Copilot for Microsoft 365 costs $30/user/month.",
    "Data privacy is governed by enterprise-grade security; verify compliance before sharing sensitive data.",
    "Performance depends on internet connectivity and Microsoft service availability."
  ]
},
{
  "id": "microsoft-copilot",
  "name": "Microsoft Copilot (with GPT 5 OFF",
  "vendor": "Microsoft",
  "summary": "AI-powered assistant integrated across Microsoft products to boost productivity.",
  "description": "Microsoft Copilot is an AI companion embedded in Microsoft 365, Windows, Edge, and other Microsoft services, designed to enhance productivity, creativity, and decision-making. It leverages large language models and organizational data to assist with tasks like writing, summarizing, coding, and data analysis. Copilot stands out for its deep integration with Microsoft tools, enterprise-grade security, and compliance features, making it ideal for business users and teams operating in secure environments.",
  "tags": ["chat", "reasoning", "coding", "productivity", "business", "ecosystem"],
  "personas": ["pm", "developer", "analyst", "business", "general"],
  "hasNewModel": false,
  "models": [
    {
      "id": "microsoft-copilot-llm",
      "name": "Microsoft Copilot LLM",
      "value": "Combines OpenAI models with Microsoft Graph data to deliver contextual, secure, and enterprise-aware responses.",
      "useCases": [
        "Generate and summarize documents in Word",
        "Create and analyze spreadsheets in Excel",
        "Draft emails and schedule meetings in Outlook",
        "Automate workflows and generate code in Power Platform"
      ]
    }
  ],
  "notes": [
    "Requires Microsoft 365 subscription for full functionality",
    "Enterprise-grade security includes data isolation, encryption, and compliance with standards like ISO/IEC 27001",
    "Copilot respects user permissions and only accesses data the user is authorized to view"
  ]
},
{
  "id": "leonardo-ai",
  "name": "Leonardo.AI",
  "vendor": "Leonardo.AI",
  "summary": "Professional AI visual content platform for generating images, videos, and 3D textures with production-quality control",
  "description": "Leonardo.AI is a feature-rich generative AI platform specializing in creating production-quality images, videos, and 3D textures with unprecedented creative control. Built on its proprietary Phoenix foundational model and offering dozens of fine-tuned models for different art styles, it excels at photorealistic rendering, cinematic visuals, and custom model training. Best for designers, game developers, marketers, and content creators who need consistent brand aesthetics, rapid iteration capabilities, and granular control over AI-generated assets at scale.",
  "tags": ["image-gen", "video-gen", "creative", "design-tools", "productivity", "api-available", "multimodal"],
  "personas": ["designer", "creative", "marketer", "developer", "business", "general"],
  "hasNewModel": false,
  "models": [
    {
      "id": "phoenix",
      "name": "Phoenix",
      "value": "Leonardo's proprietary foundational model delivering photorealistic images with superior prompt adherence and accurate text-in-image generation",
      "useCases": ["Marketing banners with accurate text overlays", "Product photography with specific brand requirements", "Character portraits with precise attribute control", "Concept art requiring faithful prompt interpretation"]
    },
    {
      "id": "kino-xl",
      "name": "Leonardo Kino XL",
      "value": "Cinematic-focused model optimized for dramatic lighting, wider aspect ratios, and movie-quality compositions without negative prompts",
      "useCases": ["Film storyboarding and pre-visualization", "Cinematic social media content", "Movie poster concepts", "Dramatic advertising visuals"]
    },
    {
      "id": "lightning-xl",
      "name": "Leonardo Lightning XL",
      "value": "Speed-optimized model for rapid prototyping and quick iteration cycles while maintaining quality",
      "useCases": ["Rapid concept exploration and brainstorming", "Quick character design iterations", "Fast mockup generation for client reviews", "High-volume content creation workflows"]
    },
    {
      "id": "vision-xl",
      "name": "Leonardo Vision XL",
      "value": "Photorealistic model excelling at portraiture and detailed scenes with longer descriptive prompts",
      "useCases": ["Professional portrait generation", "Product photography alternatives", "Interior design visualization", "Realistic character reference sheets"]
    },
    {
      "id": "motion",
      "name": "Motion (Video Generation)",
      "value": "Animation tool that transforms static images into short video clips with adjustable motion intensity",
      "useCases": ["Social media motion graphics", "Animated product presentations", "Marketing loop videos", "Simple storyboard animations"]
    }
  ],
  "notes": [
    "Token system can be complex - free tier provides 150 daily tokens but advanced features consume tokens quickly, especially video generation",
    "Third-party models (Veo 3, Flux, Ideogram) excluded from unlimited relaxed generation and cost significantly more tokens",
    "Custom model training requires paid plans and 10-20 sample images for optimal results",
    "Acquired by Canva in July 2024 but operates independently with continued platform development"
  ]
},
{
"id": "napkin-ai",
"name": "Napkin AI",
"vendor": "Napkin AI",
"summary": "AI-powered tool that instantly transforms text into customizable business visuals",
"description": "Napkin AI specializes in converting text content into professional diagrams, flowcharts, and infographics without requiring design skills or complex prompting. Built by the creators of Osmo, it uses a unique agentic AI approach rather than diffusion models, enabling easy editing and customization. Best suited for professionals, educators, and content creators who need quick, professional visuals for presentations, documents, and social media.",
"tags": ["multimodal", "productivity", "design-tools", "no-code", "business", "creative"],
"personas": ["general", "pm", "writer", "business", "creative", "marketer", "student"],
"hasNewModel": false,
"models": [
{
"id": "visual-generation-engine",
"name": "Visual Generation Engine",
"value": "Proprietary agentic AI system that generates editable business graphics from text in seconds",
"useCases": ["Transform meeting notes into flowcharts", "Convert blog posts into shareable infographics", "Generate process diagrams from text descriptions", "Create presentation visuals from bullet points"]
}
],
"notes": ["Currently free during beta phase with paid plans launching soon at $12+/month", "Desktop-only for creation and editing; mobile limited to viewing", "AI credits system: approximately 1 credit per word selected for generation"]
},
{
  "id": "mermaid-chart",
  "name": "Mermaid Chart",
  "vendor": "Mermaid Chart Inc.",
  "summary": "An AI-powered platform that turns natural-language prompts into diagrams and lets you refine them visually or via code.",
  "description": "Built on the open-source Mermaid.js diagramming library, Mermaid Chart’s key differentiator is its embedded AI chat interface (“Mermaid AI”) that can generate and edit diagrams from plain English prompts. It is ideal when you need to quickly map flows, sequences, state machines or ER diagrams and then iterate with both code and visual editing. The target audience includes developers, PMs, analysts and documentation teams who want version-controlled, text-based diagrams with rapid AI-assisted creation and team collaboration.",
  "tags": ["diagramming", "automation", "productivity", "api-available", "team-collaboration"],
  "personas": ["developer", "pm", "analyst", "business"],
  "hasNewModel": false,
  "models": [
    {
      "id": "mermaid-ai-chat-assistant",
      "name": "Mermaid AI Chat Assistant",
      "value": "An embedded conversational assistant that generates and edits diagram code and visuals from natural-language prompts.",
      "useCases": [
        "Generate a flowchart from a written process description (e.g., “user login → validation → dashboard”)",
        "Edit an existing diagram by asking for changes (“add branch for ‘failed authentication’ and highlight it red”)",
        "Convert textual documentation into a sequence or ER diagram automatically to drop into documentation"
      ]
    }
  ],
  "notes": [
    "Free tier limits usage of the AI assistant and limits number of diagrams; upgrading to Pro/Enterprise unlocks unlimited AI chats and collaboration features.  [oai_citation:0‡docs.mermaidchart.com](https://docs.mermaidchart.com/blog/posts/mermaid-ai-is-here-to-change-the-game-for-diagram-creation?utm_source=chatgpt.com)",
    "While you can export diagrams as PNG or SVG, mastering the underlying Mermaid.js syntax enables the best customization and version-control workflows.  [oai_citation:1‡Skywork](https://skywork.ai/skypage/en/Mastering%20Diagrams%20as%20Code%3A%20My%20Deep%20Dive%20into%20the%20Mermaid%20Live%20Editor%20%26%20Mermaid%20Chart/1974365010686701568?utm_source=chatgpt.com)",
    "Although labelled “AI diagram generator”, the output may require manual layout or node edits for complex diagrams — treat it as a starting point, not perfect final art.  [oai_citation:2‡docs.mermaidchart.com](https://docs.mermaidchart.com/blog/posts/how-to-use-mermaid-chart-as-an-ai-diagram-generator?utm_source=chatgpt.com)"
  ]
},
{
  "id": "elicit-ai",
  "name": "Elicit",
  "vendor": "Ought (now independent public benefit corporation)",
  "summary": "An AI research assistant that helps locate, extract, and summarize academic literature.",
  "description": "Elicit’s primary strength is automating parts of literature review workflows—such as finding relevant papers (even without precise keywords), extracting key study details, and generating structured summaries. It differentiates itself by being purpose-built for evidence synthesis and academic research rather than general chat or writing tasks. It’s best used by researchers, students, librarians or anyone performing systematic reviews or evidence-based investigations in disciplines like biomedicine, social science or education.",
  "tags": ["research", "analysis", "automation", "no-code", "data-analysis"],
  "personas": ["researcher", "student", "analyst"],
  "hasNewModel": false,
  "models": [
    {
      "id": "elicit-assistant-lit-review",
      "name": "Elicit Literature Review Assistant",
      "value": "Generates curated lists of relevant academic papers and extracts structured information (e.g., population, intervention, outcome) from them.",
      "useCases": [
        "Ask a question like “What is the effect of X on Y?” and get a matrix of studies with key details extracted",
        "Upload a PDF of a study and have Elicit pull out the methods, sample size, population and outcomes into spreadsheet form",
        "Generate a list of new search queries and synonyms after entering a seed question to broaden your literature search"
      ]
    }
  ],
  "notes": [
    "While Elicit surfaces academic papers and structured summaries, users should always verify extracted details because AI may misclassify or omit nuance.  [oai_citation:0‡BioMed Central](https://bmcmedresmethodol.biomedcentral.com/articles/10.1186/s12874-025-02528-y?utm_source=chatgpt.com)",
    "Free tier exists, but advanced workflows (e.g., large systematic reviews, full-text extraction) may require paid subscription or credits.  [oai_citation:1‡academiainsider.com](https://academiainsider.com/how-to-use-elicit-2/?utm_source=chatgpt.com)",
    "Elicit works best for empirical questions (e.g., intervention/outcome style) rather than broad or purely conceptual questions; its performance is more limited for literature lacking clear structure.  [oai_citation:2‡OE Global Connect](https://connect.oeglobal.org/t/eliciting-effectiveness-of-elicit-ai-research-lit-review-tool/4191?utm_source=chatgpt.com)"
  ]
},
{
  "id": "grok-ai",
  "name": "Grok",
  "vendor": "xAI",
  "summary": "An AI assistant with real-time web and social media access, aimed at fast reasoning and dynamic responses.",
  "description": "Grok’s key differentiator is its integration with the X (formerly Twitter) platform and live web search capabilities, enabling up-to-date responses and trend awareness. It is built for users who want conversational AI that can handle coding, reasoning, image generation, and real-time information, rather than just static knowledge. Ideal for creators, analysts, coders or power users who favour a more irreverent, agile assistant with real-time awareness and multimodal features.  [oai_citation:0‡Decrypt](https://decrypt.co/resources/grok-ai-elon-musk-controversial-chatgpt-rival?utm_source=chatgpt.com)",
  "tags": ["chat", "coding", "analysis", "multimodal", "api-available"],
  "personas": ["developer", "analyst", "writer", "researcher"],
  "hasNewModel": false,
  "models": [
    {
      "id": "grok-3",
      "name": "Grok 3",
      "value": "A reasoning-focused version offering improved logic, context and integration of live web data.  [oai_citation:1‡Built In](https://builtin.com/articles/grok?utm_source=chatgpt.com)",
      "useCases": [
        "Debug a code snippet and explain line by line how it works.",
        "Ask for the latest social media trends around a breaking event and summarise key themes.",
        "Generate a concise brief of a long article with real-time context and implications."
      ]
    },
    {
      "id": "grok-4",
      "name": "Grok 4",
      "value": "The latest flagship model offering higher performance, larger context window and native tool use including image/video generation.  [oai_citation:2‡xAI](https://x.ai/?utm_source=chatgpt.com)",
      "useCases": [
        "Create a multimodal answer combining image generation, code and explanation for a design prototype.",
        "Use real-time search to forecast short-term trends in a social or business domain.",
        "Deploy via the API (via OCI) to automate reasoning tasks with dynamic external data.  [oai_citation:3‡Oracle](https://www.oracle.com/news/announcement/xais-grok-models-are-now-on-oracle-cloud-infrastructure-2025-06-17/?utm_source=chatgpt.com)"
      ]
    }
  ],
  "notes": [
    "Access and usage may require subscription via X Premium+, SuperGrok, or equivalent tier; free access is limited.  [oai_citation:4‡Built In](https://builtin.com/articles/grok?utm_source=chatgpt.com)",
    "Despite real-time data and high performance, responses are still prone to bias, controversial tone or off-brand content (Grok is designed with a “snarky” edge).  [oai_citation:5‡Decrypt](https://decrypt.co/resources/grok-ai-elon-musk-controversial-chatgpt-rival?utm_source=chatgpt.com)",
    "Because it pulls live web/social data, outputs may include misinformation or transient trends—users should fact-check critical results before relying on them."
  ]
}
];


