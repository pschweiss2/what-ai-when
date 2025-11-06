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
    id: 'anthropic-claude',
    name: 'Claude',
    vendor: 'Anthropic',
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
    id: 'github-copilot',
    name: 'GitHub Copilot',
    vendor: 'Microsoft (GitHub)',
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
  }
];