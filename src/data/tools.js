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
  { id: 'writer', name: 'Writer' },
  { id: 'marketer', name: 'Marketer' },
];

// Sort functions for tools
export function sortByCountry(tools, ascending = true) {
  return [...tools].sort((a, b) => {
    if (!a.country) return 1;
    if (!b.country) return -1;
    return ascending
      ? a.country.localeCompare(b.country)
      : b.country.localeCompare(a.country);
  });
}

export function sortByVendor(tools, ascending = true) {
  return [...tools].sort((a, b) => {
    if (!a.vendor) return 1;
    if (!b.vendor) return -1;
    return ascending
      ? a.vendor.localeCompare(b.vendor)
      : b.vendor.localeCompare(a.vendor);
  });
}

export function sortByName(tools, ascending = true) {
  return [...tools].sort((a, b) => {
    if (!a.name) return 1;
    if (!b.name) return -1;
    return ascending
      ? a.name.localeCompare(b.name)
      : b.name.localeCompare(a.name);
  });
}

export function sortByFreeTier(tools, freeFirst = true) {
  return [...tools].sort((a, b) => {
    // First by free tier status
    if (a.hasFreeTier !== b.hasFreeTier) {
      return freeFirst
        ? (b.hasFreeTier ? 1 : -1)
        : (a.hasFreeTier ? 1 : -1);
    }
    // Then alphabetically by name
    if (!a.name) return 1;
    if (!b.name) return -1;
    return a.name.localeCompare(b.name);
  });
}

export const tools = [
  {
    id: "openai-chatgpt",
    name: "ChatGPT",
    vendor: "OpenAI",
    country: "USA",
    summary: "An AI conversational assistant that generates human-like responses to text, image, audio and multimodal prompts.",
    description: "ChatGPT excels at conversational interaction across text (and increasingly audio/vision) with follow-up questions, edits and clarifications. It differentiates itself by supporting multimodal inputs (images, voice) and integration via API or custom GPTs, making it useful for writing, coding, research, and everyday productivity. Ideal for users from general consumers to professionals (writers, developers, analysts) who need an accessible AI assistant to accelerate tasks, brainstorm ideas or automate routine workflows.",
    tags: ["chat", "writing", "coding", "multimodal", "productivity", "api-available"],
    personas: ["general", "writer", "developer", "analyst", "student"],
    hasNewModel: false,
    hasFreeTier: true,
    models: [
      {
        id: "gpt-5",
        name: "GPT-5",
        value: "Flagship unified reasoning model released August 2025 offering expert-level performance across domains.",
        useCases: [
          "Analyze a large multimodal dataset (text + images + audio) for research insights.",
          "Develop and debug a full-stack web application from a high-level prompt.",
          "Assist with domain-specific expert tasks like medical imaging interpretation or complex legal analysis."
        ]
      },
      {
        id: "gpt-4o",
        name: "GPT-4o",
        value: "Previously flagship multimodal model before GPT-5 that balances text, vision, and audio with fast throughput.",
        useCases: [
          "Upload a photo of a circuit diagram and ask for explanation or debugging steps.",
          "Have a real-time voice-based conversation for brainstorming and planning.",
          "Translate and summarise a foreign-language document including embedded visuals."
        ]
      }
    ],
    notes: [
      "Free tier exists but has usage limits, and newer models (like GPT-5) may initially be behind paid tiers.",
      "Even the most advanced models can hallucinate or produce incorrect responses; verification is recommended for factual, legal or medical content.",
      "Access to certain newer models or features (e.g., GPT-5 Pro, extended reasoning) may require higher-tier subscriptions or enterprise/API access."
    ]
  },
  {
    id: 'anthropic-claude',
    name: 'Claude',
    vendor: 'Anthropic',
    country: "USA",
    summary: 'Helpful, honest, and harmless assistant with strong writing quality.',
    description: 'A family of models focused on safety, reliability, and sophisticated (often natural-sounding) prose. Claude is often favored for long-form writing, analysis of large documents (thanks to a large context window), and tasks requiring careful instruction-following. It is a strong competitor for complex reasoning and creative generation.',
    tags: ['writing', 'analysis', 'long-context', 'chat', 'api-available', 'reasoning'],
    personas: ['general', 'pm', 'analyst', 'designer', 'writer', 'researcher'],
    hasFreeTier: true,
    models: [
      {
        id: 'claude-4-opus',
        name: 'Claude 4 Opus',
        value: 'The flagship, most powerful model for highly complex, multi-step reasoning, research, and high-stakes tasks.',
        useCases: ['In-depth policy and strategy drafts', 'Complex analytical memos on large datasets', 'R&D and scientific research synthesis', 'Writing a novel or screenplay'],
      },
      {
        id: 'claude-4-sonnet',
        name: 'Claude 4 Sonnet',
        value: 'The balanced model offering the best blend of intelligence and speed for most enterprise and prosumer tasks.',
        useCases: ['Code generation and review', 'Data analysis and forecasting', 'Most business writing (reports, emails, marketing)', 'RAG over a knowledge base'],
      },
      {
        id: 'claude-4-haiku',
        name: 'Claude 4 Haiku',
        value: 'The fastest, most compact model designed for near-instant responses, ideal for customer-facing applications and simple tasks.',
        useCases: ['Live customer support chatbots', 'Content moderation', 'Quick summaries of text or emails', 'Simple translations'],
      },
    ],
    notes: [
      'Excels at handling very long documents (e.g., uploading a book or multiple research papers).',
      'The "Constitutional AI" training method aims to reduce harmful or unethical outputs.'
    ],
  },
  {
    id: "google-gemini",
    name: "Google Gemini",
    vendor: "Google",
    country: "USA",
    summary: "Google's powerful, multimodal AI assistant and model family designed for generation, reasoning, and coding across various applications.",
    description: "Gemini's core differentiator is its native **multimodality** (text, code, image, audio, video) and deep integration across the Google ecosystem (Search, Workspace, Cloud). It excels in complex, multi-step reasoning and long-context processing, making it ideal for tasks requiring detailed analysis of large files or data, as well as powering developer tools and enterprise-wide automation.",
    tags: ["chat", "reasoning", "coding", "multimodal", "api-available", "long-context"],
    personas: ["general", "developer", "researcher", "business", "analyst"],
    hasNewModel: false,
    hasFreeTier: true,
    models: [
      {
        id: "gemini-2-5-pro",
        name: "Gemini 2.5 Pro",
        value: "This is Google's most capable model, offering state-of-the-art performance for complex tasks, advanced reasoning, and a massive 1M token context window.",
        useCases: [
          "Analyzing a 500-page legal document for key clauses and summarization",
          "Generating complex, multi-file code for a new web application feature",
          "Developing an AI agent that orchestrates steps across multiple apps like Gmail and Calendar",
          "Performing deep research by sifting through hundreds of websites and files for a comprehensive report"
        ]
      },
      {
        id: "gemini-2-5-flash",
        name: "Gemini 2.5 Flash",
        value: "An extremely fast, cost-efficient, and lightweight model designed for high-frequency tasks where speed is critical, while still retaining strong multimodal capabilities.",
        useCases: [
          "Building a high-throughput, low-latency customer service chatbot (for text and voice)",
          "Quickly analyzing images and video frames to detect specific objects or activities",
          "Generating quick draft emails or presentation outlines within Google Workspace apps",
          "Translating real-time conversations in Google Meet with high speed and accuracy"
        ]
      }
    ],
    notes: [
      "Gemini Advanced access is bundled with the **Google One AI Premium** subscription ($19.99/month), which includes 2TB of storage and other Google benefits.",
      "The free tier typically uses a capable, but slightly lower-tier model (e.g., Gemini 2.5 Flash) and may have stricter daily usage limits.",
      "Gemini models can be accessed via the user-facing chat app or the API for developers through **Google AI for Developers** (for prototyping) and **Vertex AI** (for enterprise-scale production)."
    ]
  },
  {
    id: 'meta-llama',
    name: 'Meta Llama',
    vendor: 'Meta',
    country: "USA",
    summary: 'Open models available via many providers and local runtimes.',
    description: 'Good for local/private deployments and fine-tuning experimentation.',
    tags: ['open', 'local', 'fine-tune', 'coding', 'api-available'],
    personas: ['developer', 'analyst', 'researcher', 'student'],
    hasFreeTier: true,
    models: [
      {
        id: 'llama-3-1-70b',
        name: 'Llama 3.1 70B',
        value: 'Strong open model for coding and general tasks.',
        useCases: ['Local code assistant', 'RAG experiments', 'Private deployments', 'Research fine-tuning'],
      },
      {
        id: 'llama-3-1-8b',
        name: 'Llama 3.1 8B',
        value: 'Lightweight for on-device or constrained environments.',
        useCases: ['Mobile prototypes', 'Edge inference', 'Cost-aware workloads', 'Simple chatbots'],
      },
    ],
    notes: [
      'Mind provider differences and quantization trade-offs.',
      'Completely free and permissively licensed (Llama 3.1) for most commercial uses.',
      'Can be run locally on consumer hardware (especially smaller models).'
    ],
  },
  {
    id: 'perplexity-ai',
    name: 'Perplexity AI',
    vendor: 'Perplexity AI, Inc.',
    country: "USA",
    summary: 'An AI-powered answer engine providing instant, credible, and cited responses to user queries.',
    description: 'Perplexity AI is a dynamic multi-model assistant that excels at search-grounded reasoning, live web access, and complex research tasks, including document analysis and summarization. Its core differentiator is automatic model routing, enabling the blending of cutting-edge language models depending on task complexity, speed, and factuality needs. Ideal for users requiring up-to-date answers with verifiable sources, Perplexity supports research, business analysis, and decision-making workflows for both free and paying users.',
    tags: ['chat', 'reasoning', 'analysis', 'research', 'productivity', 'api-available'],
    personas: ['general', 'researcher', 'analyst', 'student', 'business'],
    hasNewModel: false,
    hasFreeTier: true,
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
    id: "microsoft-copilot",
    name: "Microsoft Copilot",
    vendor: "Microsoft",
    country: "USA",
    summary: "AI assistant integrated across Microsoft apps for productivity and automation",
    description: "Microsoft Copilot is an AI-powered assistant embedded in Microsoft 365 apps like Word, Excel, PowerPoint, Outlook, and Teams. It leverages enterprise data through Microsoft Graph and advanced language models to deliver contextual insights, automate tasks, and enhance creativity. Ideal for businesses and professionals seeking to streamline workflows, improve decision-making, and boost productivity within a secure environment.",
    tags: ["chat", "reasoning", "productivity", "business", "automation", "ecosystem"],
    personas: ["business", "pm", "developer", "analyst", "writer"],
    hasNewModel: false,
    hasFreeTier: true,
    models: [
      {
        id: "gpt-5-smart-mode",
        name: "GPT-5 (Smart Mode)",
        value: "Primary model powering Copilot with dynamic routing for reasoning and contextual tasks.",
        useCases: [
          "Generate and refine business reports in Word",
          "Create complex data visualizations in Excel",
          "Summarize and draft emails in Outlook",
          "Provide meeting insights and action items in Teams"
        ],
      },
      {
        id: "microsoft-copilot-llm",
        name: "Microsoft Copilot LLM",
        value: "Combines OpenAI models with Microsoft Graph data to deliver contextual, secure, and enterprise-aware responses.",
        useCases: [
          "Generate and summarize documents in Word",
          "Create and analyze spreadsheets in Excel",
          "Draft emails and schedule meetings in Outlook",
          "Automate workflows and generate code in Power Platform"
        ]
      },
    ],
    notes: [
      "Requires a qualifying Microsoft 365 license for full integration; Copilot for Microsoft 365 costs $30/user/month.",
      "Data privacy is governed by enterprise-grade security; verify compliance before sharing sensitive data.",
      "A free version of Copilot (using web-grounded models) is available in Windows and the Edge browser."
    ]
  },
  {
    id: "leonardo-ai",
    name: "Leonardo.AI",
    vendor: "Leonardo.AI",
    country: "Australia",
    summary: "Professional AI visual content platform for generating images, videos, and 3D textures with production-quality control. Recently Acquired by Canva.",
    description: "Leonardo.AI is a feature-rich generative AI platform specializing in creating production-quality images, videos, and 3D textures with unprecedented creative control. Built on its proprietary Phoenix foundational model and offering dozens of fine-tuned models for different art styles, it excels at photorealistic rendering, cinematic visuals, and custom model training. Best for designers, game developers, marketers, and content creators who need consistent brand aesthetics, rapid iteration capabilities, and granular control over AI-generated assets at scale.",
    tags: ["image-gen", "video-gen", "creative", "design-tools", "productivity", "api-available", "multimodal"],
    personas: ["designer", "creative", "marketer", "developer", "business", "general"],
    hasNewModel: false,
    hasFreeTier: true,
    models: [
      {
        id: "phoenix",
        name: "Phoenix",
        value: "Leonardo's proprietary foundational model delivering photorealistic images with superior prompt adherence and accurate text-in-image generation",
        useCases: ["Marketing banners with accurate text overlays", "Product photography with specific brand requirements", "Character portraits with precise attribute control", "Concept art requiring faithful prompt interpretation"]
      },
      {
        id: "kino-xl",
        name: "Leonardo Kino XL",
        value: "Cinematic-focused model optimized for dramatic lighting, wider aspect ratios, and movie-quality compositions without negative prompts",
        useCases: ["Film storyboarding and pre-visualization", "Cinematic social media content", "Movie poster concepts", "Dramatic advertising visuals"]
      },
      {
        id: "lightning-xl",
        name: "Leonardo Lightning XL",
        value: "Speed-optimized model for rapid prototyping and quick iteration cycles while maintaining quality",
        useCases: ["Rapid concept exploration and brainstorming", "Quick character design iterations", "Fast mockup generation for client reviews", "High-volume content creation workflows"]
      },
      {
        id: "vision-xl",
        name: "Leonardo Vision XL",
        value: "Photorealistic model excelling at portraiture and detailed scenes with longer descriptive prompts",
        useCases: ["Professional portrait generation", "Product photography alternatives", "Interior design visualization", "Realistic character reference sheets"]
      },
      {
        id: "motion",
        name: "Motion (Video Generation)",
        value: "Animation tool that transforms static images into short video clips with adjustable motion intensity",
        useCases: ["Social media motion graphics", "Animated product presentations", "Marketing loop videos", "Simple storyboard animations"]
      }
    ],
    notes: [
      "Token system can be complex - free tier provides 150 daily tokens but advanced features consume tokens quickly, especially video generation",
      "Third-party models (Veo 3, Flux, Ideogram) excluded from unlimited relaxed generation and cost significantly more tokens",
      "Custom model training requires paid plans and 10-20 sample images for optimal results",
      "Acquired by Canva in July 2024 but operates independently with continued platform development"
    ]
  },
  {
    id: "napkin-ai",
    name: "Napkin AI",
    vendor: "Napkin AI",
    country: "USA",
    summary: "AI-powered tool that instantly transforms text into customizable business visuals",
    description: "Napkin AI specializes in converting text content into professional diagrams, flowcharts, and infographics without requiring design skills or complex prompting. Built by the creators of Osmo, it uses a unique agentic AI approach rather than diffusion models, enabling easy editing and customization. Best suited for professionals, educators, and content creators who need quick, professional visuals for presentations, documents, and social media.",
    tags: ["multimodal", "productivity", "design-tools", "no-code", "business", "creative", "presentation"],
    personas: ["general", "pm", "writer", "business", "creative", "marketer", "student"],
    hasNewModel: false,
    hasFreeTier: true,
    models: [
      {
        id: "visual-generation-engine",
        name: "Visual Generation Engine",
        value: "Proprietary agentic AI system that generates editable business graphics from text in seconds",
        useCases: ["Transform meeting notes into flowcharts", "Convert blog posts into shareable infographics", "Generate process diagrams from text descriptions", "Create presentation visuals from bullet points"]
      }
    ],
    notes: ["Currently free during beta phase with paid plans launching soon at $12+/month", "Desktop-only for creation and editing; mobile limited to viewing", "AI credits system: approximately 1 credit per word selected for generation"]
  },
  {
    id: "mermaid-chart",
    name: "Mermaid Chart",
    vendor: "Mermaid Chart Inc.",
    country: "USA",
    summary: "An AI-powered platform that turns natural-language prompts into diagrams and lets you refine them visually or via code.",
    description: "Built on the open-source Mermaid.js diagramming library, Mermaid Chart’s key differentiator is its embedded AI chat interface (“Mermaid AI”) that can generate and edit diagrams from plain English prompts. It is ideal when you need to quickly map flows, sequences, state machines or ER diagrams and then iterate with both code and visual editing. The target audience includes developers, PMs, analysts and documentation teams who want version-controlled, text-based diagrams with rapid AI-assisted creation and team collaboration.",
    tags: ["diagramming", "automation", "productivity", "api-available", "team-collaboration", "developer-tools", "no-code"],
    personas: ["developer", "pm", "analyst", "business"],
    hasNewModel: false,
    hasFreeTier: true,
    models: [
      {
        id: "mermaid-ai-chat-assistant",
        name: "Mermaid AI Chat Assistant",
        value: "An embedded conversational assistant that generates and edits diagram code and visuals from natural-language prompts.",
        useCases: [
          "Generate a flowchart from a written process description (e.g., “user login → validation → dashboard”)",
          "Edit an existing diagram by asking for changes (“add branch for ‘failed authentication’ and highlight it red”)",
          "Convert textual documentation into a sequence or ER diagram automatically to drop into documentation"
        ]
      }
    ],
    notes: [
      "Free tier limits usage of the AI assistant and limits number of diagrams; upgrading to Pro/Enterprise unlocks unlimited AI chats and collaboration features.",
      "While you can export diagrams as PNG or SVG, mastering the underlying Mermaid.js syntax enables the best customization and version-control workflows.",
      "Although labelled “AI diagram generator”, the output may require manual layout or node edits for complex diagrams — treat it as a starting point, not perfect final art."
    ]
  },
  {
    id: "elicit-ai",
    name: "Elicit",
    vendor: "Ought (now independent public benefit corporation)",
    country: "USA",
    summary: "An AI research assistant that helps locate, extract, and summarize academic literature.",
    description: "Elicit’s primary strength is automating parts of literature review workflows—such as finding relevant papers (even without precise keywords), extracting key study details, and generating structured summaries. It differentiates itself by being purpose-built for evidence synthesis and academic research rather than general chat or writing tasks. It’s best used by researchers, students, librarians or anyone performing systematic reviews or evidence-based investigations in disciplines like biomedicine, social science or education.",
    tags: ["research", "analysis", "automation", "no-code", "data-analysis", "writing"],
    personas: ["researcher", "student", "analyst"],
    hasNewModel: false,
    hasFreeTier: true,
    models: [
      {
        id: "elicit-assistant-lit-review",
        name: "Elicit Literature Review Assistant",
        value: "Generates curated lists of relevant academic papers and extracts structured information (e.g., population, intervention, outcome) from them.",
        useCases: [
          "Ask a question like “What is the effect of X on Y?” and get a matrix of studies with key details extracted",
          "Upload a PDF of a study and have Elicit pull out the methods, sample size, population and outcomes into spreadsheet form",
          "Generate a list of new search queries and synonyms after entering a seed question to broaden your literature search"
        ]
      }
    ],
    notes: [
      "While Elicit surfaces academic papers and structured summaries, users should always verify extracted details because AI may misclassify or omit nuance.",
      "Free tier exists, but advanced workflows (e.g., large systematic reviews, full-text extraction) may require paid subscription or credits.",
      "Elicit works best for empirical questions (e.g., intervention/outcome style) rather than broad or purely conceptual questions; its performance is more limited for literature lacking clear structure."
    ]
  },
  {
    id: "grok-ai",
    name: "Grok",
    vendor: "xAI",
    country: "USA",
    summary: "An AI assistant with real-time web and social media access, aimed at fast reasoning and dynamic responses.",
    description: "Grok’s key differentiator is its integration with the X (formerly Twitter) platform and live web search capabilities, enabling up-to-date responses and trend awareness. It is built for users who want conversational AI that can handle coding, reasoning, image generation, and real-time information, rather than just static knowledge. Ideal for creators, analysts, coders or power users who favour a more irreverent, agile assistant with real-time awareness and multimodal features.",
    tags: ["chat", "coding", "analysis", "multimodal", "api-available", "real-time"],
    personas: ["developer", "analyst", "writer", "researcher", "general"],
    hasNewModel: false,
    hasFreeTier: false,
    models: [
      {
        id: "grok-3",
        name: "Grok 3",
        value: "A reasoning-focused version offering improved logic, context and integration of live web data.",
        useCases: [
          "Debug a code snippet and explain line by line how it works.",
          "Ask for the latest social media trends around a breaking event and summarise key themes.",
          "Generate a concise brief of a long article with real-time context and implications."
        ]
      },
      {
        id: "grok-4",
        name: "Grok 4",
        value: "The latest flagship model offering higher performance, larger context window and native tool use including image/video generation.",
        useCases: [
          "Create a multimodal answer combining image generation, code and explanation for a design prototype.",
          "Use real-time search to forecast short-term trends in a social or business domain.",
          "Deploy via the API (via OCI) to automate reasoning tasks with dynamic external data."
        ]
      }
    ],
    notes: [
      "Access and usage may require subscription via X Premium+, SuperGrok, or equivalent tier; free access is limited.",
      "Despite real-time data and high performance, responses are still prone to bias, controversial tone or off-brand content (Grok is designed with a “snarky” edge).",
      "Because it pulls live web/social data, outputs may include misinformation or transient trends—users should fact-check critical results before relying on them."
    ]
  },
  {
    id: 'github-copilot',
    name: 'GitHub Copilot',
    vendor: 'Microsoft (GitHub)',
    country: "USA",
    summary: 'The in-editor AI pair programmer for code completion, debugging, and generation.',
    description: 'GitHub Copilot is an AI assistant deeply integrated into IDEs (like VS Code, JetBrains). It provides real-time, context-aware code suggestions, generates entire functions from comments, explains code blocks, and assists with debugging and test generation. Its key differentiator is its native integration into the developer\'s core workflow, speeding up the entire development lifecycle.',
    tags: ['coding', 'developer-tools', 'productivity', 'automation', 'api-available'],
    personas: ['developer', 'student', 'researcher'],
    hasNewModel: false,
    hasFreeTier: false,
    models: [
      {
        id: 'copilot-chat-gpt5',
        name: 'Copilot Chat (GPT-5)',
        value: 'A conversational chat interface within the IDE that can understand and act on the entire codebase for complex tasks.',
        useCases: [
          'Debug a complex issue by discussing it with the AI ("Why is this API call failing?")',
          'Refactor an entire module based on a high-level goal ("Convert this file to use TypeScript and async/await")',
          'Generate documentation for a selected block of code.'
        ]
      },
      {
        id: 'copilot-autocomplete',
        name: 'Copilot Autocomplete',
        value: 'Real-time, "ghost text" code completion that suggests single lines or entire functions as you type.',
        useCases: [
          'Writing boilerplate code (e.g., a fetch request, a class constructor)',
          'Completing complex algorithms or logic based on context',
          'Generating unit tests for an existing function'
        ]
      }
    ],
    notes: [
      'Requires a paid subscription (monthly or yearly).',
      'Free access is provided to verified students, teachers, and maintainers of popular open-source projects.',
      'Can be configured to filter out code suggestions that match public repositories.'
    ]
  },
  {
    id: 'agentforce',
    name: 'Agentforce (Einstein 1)',
    vendor: 'Salesforce',
    country: "USA",
    summary: 'An AI platform for building autonomous agents integrated with Salesforce CRM data.',
    description: 'Agentforce, powered by the Einstein 1 Platform, allows businesses to build, deploy, and manage AI agents that automate complex tasks across sales, service, and marketing. Its key differentiator is its deep, secure integration with Salesforce Data Cloud, enabling agents to reason and act on customer data contextually and safely.',
    tags: ['business', 'automation', 'api-available', 'data-analysis', 'crm', 'no-code'],
    personas: ['business', 'pm', 'developer', 'analyst', 'marketer'],
    hasNewModel: false,
    hasFreeTier: false,
    models: [
      {
        id: 'einstein-agent-builder',
        name: 'Einstein Agent Builder',
        value: 'A no-code/low-code interface for creating and managing autonomous agents that can use tools and act on data.',
        useCases: [
          'Create an agent to auto-draft personalized follow-up emails for sales leads.',
          'Build a service agent that can process a refund request by checking inventory and payment systems.',
          'Design a marketing agent to analyze campaign data and suggest budget re-allocations.'
        ]
      },
      {
        id: 'einstein-llm',
        name: 'Einstein LLM (Grounded)',
        value: 'A proprietary Salesforce LLM that is "grounded" in the customer\'s own Data Cloud for factual, secure, and relevant responses.',
        useCases: [
          'Generate a summary of a customer\'s entire service history, surfacing key issues.',
          'Draft product descriptions that are consistent with the company\'s brand voice.',
          'Power internal-facing chatbots to answer questions about CRM data.'
        ]
      }
    ],
    notes: [
      'This is an enterprise-grade B2B platform, not a consumer tool.',
      'Pricing is heavily dependent on the existing Salesforce subscription level and API usage.',
      'Strong focus on data privacy and trust, as it connects directly to sensitive customer data.'
    ]
  },
  {
    id: 'cursor-ide',
    name: 'Cursor',
    vendor: 'Cursor',
    country: "USA",
    summary: 'An AI-powered code editor (VS Code fork) that excels at codebase-aware chat, generation, and debugging.',
    description: 'Cursor is a standalone IDE built from the ground up for AI-native development. It indexes an entire codebase ("codebase-aware") to provide highly accurate code generation, refactoring, and debugging. It intelligently routes requests to multiple models (like GPT-5 and Claude 4) to find the best one for a task. Ideal for developers working on large, complex repositories who want AI to be a core part of their editor.',
    tags: ['coding', 'developer-tools', 'productivity', 'ide', 'chat'],
    personas: ['developer'],
    hasNewModel: false,
    hasFreeTier: true,
    models: [
      {
        id: 'cursor-codebase-chat',
        name: 'Codebase-Aware Chat',
        value: 'A chat interface that has full context of your entire local repository to answer questions and make edits.',
        useCases: [
          'Ask "Where is the authentication logic defined in this project?"',
          'Find and fix a bug by describing the symptoms ("Users are getting a 404 on the profile page, find and fix it").',
          'Prototype a new feature across multiple files from a single prompt.'
        ]
      },
      {
        id: 'cursor-model-router',
        name: 'Automatic Model Router',
        value: 'A smart-routing system that picks the best model (e.g., fastest, smartest, largest context) for your specific query.',
        useCases: [
          'Automatically using a fast model like Claude 4 Haiku for simple in-line edits.',
          'Automatically using a powerful model like GPT-5 for complex, multi-file refactoring.',
          'Letting the user manually select their preferred model for a specific task.'
        ]
      }
    ],
    notes: [
      'Free tier has a limited number of "smarter" AI actions per month.',
      'Pro plan unlocks unlimited use of all models (GPT-5, Claude 4, etc.) and more advanced features.',
      'It is a fork of VS Code, so it supports all existing VS Code extensions and themes.'
    ]
  },
  {
    id: 'midjourney',
    name: 'Midjourney',
    vendor: 'Midjourney, Inc.',
    country: "USA",
    summary: 'A proprietary AI image generator known for producing highly aesthetic, artistic, and photorealistic imagery.',
    description: 'Midjourney is a leading image synthesis model, primarily accessed through Discord commands (and a new web interface). It is renowned for its strong artistic "hand" and ability to create complex, detailed, and often surreal compositions that are highly coherent and aesthetically pleasing. It excels at stylistic control, photorealism, and interpreting creative prompts.',
    tags: ['image-gen', 'creative', 'design-tools', 'art'],
    personas: ['designer', 'creative', 'marketer', 'general', 'writer'],
    hasNewModel: false,
    hasFreeTier: false,
    models: [
      {
        id: 'midjourney-v7',
        name: 'Midjourney v7',
        value: 'The flagship model offering unparalleled aesthetic quality, photorealism, and prompt adherence. Includes basic 3D and video generation capabilities.',
        useCases: [
          'Creating concept art for films, games, and architecture.',
          'Generating hyper-realistic product mockups for marketing.',
          'Designing artistic logos, illustrations, and brand assets.',
          'Visualizing complex scenes for storyboarding.'
        ]
      }
    ],
    notes: [
      'There is no persistent free tier, only occasional free trials. Requires a paid subscription.',
      'The primary interface is a Discord bot, which can have a learning curve for new users, though a web-based generation UI is now standard for subscribers.',
      'There is no official API for developers.'
    ]
  },
  {
    id: 'jasper-ai',
    name: 'Jasper',
    vendor: 'Jasper AI',
    country: "USA",
    summary: 'An AI platform for marketing teams focused on brand-consistent content creation and campaign automation.',
    description: 'Jasper is a generative AI platform designed for business and marketing teams. It differentiates by focusing on brand voice, allowing users to upload brand guidelines, style guides, and product catalogs. It then generates on-brand copy for ads, social media, blogs, and emails. Includes features for team collaboration, campaign generation, and performance analytics.',
    tags: ['writing', 'marketing', 'business', 'productivity', 'paid', 'automation'],
    personas: ['marketer', 'writer', 'business', 'creative', 'pm'],
    hasNewModel: false,
    hasFreeTier: false,
    models: [
      {
        id: 'jasper-brand-voice',
        name: 'Brand Voice Engine',
        value: 'A fine-tuned model that learns your company\'s tone, style, and product information to generate consistent content.',
        useCases: [
          'Generate 10 variations of an ad for a new product, all perfectly matching the brand voice.',
          'Rewrite a technical document into a user-friendly blog post.',
          'Draft an entire email campaign for a product launch.'
        ]
      },
      {
        id: 'jasper-campaign-builder',
        name: 'Campaign Builder',
        value: 'An agentic tool that generates a full set of marketing assets for a campaign from a single brief.',
        useCases: [
          'Input a simple brief and receive a landing page, social media posts, ad copy, and blog ideas.',
          'Repurpose a long-form webinar into a blog post, 5 social posts, and an email newsletter.',
          'Brainstorm and execute a complete content marketing strategy.'
        ]
      }
    ],
    notes: [
      'This is a premium, paid tool focused on B2B marketing ROI, not a general-purpose chatbot.',
      'Offers a trial period, but no permanent free tier.',
      'Integrates with various marketing tools and platforms (CMS, social media schedulers).'
    ]
  },
  {
    id: 'pika-labs',
    name: 'Pika',
    vendor: 'Pika Labs',
    country: "USA",
    summary: 'An AI platform focused on generating and editing high-quality video clips from text prompts and static images.',
    description: 'Pika is a generative video tool that allows users to create short, high-fidelity video clips from text (text-to-video), animate static images (image-to-video), and modify existing videos (video-to-video). It offers fine-grained controls for camera motion, aspect ratio, character consistency, and style, making it popular for social media content, storyboarding, and creative expression.',
    tags: ['video-gen', 'creative', 'design-tools', 'multimodal'],
    personas: ['creative', 'designer', 'marketer', 'general', 'student'],
    hasNewModel: false,
    hasFreeTier: true,
    models: [
      {
        id: 'pika-1-5-pro',
        name: 'Pika 1.5 Pro',
        value: 'The primary generative model for creating and editing video with strong coherence, motion control, and style adherence.',
        useCases: [
          'Animate a logo or static illustration for a social media post.',
          'Generate a short cinematic clip ("a drone shot flying over a futuristic city at night").',
          'Change the style of an existing video clip (e.g., "make this video look like anime").',
          'Extend the duration of a video clip with consistent motion.'
        ]
      }
    ],
    notes: [
      'Free tier includes a watermark and has daily usage credits.',
      'Paid plans offer more credits, remove the watermark, and provide faster generation queues.',
      'Video generation is computationally expensive; clips are typically limited to a few seconds in length.'
    ]
  },
  {
    id: 'gamma',
    name: 'Gamma',
    vendor: 'Gamma',
    country: "USA",
    summary: 'An AI-powered tool for creating and presenting presentations, documents, and webpages from a single text prompt.',
    description: 'Gamma is a presentation tool that uses AI to design and populate entire slide decks from a simple prompt. Users can generate a presentation, then edit the "cards" (slides) using a flexible, block-based editor. It differentiates from traditional slide software (like PowerPoint) by focusing on AI-first generation and a web-native, interactive format that is faster to create and more engaging to view.',
    tags: ['presentation', 'productivity', 'design-tools', 'no-code', 'business', 'writing'],
    personas: ['pm', 'business', 'student', 'marketer', 'general', 'analyst'],
    hasNewModel: false,
    hasFreeTier: true,
    models: [
      {
        id: 'gamma-generation-engine',
        name: 'Gamma AI Designer',
        value: 'The core engine that translates a text prompt into a fully designed, multi-page presentation or document.',
        useCases: [
          'Generate a 10-slide pitch deck from a 2-sentence description of a business idea.',
          'Turn a set of bullet-point notes from a meeting into a formal report.',
          'Create a visually engaging webpage or personal portfolio from a text document.'
        ]
      }
    ],
    notes: [
      'Operates on a credit system for AI generation. Free tier includes a starting set of credits.',
      'Presentations are web-based by default, though export to PDF/PPT is available on paid plans.',
      'Focuses on speed and design, may require manual tuning for highly complex data slides.'
    ]
  },
  {
    id: 'qwen',
    name: 'Qwen (Tongyi Qianwen)',
    vendor: 'Alibaba Cloud',
    country: "China",
    summary: 'A family of high-performance, open-source and proprietary models from Alibaba, known for strong multilingual and coding capabilities.',
    description: 'Qwen is a series of models by Alibaba. The family includes both open-source models (like Qwen 2) and proprietary, closed-source models (like Qwen-Max). They are highly regarded for their strong performance in non-English languages (especially Chinese and Arabic) and competitive coding/reasoning skills.',
    tags: ['open', 'multilingual', 'coding', 'api-available', 'chat', 'reasoning'],
    personas: ['developer', 'researcher', 'business', 'student'],
    hasNewModel: false,
    hasFreeTier: true,
    models: [
      {
        id: 'qwen-3-max',
        name: 'Qwen 3 Max',
        value: 'Alibaba\'s flagship proprietary model, a direct competitor to GPT-5 and Claude 4 Opus, with SOTA performance.',
        useCases: [
          'Powering complex, multilingual customer service operations.',
          'Performing financial analysis and report generation in multiple languages.',
          'Advanced scientific and medical research.'
        ]
      },
      {
        id: 'qwen-3-coder',
        name: 'Qwen 3 Coder',
        value: 'A specialized, open-weight model fine-tuned for code generation, debugging, and explanations, competitive with GitHub Copilot.',
        useCases: [
          'Integrating into an IDE for code completion.',
          'Running locally for secure, on-premise code generation.',
          'Debugging and optimizing complex SQL queries.'
        ]
      }
    ],
    notes: [
      'The open-source models (e.g., Qwen 2 family) are completely free for research and commercial use (under Apache 2.0 license).',
      'Proprietary models are accessible via Alibaba Cloud (Tongyi Qianwen) API, which has a free tier.'
    ]
  },
  {
    id: 'open-router',
    name: 'OpenRouter',
    vendor: 'OpenRouter, Inc.',
    country: "USA",
    summary: 'A unified API endpoint that routes requests to hundreds of different LLMs, including open-source and proprietary models.',
    description: 'OpenRouter is not a model itself, but an API aggregator. It provides a single, standardized API interface (compatible with OpenAI\'s) to access a vast library of models (e.g., GPT, Claude, Llama, Mistral). It\'s ideal for developers who want to experiment with multiple models, find the cheapest/fastest one for a task, or build applications with model-routing logic without managing multiple API keys.',
    tags: ['api-available', 'developer-tools', 'routing', 'open', 'productivity'],
    personas: ['developer', 'researcher', 'pm', 'business'],
    hasNewModel: false,
    hasFreeTier: true,
    models: [
      {
        id: 'model-router-api',
        name: 'Unified API',
        value: 'A single API that provides access to 100+ models, with standardized pricing and response formats.',
        useCases: [
          'Build an app that lets users choose between GPT-5, Claude 4, and Llama 3.',
          'Prototype a new feature by testing 10 different models simultaneously to see which performs best.',
          'Create a "fallback" system: try a fast, cheap model first, and if it fails, auto-retry with a powerful, expensive one.'
        ]
      }
    ],
    notes: [
      'Free to sign up, and provides a small amount of trial credits.',
      'Pricing is pay-as-you-go per-model, often with a small markup over the base model provider\'s cost.',
      'A key tool for developers building model-agnostic applications.'
    ]
  },
  {
    id: 'anything-llm',
    name: 'AnythingLLM',
    vendor: 'Mintplex Labs Inc.',
    country: "USA",
    summary: 'An open-source, self-hosted RAG platform to create private, document-aware chatbots.',
    description: 'AnythingLLM is an open-source application that lets you build a private "chat-with-your-documents" system. You host it yourself, connect it to any LLM (local or API), and feed it documents (PDFs, .txt, .md, etc.). It handles the vectorization, storage, and RAG (Retrieval-Augmented Generation) pipeline. It\'s the go-to for individuals or businesses wanting a secure, private ChatGPT-like experience for their own data.',
    tags: ['open-source', 'local', 'privacy-focused', 'rag', 'developer-tools', 'no-code'],
    personas: ['developer', 'business', 'researcher', 'analyst', 'student'],
    hasNewModel: false,
    hasFreeTier: true,
    models: [
      {
        id: 'anythingllm-rag-pipeline',
        name: 'Private RAG Pipeline',
        value: 'A full-stack, self-hosted system that connects your documents to a chat interface, powered by your chosen LLM.',
        useCases: [
          'A business creating an internal-only chatbot that can answer questions about its company policies and technical docs.',
          'A researcher uploading 100 PDFs to chat with their entire research library.',
          'A developer running it locally with an open-source model (like Llama) for 100% data privacy.'
        ]
      }
    ],
    notes: [
      'Completely free and open-source. A hosted, managed "Enterprise" version is also available.',
      'Requires some technical setup to host (though a desktop app simplifies this).',
      'The quality of the answers depends entirely on the LLM you connect to it (e.g., GPT-4, Llama 3).'
    ]
  },
  {
    id: 'mistral-ai',
    name: 'Mistral',
    vendor: 'Mistral AI',
    country: "France",
    summary: 'A family of high-performance, efficient open-weight and proprietary models known for speed and strong reasoning.',
    description: 'Mistral AI, a Paris-based company, offers a range of models, from small, extremely fast open-weight models (like Mistral-N) to large-scale proprietary models (like Mistral-Ultra). They are known for their \'mixture-of-experts\' (MoE) architecture, which provides top-tier performance at a lower computational cost. They are a popular choice for developers needing speed, cost-efficiency, and strong multilingual capabilities.',
    tags: ['open', 'api-available', 'coding', 'multilingual', 'developer-tools', 'reasoning'],
    personas: ['developer', 'researcher', 'business', 'analyst'],
    hasNewModel: false,
    hasFreeTier: true,
    models: [
      {
        id: 'mistral-ultra-2',
        name: 'Mistral Ultra 2',
        value: 'The flagship proprietary model, competing directly with GPT-5 and Claude 4 for top-tier reasoning, coding, and multilingual tasks.',
        useCases: [
          'Powering complex enterprise automation workflows.',
          'As a high-performance backend for a customer-facing application.',
          'Complex financial or scientific data analysis.'
        ]
      },
      {
        id: 'mistral-n',
        name: 'Mistral-N',
        value: 'A highly capable, open-weight "small" model (SSM) designed for high speed and low-cost, runnable on-device or at the edge.',
        useCases: [
          'On-device "smart" replies for mobile apps.',
          'Running a local, private code assistant.',
          'Powering high-throughput, low-latency API endpoints for simple tasks.'
        ]
      }
    ],
    notes: [
      'A key competitor to both OpenAI and Llama, balancing open-source roots with commercial-grade offerings.',
      'Open-weight models are free for download; API access (for proprietary models) is pay-as-you-go with a free trial tier.'
    ]
  },
  {
    id: 'suno-ai',
    name: 'Suno',
    vendor: 'Suno, Inc.',
    country: "USA",
    summary: 'An AI music and song generator that creates full songs (vocals, instruments, lyrics) from text prompts.',
    description: 'Suno is a generative audio tool that specializes in creating complete musical pieces. Users provide a text prompt describing the style, tempo, and theme, and (optionally) lyrics. Suno generates a full-fidelity, two-minute song, often with surprisingly coherent vocals and instrumentation. It\'s ideal for creators, musicians needing prototypes, or marketers needing custom royalty-free music.',
    tags: ['audio-gen', 'music', 'creative', 'productivity', 'generative'],
    personas: ['creative', 'marketer', 'general', 'designer', 'student'],
    hasNewModel: false,
    hasFreeTier: true,
    models: [
      {
        id: 'suno-v4-pro',
        name: 'Suno v4 Pro',
        value: 'The flagship music generation model with improved vocal/instrument coherence, longer song generation, and audio-to-audio style transfer.',
        useCases: [
          'Create a 2-minute custom song in any genre ("a soulful pop song about a robot learning to love").',
          'Generate royalty-free background music for a YouTube video or podcast.',
          'Prototype a song idea for a band by generating a "demo" track.'
        ]
      }
    ],
    notes: [
      'Free tier provides daily credits to generate a limited number of songs.',
      'Paid plans offer more credits, priority generation, and commercial rights to the songs you create.'
    ]
  },
  {
    id: 'runway-ml',
    name: 'Runway',
    vendor: 'Runway AI',
    country: "USA",
    summary: 'An advanced AI video generation and editing platform for creating cinematic, controllable video content.',
    description: 'Runway is a comprehensive, web-based suite of AI tools for video creators. While it includes image generation and editing, its flagship feature is its video generation model (Gen-3). It allows for text-to-video, image-to-video, and video-to-video generation with advanced controls over camera motion, character consistency, and style. It is considered a professional-grade tool for filmmakers, advertisers, and artists.',
    tags: ['video-gen', 'creative', 'design-tools', 'multimodal', 'art', 'productivity'],
    personas: ['designer', 'creative', 'marketer', 'business'],
    hasNewModel: false,
    hasFreeTier: true,
    models: [
      {
        id: 'runway-gen-3-pro',
        name: 'Gen-3 Pro',
        value: 'A state-of-the-art video generation model focused on cinematic quality, character consistency, and precise camera/motion control.',
        useCases: [
          'Generating realistic B-roll for a commercial ("a close-up shot of coffee beans falling in slow motion").',
          'Creating entire animated storyboards from a script.',
          'Applying the style of one video to another (video-to-video style transfer).'
        ]
      },
      {
        id: 'runway-ai-magic-tools',
        name: 'AI Magic Tools',
        value: 'A suite of 30+ AI-powered video editing tools, including object removal, background replacement, and motion tracking.',
        useCases: [
          'Remove an unwanted person or object from a video clip.',
          'Instantly replace the background of a video without a green screen.',
          'Transcribe and generate subtitles for a video automatically.'
        ]
      }
    ],
    notes: [
      'Operates on a credit system, which can be consumed quickly with video generation.',
      'Free tier includes a limited number of credits and a watermark on exports.',
      'Considered more of a "pro" tool than Pika, with a steeper learning curve but more granular control.'
    ]
  },
  {
    id: 'elevenlabs',
    name: 'ElevenLabs',
    vendor: 'ElevenLabs',
    country: "USA",
    summary: 'AI text-to-speech (TTS) and voice cloning platform for creating lifelike, emotive audio.',
    description: 'A leading platform for generating high-quality, natural-sounding speech in multiple languages. It is known for its "Voice Cloning" (creating a digital model of a specific voice) and "Speech Synthesis" (generating new speech with fine-grained control over emotion, pacing, and intonation). Ideal for content creators, developers, and businesses needing scalable audio production.',
    tags: ['audio-gen', 'voice-cloning', 'tts', 'api-available', 'creative', 'productivity', 'multimodal'],
    personas: ['creative', 'marketer', 'developer', 'business', 'general'],
    hasNewModel: false,
    hasFreeTier: true,
    models: [
      {
        id: 'speech-synthesis-v3',
        name: 'Speech Synthesis',
        value: 'Generates new audio from text with unparalleled control over emotion, prosody, and style.',
        useCases: [
          'Creating realistic voice-overs for videos or podcasts.',
          'Powering dynamic, real-time-spoken NPCs in a video game.',
          'Generating audiobooks or dynamic accessibility-focused content.'
        ]
      },
      {
        id: 'voice-cloning-v3',
        name: 'Voice Cloning',
        value: 'Creates a high-fidelity, controllable digital replica of a specific voice from a short audio sample.',
        useCases: [
          'Having a creator "read" an ad in their own voice without recording it.',
          'Preserving a voice for personal or medical use.',
          'Creating a consistent brand voice for an automated customer service line.'
        ]
      }
    ],
    notes: [
      'Free tier has limits on characters, audio quality, and the number of cloned voices.',
      'Voice cloning requires user verification and explicit consent for ethical use; you cannot clone voices you don\'t have permission for.',
      'An API is available for developers to integrate voice generation into their applications.'
    ]
  },
  {
    id: 'notion-ai',
    name: 'Notion AI',
    vendor: 'Notion',
    country: "USA",
    summary: 'An AI assistant integrated into the Notion workspace for summarizing, writing, and organizing information.',
    description: 'Notion AI is a set of features built directly into the Notion connected workspace. It\'s not a standalone tool, but an assistant that operates on your existing notes, documents, and databases. It can summarize long pages, draft content (like emails or blog posts), find action items, and populate database properties, all within your existing workflow.',
    tags: ['writing', 'productivity', 'team-collaboration', 'automation', 'no-code', 'pkm', 'business'],
    personas: ['student', 'pm', 'writer', 'marketer', 'business', 'general', 'analyst', 'researcher'],
    hasNewModel: false,
    hasFreeTier: true,
    models: [
      {
        id: 'notion-ai-assistant',
        name: 'Notion AI Assistant',
        value: 'A contextual assistant that can generate, edit, or summarize content on any Notion page.',
        useCases: [
          'Summarize a long set of meeting notes into key takeaways and action items.',
          'Draft a blog post or marketing email from a simple prompt.',
          'Translate a block of text into another language in-place.'
        ]
      },
      {
        id: 'notion-ai-autofill',
        name: 'Notion AI Autofill (Database)',
        value: 'AI-powered database property that automatically populates columns based on other data in the entry.',
        useCases: [
          'Automatically tag a customer feedback entry with a sentiment (Positive/Negative).',
          'Extract a summary from a long text entry and place it in a "Summary" column.',
          'Generate follow-up tasks based on the content of a project note.'
        ]
      }
    ],
    notes: [
      'Notion AI is a paid add-on to the standard Notion subscription but can be used for free with a limited number of AI credits.',
      'The AI\'s context is primarily limited to the page or database you are working in, not the entire workspace (for privacy reasons).',
      'Also includes "Q&A" feature, which can answer questions based on your workspace documents.'
    ]
  },
  {
    id: 'uizard',
    name: 'Uizard',
    vendor: 'Uizard',
    country: "Denmark",
    summary: 'An AI-powered UI design tool for rapidly creating wireframes, mockups, and prototypes from text prompts.',
    description: 'Uizard is a design tool built for non-designers and for rapid prototyping. Its key feature is its ability to generate multi-screen UI mockups (for mobile or web) from simple text descriptions ("Autodesigner"). It can also convert hand-drawn sketches or screenshots into editable digital designs. Ideal for PMs, founders, and developers who need to visualize an idea quickly.',
    tags: ['design-tools', 'ui-design', 'prototyping', 'no-code', 'automation', 'creative', 'developer-tools'],
    personas: ['designer', 'pm', 'developer', 'business', 'student', 'marketer'],
    hasNewModel: false,
    hasFreeTier: true,
    models: [
      {
        id: 'uizard-autodesigner',
        name: 'Autodesigner',
        value: 'Generates multi-screen, editable UI mockups for web or mobile apps from a single text prompt.',
        useCases: [
          'Prototype a 5-screen mobile app for a "coffee shop locator" in 2 minutes.',
          'Generate a landing page design for a new product based on a text description.',
          'Create a starting point for a complex settings menu or user dashboard.'
        ]
      },
      {
        id: 'uizard-screenshot-scanner',
        name: 'Screenshot/Sketch Scanner',
        value: 'Converts a static image (like a screenshot or a hand-drawn sketch) into an editable digital UI design.',
        useCases: [
          'Take a photo of a whiteboard wireframe and turn it into a clickable prototype.',
          'Upload a screenshot of an app you like and use it as a basis for your own design.',
          'Quickly digitize and iterate on low-fidelity paper mockups.'
        ]
      }
    ],
    notes: [
      'Free tier exists with limited features and Uizard branding.',
      'Paid plans unlock more templates, assets, and export options.',
      'It\'s best for rapid prototyping, not for pixel-perfect final production design (which is where Figma excels).'
    ]
  },
  {
    id: 'adobe-firefly',
    name: 'Adobe Firefly',
    vendor: 'Adobe',
    country: "USA",
    summary: 'Adobe\'s family of creative generative AI models, deeply integrated into Photoshop, Illustrator, Premiere, and Express.',
    description: 'Firefly is not a single tool, but a suite of AI features that power Adobe\'s Creative Cloud apps. It is trained on licensed and public domain content, making it "commercially safe" for enterprise use. It includes features like Generative Fill (Photoshop), Text-to-Vector (Illustrator), and Text-to-Video effects (Premiere Pro). It\'s designed for creative professionals who need AI to enhance, not just replace, their existing workflows.',
    tags: ['image-gen', 'video-gen', 'design-tools', 'creative', 'ecosystem', 'productivity', 'multimodal', 'business'],
    personas: ['designer', 'creative', 'marketer', 'business', 'general'],
    hasNewModel: false,
    hasFreeTier: true,
    models: [
      {
        id: 'firefly-image-3',
        name: 'Firefly Image 3 (in Photoshop)',
        value: 'The core model for image generation and in-painting, integrated directly into Photoshop workflows.',
        useCases: [
          'Use "Generative Fill" to seamlessly remove an object from a photo.',
          'Use "Generative Expand" to extend the background of an image in any direction.',
          'Generate a new background or character concept directly on a new layer.'
        ]
      },
      {
        id: 'firefly-vector',
        name: 'Firefly Vector (in Illustrator)',
        value: 'A model that generates editable, resolution-independent vector graphics from text prompts.',
        useCases: [
          'Generate an icon set for a new app in a specific style.',
          'Create a complex vector scene or background for an illustration.',
          'Generate brand assets like logos or patterns from a text description.'
        ]
      },
      {
        id: 'firefly-video',
        name: 'Firefly Video (in Premiere Pro)',
        value: 'AI features for video post-production, including object removal and text-to-video effects.',
        useCases: [
          'Remove an unwanted boom mic or logo from a video clip.',
          'Change the weather in a scene (e.g., "make it look like it\'s snowing").',
          'Generate B-roll or special effects from a text prompt.'
        ]
      }
    ],
    notes: [
      'Access is based on a "generative credits" system.',
      'Credits are included in most Creative Cloud subscriptions, and a free plan (e.g., in Adobe Express) offers a limited number of credits.',
      'The focus on a "commercially safe" training dataset is its key differentiator for businesses.'
    ]
  },
  {
    id: "canva-magic-studio",
    name: "Canva (Magic Studio)",
    vendor: "Canva",
    country: "Australia",
    summary: "An all-in-one visual communication platform with a deeply integrated suite of AI tools for design, writing, and video.",
    description: "Canva's Magic Studio is not a single tool, but an AI-powered 'Creative Operating System' built for the mass market (non-designers, marketers, business users). Its key differentiator is its 'all-in-one' nature. It combines text-to-image, presentation generation, video creation, AI writing, and photo editing into one seamless, user-friendly interface, all powered by its proprietary 'Canva Design Model' (which understands design logic) and partner models (like Google's Veo and OpenAI's GPT).",
    tags: ["design-tools", "presentation", "image-gen", "video-gen", "writing", "marketing", "no-code", "business", "ecosystem", "free-tier"],
    personas: ["marketer", "pm", "business", "general", "student", "creative", "designer"],
    hasNewModel: false,
    hasFreeTier: true,
    models: [
      {
        id: "canva-design-model",
        name: "Magic Design (Design Model)",
        value: "Canva's proprietary foundational model that understands design principles like layout, balance, and font pairing.",
        useCases: [
          "Generate a 10-slide, fully-designed presentation from a single text prompt.",
          "Instantly create a set of on-brand social media posts from a text description.",
          "Suggest layout improvements or apply a brand's style to an existing design."
        ]
      },
      {
        id: "canva-magic-media",
        name: "Magic Media (Image & Video)",
        value: "A suite of generative tools for creating visual media, powered by Canva, Google Veo-3, and other partners.",
        useCases: [
          "Generate a high-quality, short video clip from a text prompt (text-to-video).",
          "Create a specific image or graphic element in a matching style for your design (text-to-image).",
          "Generate a realistic AI voiceover for a presentation or video clip."
        ]
      },
      {
        id: "canva-magic-suite",
        name: "Magic Edit & Write",
        value: "A collection of contextual AI tools for editing photos and text, including tech from OpenAI.",
        useCases: [
          "Use 'Magic Write' to draft a blog post, summarize notes, or rewrite copy in a different tone.",
          "Use 'Magic Edit' to select an object in a photo and replace it via a text prompt (e.g., 'change the blue car to a red bike').",
          "Use 'Magic Eraser' to remove unwanted objects or people from a photograph seamlessly."
        ]
      }
    ],
    notes: [
      "The Free tier includes many AI features but with strict usage limits (e.g., 50 lifetime text-to-images).",
      "The Pro tier ($12.99/month) provides significantly higher AI credits (e.g., 500/month) and unlocks premium features.",
      "Canva's acquisition of Leonardo.AI (also on this list) is expected to further enhance its high-end, pro-level image generation capabilities."
    ]
  },
  {
    id: 'luma-ai',
    name: 'Luma AI',
    vendor: 'Luma Labs',
    country: "USA",
    summary: 'A generative AI platform for creating cinematic video (Dream Machine) and high-quality 3D models (NeRF).',
    description: 'Luma AI has evolved from a 3D capture (NeRF) tool into a major generative media platform. Its key differentiators are its "Dream Machine" model for high-quality, coherent video generation and its foundational tools for creating interactive 3D assets from text, images, or video. It is used by filmmakers for pre-visualization, game developers for asset creation, and marketers for product showcases.',
    tags: ['video-gen', '3d-gen', 'creative', 'design-tools', 'api-available', 'multimodal'],
    personas: ['designer', 'creative', 'marketer', 'developer', 'business'],
    hasNewModel: true,
    hasFreeTier: true,
    models: [
      {
        id: 'luma-dream-machine-2',
        name: 'Dream Machine 2',
        value: 'A state-of-the-art text-to-video and image-to-video model known for its cinematic quality, smooth motion, and character consistency.',
        useCases: [
          'Generating realistic or fantastical video clips for a short film.',
          'Animating a static image with realistic camera motion.',
          'Creating B-roll for a marketing video from text prompts.'
        ]
      },
      {
        id: 'luma-nerf-v3',
        name: 'Luma 3D (NeRF)',
        value: 'A model for generating interactive 3D scenes and objects from text prompts (text-to-3D) or video recordings (video-to-3D).',
        useCases: [
          'Scan a real-world object with a phone and export it as a 3D model.',
          'Generate a 3D model of a "dragon couch" from a text prompt for game prototyping.',
          'Create an interactive 3D product view for an e-commerce website.'
        ]
      }
    ],
    notes: [
      'Free tier provides a limited number of monthly credits for video and 3D generation.',
      'Video generation is computationally intensive; Pro plans are required for high-volume, faster, or unwatermarked renders.',
      'API access is available for both video and 3D generation, allowing integration into other apps.'
    ]
  },
  {
    id: 'zapier-ai',
    name: 'Zapier AI',
    vendor: 'Zapier',
    country: "USA",
    summary: 'An AI-powered automation platform for building agents and workflows that connect 5,000+ applications.',
    description: 'Zapier AI moves beyond simple "if-this-then-that" automation. It allows users to build AI agents that can make decisions, parse text, and trigger complex, multi-step workflows across different apps. Its differentiator is its massive ecosystem of integrations. It\'s ideal for businesses and power users looking to automate office tasks, marketing funnels, or data-entry processes.',
    tags: ['automation', 'no-code', 'productivity', 'business', 'api-available', 'agentic'],
    personas: ['business', 'pm', 'marketer', 'developer', 'analyst'],
    hasNewModel: false,
    hasFreeTier: true,
    models: [
      {
        id: 'zapier-ai-agent',
        name: 'Zapier AI Agent',
        value: 'A conversational interface for building and executing automations from natural language prompts.',
        useCases: [
          'Build an agent: "When I get a new lead in Salesforce, research their company, summarize it, and draft a personalized email in Gmail."',
          'Execute a one-off task: "Find the last 5 emails from this client and summarize their main concerns into a Slack message."'
        ]
      },
      {
        id: 'zapier-ai-steps',
        name: 'AI Steps (in Zaps)',
        value: 'AI-powered actions that can be added into any automated workflow ("Zap") to make decisions, format data, or generate content.',
        useCases: [
          'Add an AI step to a workflow to parse an incoming email and extract the invoice number and due date.',
          'Use an AI step to automatically categorize customer support tickets based on their sentiment and topic.',
          'Generate a social media post with AI based on a new entry in a Google Sheet.'
        ]
      }
    ],
    notes: [
      'The free tier includes a limited number of multi-step Zaps and AI actions.',
      'Paid plans are required for more complex workflows, higher task volumes, and access to premium apps (like Salesforce).'
    ]
  },
  {
    id: 'grammarly-ai',
    name: 'Grammarly',
    vendor: 'Grammarly, Inc.',
    country: "USA",
    summary: 'An AI writing partner that provides advanced grammar correction, style suggestions, and generative AI features.',
    description: 'Grammarly has evolved from a proofreader into a comprehensive AI writing assistant. While its core is still world-class grammar, spelling, and punctuation correction, it now includes generative AI for drafting, rewriting, and ideating. Its "Personal Voice" feature allows it to generate content that matches your unique writing style, making it ideal for professionals, students, and writers who want to augment—not just automate—their writing.',
    tags: ['writing', 'productivity', 'generative', 'browser-extension', 'business'],
    personas: ['writer', 'student', 'general', 'marketer', 'pm', 'business'],
    hasNewModel: false,
    hasFreeTier: true,
    models: [
      {
        id: 'grammarly-gen-ai',
        name: 'Generative AI Assistant',
        value: 'A generative model for composing new text, replying to emails, and rewriting existing text.',
        useCases: [
          'Draft a polite follow-up email from a single prompt ("remind them about the invoice").',
          'Instantly rewrite a paragraph to be more confident, concise, or formal.',
          'Generate a list of ideas for a blog post, complete with an outline.'
        ]
      },
      {
        id: 'grammarly-pro-engine',
        name: 'Proofreading & Style Engine',
        value: 'The core corrective model that checks for grammar, tone, clarity, and plagiarism.',
        useCases: [
          'Correct all spelling and grammar errors in a 10-page report.',
          'Receive suggestions to improve a sentence\'s clarity and remove passive voice.',
          'Check a document for accidental plagiarism against a massive database.'
        ]
      }
    ],
    notes: [
      'The free tier provides basic grammar and spelling checks.',
      'Premium plans are required for advanced style/tone suggestions, plagiarism detection, and a higher allowance of generative AI prompts.',
      'Works as a browser extension, a desktop app, and an add-in for Microsoft Word.'
    ]
  },
  {
    id: 'hugging-face',
    name: 'Hugging Face',
    vendor: 'Hugging Face, Inc.',
    country: "USA",
    summary: 'The leading open-source platform ("GitHub for AI") for sharing, finding, and running AI models.',
    description: 'Hugging Face is the central hub for the open-source AI community. It\'s not a single tool, but a platform that hosts hundreds of thousands of models, datasets, and "Spaces" (demo apps). Developers use its "Transformers" library to easily download and use open-source models (like Llama or Mistral), and its "Inference API" to run models in the cloud.',
    tags: ['open-source', 'developer-tools', 'api-available', 'hosting', 'coding', 'research'],
    personas: ['developer', 'researcher', 'analyst', 'student', 'business'],
    hasNewModel: false,
    hasFreeTier: true,
    models: [
      {
        id: 'hugging-face-hub',
        name: 'Model Hub & Datasets',
        value: 'A massive, open-source repository of pre-trained models and datasets for every modality (text, image, audio, 3D).',
        useCases: [
          'Find and download the latest open-source LLM from Meta or Mistral to run locally.',
          'Browse and test thousands of fine-tuned models for specific tasks (e.g., "French-to-English translation").',
          'Access public datasets to train or fine-tune your own AI model.'
        ]
      },
      {
        id: 'hugging-face-inference-api',
        name: 'Inference API & Spaces',
        value: 'A service that lets developers run any model from the Hub via a simple API, without managing servers.',
        useCases: [
          'Prototype an app that uses an open-source model without any setup.',
          'Integrate a niche AI model (e.g., audio separation) into your application with a simple API call.',
          'Deploy a lightweight, interactive demo of your own model using "Spaces".'
        ]
      }
    ],
    notes: [
      'The platform is free for public and open-source projects.',
      'Paid "Pro" and "Enterprise" tiers are available for private model hosting, faster compute, and dedicated inference endpoints.'
    ]
  },
  {
    id: 'synthesia',
    name: 'Synthesia',
    vendor: 'Synthesia',
    country: "UK",
    summary: 'A leading AI platform for creating professional videos with photorealistic AI avatars and voiceovers.',
    description: 'Synthesia is a business-focused video generator that replaces cameras and microphones with AI. Users type a script, choose an AI "avatar" (either a stock model or a custom digital twin of themselves), and the platform generates a video of that avatar speaking the script. It is ideal for corporate training, marketing, and internal communications.',
    tags: ['video-gen', 'avatar', 'business', 'marketing', 'productivity', 'api-available', 'audio-gen'],
    personas: ['business', 'marketer', 'creative', 'general', 'designer'],
    hasNewModel: false,
    hasFreeTier: false,
    models: [
      {
        id: 'synthesia-avatars',
        name: 'AI Avatars (Stock & Custom)',
        value: 'A library of 180+ stock AI avatars and a service to create a custom, high-fidelity "Studio Avatar" of yourself.',
        useCases: [
          'Create a 10-part training course with a consistent "presenter" without booking a film studio.',
          'Generate personalized sales videos at scale ("Hi [Customer Name], welcome to...").',
          'Instantly update a video by editing the text script, with no re-filming required.'
        ]
      },
      {
        id: 'synthesia-voiceover',
        name: 'AI Voiceover & Translation',
        value: 'A high-quality text-to-speech engine with 120+ languages and a one-click translation feature.',
        useCases: [
          'Create a high-quality voiceover for a video in a realistic, natural-sounding voice.',
          'Clone your own voice so your AI avatar sounds exactly like you.',
          'Instantly translate a single training video into 10 different languages with a matching voice.'
        ]
      }
    ],
    notes: [
      'There is no free tier, only a limited free demo generator.',
      '"Creator" and "Enterprise" plans are required for most business use.',
      'Creating a custom "Studio Avatar" of yourself is a paid add-on, often costing $1,000/year.'
    ]
  },
  {
    id: 'julius-ai',
    name: 'Julius AI',
    vendor: 'Julius AI',
    country: "USA",
    summary: 'An AI data analyst that answers questions, runs analysis, and creates visualizations from your data.',
    description: 'Julius is a user-friendly AI assistant for data analysis. Users can upload spreadsheets (Excel, CSV) or connect directly to databases (Postgres, Snowflake, BigQuery). You can then ask questions in plain English, and Julius will write and run the code (Python, R, SQL) to find the answer, generate charts, and create reports. It\'s built for analysts, marketers, and business owners who want to get insights from data without being a coding expert.',
    tags: ['data-analysis', 'automation', 'no-code', 'productivity', 'business', 'visualization'],
    personas: ['analyst', 'business', 'marketer', 'pm', 'researcher'],
    hasNewModel: false,
    hasFreeTier: true,
    models: [
      {
        id: 'julius-data-analyst',
        name: 'AI Data Analyst',
        value: 'A conversational AI that connects to data sources, runs analysis, and generates visualizations from natural language.',
        useCases: [
          'Upload an Excel file and ask "What was our total sales by region for Q3? Show me a bar chart."',
          'Connect to a database and ask "Find the top 10 customers by lifetime value and plot their churn risk."',
          'Automate a weekly report to be sent to Slack or email.'
        ]
      }
    ],
    notes: [
      'Free tier includes a limited number of queries and file uploads.',
      'Paid plans offer connections to more powerful databases (Snowflake, BigQuery), scheduled analysis, and higher API limits.',
      'Data is secured (SOC 2 Type II compliant) and is not used to train models.'
    ]
  },
  {
    id: 'pinecone-db',
    name: 'Pinecone',
    vendor: 'Pinecone',
    country: "USA",
    summary: 'A leading, managed vector database used to power high-performance AI applications like search and RAG.',
    description: 'Pinecone is not a tool you "use" as a consumer, but a critical piece of infrastructure developers use to build AI apps. It is a database built specifically for "vector embeddings" (the numerical representation of data). This allows developers to build extremely fast and scalable applications like semantic search, recommendation engines, and Retrieval-Augmented Generation (RAG) systems.',
    tags: ['developer-tools', 'api-available', 'database', 'rag', 'search', 'hosting'],
    personas: ['developer', 'business', 'researcher'],
    hasNewModel: false,
    hasFreeTier: true,
    models: [
      {
        id: 'pinecone-serverless-v3',
        name: 'Pinecone Serverless',
        value: 'A managed vector database that scales to billions of vectors, with a "pay-as-you-go" pricing model.',
        useCases: [
          'Powering a "chat-with-your-docs" RAG application for an enterprise.',
          'Building a large-scale semantic search engine that searches by meaning, not just keywords.',
          'Creating a real-time recommendation engine for an e-commerce site.'
        ]
      }
    ],
    notes: [
      'Has a generous free tier for developers to start building, with one index and limited storage.',
      'This is a pure developer tool (B2D) and requires coding (Python, JS) to use.',
      'The "serverless" model separates storage and compute costs, making it more cost-effective at scale.'
    ]
  },
  {
    id: 'khanmigo',
    name: 'Khanmigo',
    vendor: 'Khan Academy',
    country: "USA",
    summary: 'An AI-powered tutor and teaching assistant from Khan Academy, integrated with its educational content.',
    description: 'Khanmigo is an AI assistant for students and teachers. Unlike other chatbots, it is designed *not* to just give answers, but to act as a Socratic tutor, guiding students to learn the concept themselves. For teachers, it can write lesson plans, create rubrics, and draft emails. It is fully integrated with the Khan Academy library of courses and videos.',
    tags: ['education', 'student', 'tutor', 'writing', 'productivity', 'chat'],
    personas: ['student', 'general', 'researcher', 'writer'],
    hasNewModel: false,
    hasFreeTier: true,
    models: [
      {
        id: 'khanmigo-tutor',
        name: 'AI Tutor',
        value: 'A conversational AI tutor that guides students through math, science, and humanities problems.',
        useCases: [
          'A student gets stuck on an algebra problem and asks Khanmigo for a hint, not the answer.',
          'Practice for the SAT by having a conversation with a literary character (e.g., "Debate Gatsby").',
          'Get guided feedback on a draft of an essay or a college application.'
        ]
      },
      {
        id: 'khanmigo-teacher',
        name: 'AI Teaching Assistant',
        value: 'A tool for educators to assist with lesson planning, grading, and administrative tasks.',
        useCases: [
          'Generate a lesson plan for a 1-hour class on the American Civil War.',
          'Create a grading rubric for a 5-paragraph essay.',
          'Draft a positive email to a parent about their student\'s progress.'
        ]
      }
    ],
    notes: [
      'Khanmigo is free for all U.S. teachers.',
      'For parents and students, it requires a monthly subscription (around $4/month or $44/year), which is framed as a donation to the non-profit.'
    ]
  },
  {
    id: 'kling-ai',
    name: 'Kling',
    vendor: 'Kuaishou (Kwai)',
    country: "China",
    summary: 'A highly competitive text-to-video model from Kuaishou, known for generating long, high-fidelity clips.',
    description: 'Kling is a flagship AI video model and a direct competitor to Luma\'s Dream Machine and Runway. It is known for generating high-quality (1080p), long-duration (up to 2 minutes) videos with complex motion and strong physical realism. It also features advanced lip-syncing capabilities, making it a powerful tool for filmmakers and content creators.',
    tags: ['video-gen', 'creative', 'design-tools', 'multimodal', 'art', 'api-available'],
    personas: ['creative', 'designer', 'marketer', 'business'],
    hasNewModel: true,
    hasFreeTier: true,
    models: [
      {
        id: 'kling-2-5-turbo',
        name: 'Kling 2.5 Turbo',
        value: 'The flagship model for generating realistic, long-duration video with accurate physics and character coherence.',
        useCases: [
          'Generate a 2-minute short film scene from a detailed script prompt.',
          'Create a video of a person talking with accurate lip-sync from an audio file.',
          'Simulate complex physical interactions, like a car driving through a rainy city.'
        ]
      }
    ],
    notes: [
      'Access is typically managed through a waitlist and a free trial with credits, similar to other video models.',
      'API access is being rolled out to enterprise partners for integration into creative applications.',
      'Kling is developed by Kuaishou, the parent company of the short-form video app Kwai.'
    ]
  },
  {
    id: 'clipdrop',
    name: 'Clipdrop',
    vendor: 'Jasper (from Stability AI)',
    country: "UK",
    summary: 'A suite of AI-powered image editing tools and utilities, available as an app and an API.',
    description: 'Clipdrop is an "all-in-one" toolkit for visual editing, now owned by Jasper. It is not a single model but a collection of specialized AI tools. It provides simple, fast utilities for tasks that are often complex in other software. It is ideal for e-commerce, marketing, and designers who need quick, high-quality image edits.',
    tags: ['image-gen', 'design-tools', 'productivity', 'api-available', 'creative', 'freemium'],
    personas: ['designer', 'marketer', 'creative', 'developer', 'general'],
    hasNewModel: false,
    hasFreeTier: true,
    models: [
      {
        id: 'clipdrop-utilities',
        name: 'AI Utility Suite',
        value: 'A collection of over 10 specialized AI tools for image manipulation, powered by models like Stable Diffusion.',
        useCases: [
          'Use "Generative Fill" to change a person\'s clothing or add an object to a photo.',
          'Instantly remove the background from a complex product photo ("Remove Background").',
          'Upscale a low-resolution image to 4K without losing quality ("Image Upscaler").',
          'Remove unwanted objects, text, or people from a picture ("Cleanup").'
        ]
      }
    ],
    notes: [
      'Acquired by Jasper from Stability AI in early 2024.',
      'The free tier allows for use of all tools but with limitations on resolution and speed.',
      'The Pro plan ($9/month) unlocks high-resolution outputs and priority processing.',
      'All tools are also available via a well-documented API for developers.'
    ]
  },
  {
    id: 'deepseek-ai',
    name: 'DeepSeek',
    vendor: 'DeepSeek AI',
    country: "China",
    summary: 'A family of high-performance, open-weight models from China, specialized in coding and reasoning.',
    description: 'DeepSeek is an AI research company that develops a range of powerful "open-weight" models. Its key differentiator is its Mixture-of-Experts (MoE) architecture, which makes its models highly efficient and cost-effective to run, offering performance that rivals top closed-source models. The "DeepSeek Coder" family is considered best-in-class for code generation, while its general "V-series" models are strong at chat, reasoning, and multilingual tasks.',
    tags: ['open-source', 'coding', 'reasoning', 'api-available', 'developer-tools', 'multilingual', 'MoE'],
    personas: ['developer', 'researcher', 'student', 'business'],
    hasNewModel: false,
    hasFreeTier: true,
    models: [
      {
        id: 'deepseek-v3',
        name: 'DeepSeek V3',
        value: 'A 671B (MoE) flagship general model with top-tier performance on par with leading closed-source models.',
        useCases: [
          'Powering an advanced, multilingual chatbot for customer service.',
          'Complex reasoning and problem-solving for research or analysis.',
          'As a cost-effective, high-performance backend for various AI applications.'
        ]
      },
      {
        id: 'deepseek-coder-v2',
        name: 'DeepSeek Coder V2',
        value: 'A state-of-the-art, open-weight model specifically trained for code generation and software development tasks.',
        useCases: [
          'Integrating into an IDE for advanced code completion and debugging.',
          'Generating entire applications or scripts from a natural language prompt.',
          'Running a local, secure, and offline co-pilot for enterprise development.'
        ]
      },
      {
        id: 'deepseek-vl',
        name: 'DeepSeek-VL',
        value: 'A strong vision-language model for multimodal tasks, capable of understanding and discussing images.',
        useCases: [
          'Analyzing and describing the content of an uploaded image.',
          'Answering complex visual questions (e.g., "What is the person in the background doing?").',
          'Powering a "seeing" chatbot for visually-impaired users.'
        ]
      }
    ],
    notes: [
      'The "open-weight" models are free for research and have a permissive license for commercial use, but it is not a standard "open-source" license.',
      'API access is available via their "DeepSeek Open Platform," which includes a free tier.',
      'As the company is based in China, some organizations may have data privacy or security concerns regarding sending data to its API.'
    ]
  }
];