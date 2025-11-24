import fs from 'node:fs';
import StyleDictionary from 'style-dictionary';
import config from './style-dictionary.config.js';

type TokenTree = Record<string, any>;

const isHslValue = (value: unknown): value is string =>
  typeof value === 'string' && /^\d{1,3} \d{1,3}% \d{1,3}%/.test(value);

const formatValue = (token: any) => {
  if (token.type === 'color' && isHslValue(token.original?.value)) {
    return `hsl(${token.original.value})`;
  }

  if (token.type === 'gradient' && typeof token.original?.value === 'string') {
    if (token.original.value.includes('hsl(')) return token.original.value;

    return token.original.value.replace(
      /(\d{1,3} \d{1,3}% \d{1,3}%)/g,
      'hsl($1)',
    );
  }

  return token.value;
};

StyleDictionary.registerTransform({
  name: 'br/name/path',
  type: 'name',
  transform: (token) => token.path.join('-'),
});

StyleDictionary.registerFormat({
  name: 'br/css',
  format: ({ dictionary }) => {
    const fontFaces = `@font-face {\n  font-family: 'Inter Variable';\n  src: url('/fonts/inter-variable.woff2') format('woff2');\n  font-weight: 100 900;\n  font-display: swap;\n}\n@font-face {\n  font-family: 'JetBrains Mono Variable';\n  src: url('/fonts/jetbrains-mono-variable.woff2') format('woff2');\n  font-weight: 100 800;\n  font-display: swap;\n}\n`;
    const lines = dictionary.allTokens.map(
      (prop) => `  --br-${prop.path.join('-')}: ${formatValue(prop)};`,
    );
    return `${fontFaces}:root {\n${lines.join('\n')}\n}\n`;
  },
});

const toNestedTree = (tokens: typeof StyleDictionary['allTokens']): TokenTree => {
  const tree: TokenTree = {};

  tokens.forEach((token) => {
    const last = token.path[token.path.length - 1];
    const levels = token.path.slice(0, -1);
    let cursor = tree;
    levels.forEach((level) => {
      if (!cursor[level]) cursor[level] = {};
      cursor = cursor[level];
    });
    cursor[last] = formatValue(token);
  });

  return tree;
};

StyleDictionary.registerFormat({
  name: 'br/ts',
  format: ({ dictionary }) => {
    const tree = toNestedTree(dictionary.allTokens);
    return `export const tokens = ${JSON.stringify(tree, null, 2)} as const;\n\nexport type Tokens = typeof tokens;\n`;
  },
});

const dictionary = new StyleDictionary(config);

function ensureOutputDirs() {
  const paths = ['css', 'src'];
  paths.forEach((dir) => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
  });
}

ensureOutputDirs();
dictionary.buildAllPlatforms();
