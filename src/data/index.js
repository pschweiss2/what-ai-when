import yaml from 'js-yaml';
import { ToolSchema, PersonaSchema } from './schema.js';
import { personas as jsPersonas, tools as jsTools } from './tools.js';

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

// Use the full tools array from tools.js (with validation)
export const personas = jsPersonas.map(p => PersonaSchema.parse(p));
export const tools = jsTools.map(t => ToolSchema.parse(t));

export { sortByCountry, sortByVendor, sortByName, sortByFreeTier } from './tools.js';

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
