import fs from 'node:fs';
import path from 'node:path';
import Ajv from 'ajv';
import addFormats from 'ajv-formats';

const tokenPath = path.resolve('tokens/blackroad.tokens.json');
const tokens = JSON.parse(fs.readFileSync(tokenPath, 'utf8'));

const ajv = new Ajv({ allErrors: true });
addFormats(ajv);

const schema = {
  type: 'object',
  required: ['color', 'radius', 'font'],
  properties: {
    color: {
      type: 'object',
      required: ['accent', 'neutral'],
      properties: {
        accent: {
          type: 'object',
          required: ['pink', 'electric'],
          properties: {
            pink: { type: 'string', pattern: '^#([A-Fa-f0-9]{6})$' },
            electric: { type: 'string', pattern: '^#([A-Fa-f0-9]{6})$' },
          },
        },
        neutral: {
          type: 'object',
          required: ['900', '50'],
          properties: {
            '900': { type: 'string', pattern: '^#([A-Fa-f0-9]{6})$' },
            '50': { type: 'string', pattern: '^#([A-Fa-f0-9]{6})$' },
          },
        },
      },
    },
    radius: {
      type: 'object',
      required: ['xs', 'md', 'xl'],
      properties: {
        xs: { type: 'string', pattern: '^\\d+(px)$' },
        md: { type: 'string', pattern: '^\\d+(px)$' },
        xl: { type: 'string', pattern: '^\\d+(px)$' },
      },
    },
    font: {
      type: 'object',
      required: ['display', 'body'],
      properties: {
        display: { type: 'string' },
        body: { type: 'string' },
      },
    },
  },
};

const validate = ajv.compile(schema);
const valid = validate(tokens);

if (!valid) {
  console.error('Token schema validation failed:', validate.errors);
  process.exit(1);
}

console.log('Tokens look valid.');
