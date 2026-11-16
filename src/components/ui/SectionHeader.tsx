import type { ReactNode } from 'react';
import Reveal from '@/components/ui/Reveal';

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description?: ReactNode;
  align?: 'left' | 'center';
  tone?: 'light' | 'dark';
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'center',
  tone = 'light',
}: SectionHeaderProps) {
  const isDark = tone === 'dark';
  const alignment = align === 'center' ? 'mx-auto text-center items-center' : 'text-left items-start';

  return (
    <Reveal className={`flex max-w-3xl flex-col gap-4 ${alignment}`}>
      <span
        className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] ${
          isDark
            ? 'border-accent-400/30 bg-accent-400/10 text-accent-300'
            : 'border-secondary-500/20 bg-secondary-50 text-secondary-600'
        }`}
      >
        {eyebrow}
      </span>
      <h2
        className={`font-heading text-display-md font-bold ${isDark ? 'text-white' : 'text-primary-950'}`}
      >
        {title}
      </h2>
      {description && (
        <p className={`text-base leading-relaxed sm:text-lg ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
          {description}
        </p>
      )}
    </Reveal>
  );
}
