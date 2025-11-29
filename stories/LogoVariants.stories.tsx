import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

const LogoGallery = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div className="p-4 rounded-xl bg-white text-neutral-900 shadow-lg space-y-3">
      <div className="text-xs uppercase tracking-[0.3em] text-neutral-500">Light</div>
      <img src="/blackroad-logo-light.svg" alt="Blackroad logo light" className="w-full" />
      <img src="/blackroad-mark-light.svg" alt="Blackroad mark light" className="w-20" />
    </div>
    <div className="p-4 rounded-xl bg-neutral-900 text-white shadow-lg space-y-3">
      <div className="text-xs uppercase tracking-[0.3em] text-white/60">Dark</div>
      <img src="/blackroad-logo-dark.svg" alt="Blackroad logo dark" className="w-full" />
      <img src="/blackroad-mark-dark.svg" alt="Blackroad mark dark" className="w-20" />
    </div>
    <div className="p-4 rounded-xl bg-neutral-900 text-white shadow-lg col-span-1 md:col-span-2">
      <div className="flex items-center gap-4">
        <div className="w-20 h-20 rounded-xl bg-neutral-800 flex items-center justify-center">
          <img src="/blackroad-mark.svg" alt="Blackroad animated mark" className="w-12 animate-pulse" />
        </div>
        <div>
          <div className="font-semibold">Animated spiral</div>
          <div className="text-sm text-white/70">See `logo/blackroad-spiral.lottie` for motion guidelines.</div>
        </div>
      </div>
    </div>
  </div>
);

const meta: Meta<typeof LogoGallery> = {
  title: 'LogoVariants',
  component: LogoGallery,
};

export default meta;

type Story = StoryObj<typeof LogoGallery>;

export const Variants: Story = {
  render: () => <LogoGallery />,
};
