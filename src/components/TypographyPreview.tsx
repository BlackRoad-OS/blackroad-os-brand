import React from 'react';

export type TypographyPreviewProps = {
  label: string;
  fontFamily: string;
  size: string;
  weight: string;
  lineHeight: string;
  sample?: string;
};

export const TypographyPreview: React.FC<TypographyPreviewProps> = ({
  label,
  fontFamily,
  size,
  weight,
  lineHeight,
  sample = 'BlackRoad OS renders neon clarity.',
}) => {
  return (
    <div
      style={{
        border: '1px solid var(--br-color-neutral-300, #2a2a3d)',
        borderRadius: 'var(--br-radius-md, 0.5rem)',
        padding: 'var(--br-spacing-16, 1rem)',
        background: 'var(--br-color-neutral-100, #0c0c15)',
        color: 'var(--br-color-neutral-600, #d1d2e0)',
      }}
    >
      <div style={{ marginBottom: 'var(--br-spacing-8, 0.5rem)' }}>
        <strong>{label}</strong>
      </div>
      <p
        style={{
          fontFamily,
          fontSize: size,
          fontWeight: weight,
          lineHeight,
          margin: 0,
        }}
      >
        {sample}
      </p>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
          gap: 'var(--br-spacing-8, 0.5rem)',
          marginTop: 'var(--br-spacing-12, 0.75rem)',
          color: 'var(--br-color-neutral-500, #8b8ca3)',
          fontFamily: 'var(--br-typography-font-mono, "JetBrains Mono", monospace)',
        }}
      >
        <span>Family: {fontFamily}</span>
        <span>Size: {size}</span>
        <span>Weight: {weight}</span>
        <span>Line: {lineHeight}</span>
      </div>
    </div>
  );
};

export default TypographyPreview;
