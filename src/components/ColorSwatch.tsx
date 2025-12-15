import React from 'react';

export type ColorSwatchProps = {
  name: string;
  value: string;
  description?: string;
  token?: string;
};

export const ColorSwatch: React.FC<ColorSwatchProps> = ({ name, value, description, token }) => {
  return (
    <div
      style={{
        background: 'var(--br-color-neutral-100, #0c0c15)',
        border: '1px solid var(--br-color-neutral-300, #2a2a3d)',
        borderRadius: 'var(--br-radius-md, 0.5rem)',
        padding: 'var(--br-spacing-16, 1rem)',
        color: 'var(--br-color-neutral-600, #d1d2e0)',
      }}
    >
      <div
        style={{
          background: value,
          borderRadius: 'calc(var(--br-radius-md, 0.5rem) - 2px)',
          height: '96px',
          boxShadow: '0 16px 48px rgba(0, 0, 0, 0.35)',
        }}
      />
      <div style={{ marginTop: 'var(--br-spacing-12, 0.75rem)' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'baseline',
            justifyContent: 'space-between',
            gap: 'var(--br-spacing-8, 0.5rem)',
          }}
        >
          <strong style={{ color: 'var(--br-color-neutral-600, #d1d2e0)' }}>{name}</strong>
          <code
            style={{
              fontFamily: 'var(--br-typography-font-mono, "JetBrains Mono", monospace)',
              fontSize: '0.85rem',
            }}
          >
            {value}
          </code>
        </div>
        {token ? (
          <div
            style={{
              marginTop: 'var(--br-spacing-4, 0.25rem)',
              color: 'var(--br-color-neutral-500, #8b8ca3)',
              fontFamily: 'var(--br-typography-font-mono, "JetBrains Mono", monospace)',
              fontSize: '0.8rem',
            }}
          >
            {token}
          </div>
        ) : null}
        {description ? (
          <p
            style={{
              margin: 'var(--br-spacing-8, 0.5rem) 0 0',
              color: 'var(--br-color-neutral-500, #8b8ca3)',
              lineHeight: 1.5,
            }}
          >
            {description}
          </p>
        ) : null}
      </div>
    </div>
  );
};

export default ColorSwatch;
