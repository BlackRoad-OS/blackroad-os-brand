import fs from 'node:fs/promises';
import path from 'node:path';
import tokens from '../tokens/blackroad.tokens.json' with { type: 'json' };

type TokenRecord = Record<string, string | TokenRecord>;

const ROOT_CSS_PATH = path.resolve('css/brand.css');
const RUNTIME_TOKEN_PATH = path.resolve('src/tokens.ts');
const PACKAGE_TOKEN_PATH = path.resolve('packages/brand-js/src/tokens.ts');

const ensureDir = async (dir: string) => {
  await fs.mkdir(dir, { recursive: true });
};

const flattenTokens = (record: TokenRecord, prefix: string[] = []) => {
  const flat: Record<string, string> = {};
  Object.entries(record).forEach(([key, value]) => {
    if (value && typeof value === 'object' && !Array.isArray(value)) {
      Object.assign(flat, flattenTokens(value as TokenRecord, [...prefix, key]));
    } else {
      const name = ['--br', ...prefix, key].join('-');
      flat[name] = String(value);
    }
  });
  return flat;
};

const writeCss = async (flat: Record<string, string>) => {
  const fontImport =
    "@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Inter+Tight:wght@600;700&display=swap');\n";
  const lines = Object.entries(flat)
    .map(([name, value]) => `  ${name}: ${value};`)
    .join('\n');
  const css = `${fontImport}:root {\n${lines}\n}\n`;
  await fs.writeFile(ROOT_CSS_PATH, css);
};

const writeTs = async (flat: Record<string, string>) => {
  const header = `export const tokens = ${JSON.stringify(tokens, null, 2)} as const;\n`;
  const flatExport = `export const cssVariables = ${JSON.stringify(flat, null, 2)} as const;\n`;
  const typeExport = 'export type Tokens = typeof tokens;\n';
  const contents = `${header}\n${flatExport}\n${typeExport}`;

  await fs.writeFile(RUNTIME_TOKEN_PATH, contents);
  await ensureDir(path.dirname(PACKAGE_TOKEN_PATH));
  await fs.writeFile(PACKAGE_TOKEN_PATH, contents);
};

const run = async () => {
  await Promise.all([ensureDir('css'), ensureDir('src'), ensureDir('packages/brand-js/src')]);
  const flat = flattenTokens(tokens as TokenRecord);
  await Promise.all([writeCss(flat), writeTs(flat)]);
};

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
