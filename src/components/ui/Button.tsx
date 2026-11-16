import type { ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';

type Variant = 'primary' | 'secondary' | 'ghost' | 'light' | 'whatsapp';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  className?: string;
  external?: boolean;
  type?: 'button' | 'submit';
  disabled?: boolean;
  showArrow?: boolean;
  onClick?: () => void;
  ariaLabel?: string;
}

const base =
  'group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 ease-out focus-visible:ring-offset-slate-950 disabled:cursor-not-allowed disabled:opacity-60 active:scale-[0.98]';

const variants: Record<Variant, string> = {
  primary:
    'bg-gradient-to-r from-secondary-500 via-secondary-600 to-secondary-500 bg-[length:200%_100%] text-white shadow-lg shadow-secondary-500/30 hover:bg-right hover:shadow-xl hover:shadow-secondary-500/40 hover:-translate-y-0.5',
  secondary:
    'bg-primary-950 text-white shadow-lg shadow-primary-950/20 hover:bg-primary-800 hover:-translate-y-0.5',
  ghost:
    'border border-white/20 bg-white/5 text-white backdrop-blur hover:border-accent-400/60 hover:bg-white/10 hover:-translate-y-0.5',
  light:
    'border border-slate-300 bg-white text-primary-950 shadow-sm hover:border-secondary-400 hover:text-secondary-600 hover:-translate-y-0.5',
  whatsapp:
    'bg-emerald-700 text-white shadow-lg shadow-emerald-700/30 hover:bg-emerald-600 hover:shadow-xl hover:shadow-emerald-600/35 hover:-translate-y-0.5',
};

export default function Button({
  children,
  href,
  variant = 'primary',
  className = '',
  external = false,
  type = 'button',
  disabled,
  showArrow = false,
  onClick,
  ariaLabel,
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`;
  const content = (
    <>
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
      {showArrow && (
        <ArrowRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        aria-label={ariaLabel}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {content}
      </a>
    );
  }

  return (
    <button type={type} disabled={disabled} onClick={onClick} className={classes} aria-label={ariaLabel}>
      {content}
    </button>
  );
}
