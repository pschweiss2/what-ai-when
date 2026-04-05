import { z } from 'zod';

export const ModelSchema = z.object({
  id: z.string(),
  name: z.string(),
  value: z.string(),
  useCases: z.array(z.string()),
});

export const ToolSchema = z.object({
  id: z.string(),
  name: z.string(),
  vendor: z.string(),
  country: z.string().optional(),
  summary: z.string(),
  description: z.string().optional(),
  tags: z.array(z.string()),
  personas: z.array(z.string()),
  hasNewModel: z.boolean().default(false),
  hasFreeTier: z.boolean().default(false),
  models: z.array(ModelSchema).optional(),
  notes: z.array(z.string()).optional(),
}).transform(tool => ({
  ...tool,
  description: tool.description || tool.summary,
}));

export const PersonaSchema = z.object({
  id: z.string(),
  name: z.string(),
});

export const DataSchema = z.object({
  personas: z.array(PersonaSchema),
  tools: z.array(ToolSchema),
});
