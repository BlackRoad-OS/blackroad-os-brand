import { cssVariables, tokens } from './tokens';

export { cssVariables, tokens };
export type { Tokens } from './tokens';

export type ApplyThemeOptions = {
  dark?: boolean;
  target?: HTMLElement;
};

const resolveTarget = (target?: HTMLElement) => {
  if (target) return target;
  if (typeof document !== 'undefined') return document.documentElement;
  return undefined;
};

const surfaceTokens = {
  light: {
    '--br-surface': 'var(--br-color-neutral-white)',
    '--br-text': 'var(--br-color-neutral-black)',
    '--br-surface-inverse': 'var(--br-color-neutral-black)',
  },
  dark: {
    '--br-surface': 'var(--br-color-neutral-black)',
    '--br-text': 'var(--br-color-neutral-white)',
    '--br-surface-inverse': 'var(--br-color-neutral-white)',
  },
};

export const applyTheme = (tokenTree = tokens, options: ApplyThemeOptions = {}) => {
  const target = resolveTarget(options.target);
  if (!target) return;

  const setVariable = (name: string, value: string | number) => {
    target.style.setProperty(name, String(value));
  };

  const walk = (obj: Record<string, unknown>, path: string[] = []) => {
    Object.entries(obj).forEach(([key, value]) => {
      if (value && typeof value === 'object' && !Array.isArray(value)) {
        walk(value as Record<string, unknown>, [...path, key]);
      } else {
        const variableName = ['--br', ...path, key].join('-');
        setVariable(variableName, value as string);
      }
    });
  };

  walk(tokenTree as Record<string, unknown>);

  const mode = options.dark ? 'dark' : 'light';
  Object.entries(surfaceTokens[mode]).forEach(([name, value]) => setVariable(name, value));
  if (options.dark) target.dataset.theme = 'dark';
  else target.dataset.theme = 'light';
};

export default tokens;
