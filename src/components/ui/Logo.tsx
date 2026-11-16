import { Hexagon } from 'lucide-react';

interface LogoProps {
  tone?: 'light' | 'dark';
  className?: string;
}

export default function Logo({ tone = 'light', className = '' }: LogoProps) {
  return (
    <a href="#home" aria-label="Raksh Tech home" className={`group inline-flex items-center gap-2.5 ${className}`}>
      <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-accent-400 via-secondary-500 to-highlight-500 shadow-lg shadow-secondary-500/30 transition-transform duration-500 group-hover:rotate-12">
        <Hexagon className="h-5 w-5 text-white" strokeWidth={2.4} />
      </span>
      <span
        className={`font-heading text-xl font-bold tracking-tight ${
          tone === 'dark' ? 'text-white' : 'text-primary-950'
        }`}
      >
        Raksh <span className={tone === 'dark' ? 'text-accent-400' : 'text-secondary-500'}>Tech</span>
      </span>
    </a>
  );
}
