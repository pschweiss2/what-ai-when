import yaml from 'js-yaml';
import { ToolSchema, PersonaSchema } from './schema.js';

const PERSONAS_YAML = `
personas:
  - id: all
    name: All tools
  - id: general
    name: General User
  - id: pm
    name: Product Manager
  - id: developer
    name: Developer
  - id: analyst
    name: Data/Business Analyst
  - id: designer
    name: Designer
  - id: researcher
    name: Researcher
  - id: student
    name: Student
  - id: business
    name: Business
  - id: writer
    name: Writer
  - id: marketer
    name: Marketer
`;

const TOOLS_YAML = `
tools:
  - id: openai-chatgpt
    name: ChatGPT
    vendor: OpenAI
    country: USA
    summary: An AI conversational assistant that generates human-like responses to text, image, audio and multimodal prompts.
    description: ChatGPT excels at conversational interaction across text (and increasingly audio/vision) with follow-up questions, edits and clarifications. It differentiates itself by supporting multimodal inputs (images, voice) and integration via API or custom GPTs, making it useful for writing, coding, research, and everyday productivity.
    tags: [chat, writing, coding, multimodal, productivity, api-available]
    personas: [general, writer, developer, analyst, student]
    hasNewModel: false
    hasFreeTier: true
    models:
      - id: gpt-5
        name: GPT-5
        value: Flagship unified reasoning model released August 2025 offering expert-level performance across domains.
        useCases:
          - Analyze a large multimodal dataset for research insights
          - Develop and debug a full-stack web application from a high-level prompt
          - Assist with domain-specific expert tasks like medical imaging interpretation
      - id: gpt-4o
        name: GPT-4o
        value: Previously flagship multimodal model before GPT-5 that balances text, vision, and audio with fast throughput.
        useCases:
          - Upload a photo of a circuit diagram and ask for explanation
          - Have a real-time voice-based conversation for brainstorming
          - Translate and summarise a foreign-language document including embedded visuals
    notes:
      - Free tier exists but has usage limits
      - Even advanced models can hallucinate; verification recommended for factual content
      - Access to newer models may require higher-tier subscriptions

  - id: anthropic-claude
    name: Claude 3 / 3.5
    vendor: Anthropic
    country: USA
    summary: An enterprise-grade conversational AI known for strong performance in complex reasoning, long context windows, and focus on safety.
    description: Claude excels at long-form content generation, complex reasoning tasks, and maintaining coherence across very long conversations. Its constitutional AI approach prioritizes helpfulness, harmlessness, and honesty.
    tags: [chat, writing, research, coding, long-context, api-available]
    personas: [researcher, developer, business, writer]
    hasNewModel: true
    hasFreeTier: true
    models:
      - id: claude-3-5-sonnet
        name: Claude 3.5 Sonnet
        value: Most intelligent model for complex tasks with exceptional speed and performance.
        useCases:
          - Analyze and summarize long legal documents or research papers
          - Build complex multi-file codebases with architectural planning
          - Create detailed creative writing with consistent tone and characters
      - id: claude-3-opus
        name: Claude 3 Opus
        value: Deep reasoning model for highly complex problems requiring extensive analysis.
        useCases:
          - Mathematical proofs and complex scientific analysis
          - Multi-step business strategy development
          - Detailed technical documentation generation
    notes:
      - Free tier available with reasonable usage limits
      - API access available through Anthropic's developer platform
      - Known for refusing harmful requests while remaining helpful

  - id: google-gemini
    name: Google Gemini
    vendor: Google
    country: USA
    summary: Google's family of multimodal AI models deeply integrated with the Google ecosystem.
    description: Gemini's core differentiator is native multimodality (text, code, image, audio, video) and deep integration across Google (Search, Workspace, Cloud). It excels in complex multi-step reasoning and long-context processing.
    tags: [chat, reasoning, coding, multimodal, api-available, long-context]
    personas: [general, developer, researcher, business, analyst]
    hasNewModel: false
    hasFreeTier: true
    models:
      - id: gemini-2-5-pro
        name: Gemini 2.5 Pro
        value: Google's most capable model with state-of-the-art performance and 1M token context window.
        useCases:
          - Analyzing 500-page legal documents for key clauses
          - Generating complex multi-file code for web applications
          - Developing AI agents that orchestrate steps across multiple apps
          - Performing deep research across hundreds of websites
      - id: gemini-2-5-flash
        name: Gemini 2.5 Flash
        value: Extremely fast, cost-efficient model designed for high-frequency tasks.
        useCases:
          - Building high-throughput customer service chatbots
          - Quickly analyzing images and video frames
          - Generating quick draft emails within Google Workspace
          - Translating real-time conversations with high speed
    notes:
      - Gemini Advanced bundled with Google One AI Premium ($19.99/month)
      - Free tier uses capable models with stricter daily limits
      - Accessible via chat app or API for developers

  - id: perplexity-ai
    name: Perplexity AI
    vendor: Perplexity AI
    country: USA
    summary: AI-powered search engine that provides direct answers with cited sources.
    description: Perplexity combines conversational AI with real-time web search, providing synthesized answers with verifiable source citations. It excels at research tasks requiring current information.
    tags: [search, research, text-generation, productivity, api-available]
    personas: [researcher, student, writer, developer, business]
    hasNewModel: false
    hasFreeTier: true
    notes:
      - Always provides source citations for verification
      - Free tier includes basic search capabilities
      - Pro tier adds more powerful models and file upload

  - id: meta-llama
    name: Meta Llama
    vendor: Meta
    country: USA
    summary: Open models available via many providers and local runtimes.
    description: Good for local/private deployments and fine-tuning experimentation. Meta's Llama models are open weights, allowing self-hosting and customization.
    tags: [open, local, fine-tune, coding, api-available]
    personas: [developer, analyst, researcher, student]
    hasFreeTier: true
    notes:
      - Can be run locally for complete privacy
      - Available through many hosting providers
      - Requires more technical setup than cloud alternatives
`;

function parseYamlData() {
  const personasData = yaml.load(PERSONAS_YAML);
  const toolsData = yaml.load(TOOLS_YAML);
  
  const personas = personasData.personas.map(p => PersonaSchema.parse(p));
  const tools = toolsData.tools.map(t => ToolSchema.parse(t));
  
  return { personas, tools };
}

export const { personas, tools } = parseYamlData();

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
    if (a.hasFreeTier !== b.hasFreeTier) {
      return freeFirst
        ? (b.hasFreeTier ? 1 : -1)
        : (a.hasFreeTier ? 1 : -1);
    }
    if (!a.name) return 1;
    if (!b.name) return -1;
    return a.name.localeCompare(b.name);
  });
}

export function getToolById(id) {
  return tools.find(t => t.id === id);
}

export function exportToYaml(data) {
  return yaml.dump(data, {
    indent: 2,
    lineWidth: -1,
    noRefs: true,
    sortKeys: false,
  });
}
