import React from 'react';

export type GradientBlockProps = {
  name: string;
  gradient: string;
};

export const GradientBlock: React.FC<GradientBlockProps> = ({ name, gradient }) => {
  return (
    <div
      style={{
        borderRadius: 'var(--br-radius-lg, 0.75rem)',
        overflow: 'hidden',
        border: '1px solid var(--br-color-neutral-300, #2a2a3d)',
        boxShadow: '0 24px 60px rgba(0, 0, 0, 0.4)',
        background: 'var(--br-color-neutral-100, #0c0c15)',
      }}
    >
      <div style={{ background: gradient, height: '140px' }} />
      <div
        style={{
          padding: 'var(--br-spacing-12, 0.75rem) var(--br-spacing-16, 1rem)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          color: 'var(--br-color-neutral-600, #d1d2e0)',
        }}
      >
        <strong>{name}</strong>
        <span
          style={{
            fontFamily: 'var(--br-typography-font-mono, "JetBrains Mono", monospace)',
            fontSize: '0.85rem',
          }}
        >
          {gradient.replace(/linear-gradient\([^)]*\)/, 'gradient')}
        </span>
      </div>
    </div>
  );
};

export default GradientBlock;
