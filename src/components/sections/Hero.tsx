import { ArrowRight, Star } from 'lucide-react';
import Button from '@/components/ui/Button';
import DashboardMockup from '@/components/sections/DashboardMockup';
import { BUSINESS } from '@/config/business';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-primary-950 pb-20 pt-32 sm:pt-36 lg:min-h-[100svh] lg:pb-24 lg:pt-40"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute -left-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-secondary-600/30 blur-[120px] animate-aurora-drift" />
        <div className="absolute -right-32 top-20 h-[28rem] w-[28rem] rounded-full bg-accent-400/20 blur-[120px] animate-aurora-drift" style={{ animationDelay: '-6s' }} />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-highlight-500/20 blur-[110px] animate-aurora-drift" style={{ animationDelay: '-11s' }} />
        <div className="grid-bg absolute inset-0 opacity-70" />
      </div>

      <div className="section-shell grid items-center gap-16 lg:grid-cols-[1.05fr_1fr] lg:gap-12">
        <div className="flex flex-col items-start gap-7">
          <span className="animate-type-line inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-slate-300 backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 animate-ping-soft rounded-full bg-accent-400" />
              <span className="relative h-2 w-2 rounded-full bg-accent-400" />
            </span>
            {BUSINESS.category}
          </span>

          <h1 className="animate-type-line font-heading text-display-xl font-bold text-white" style={{ animationDelay: '120ms' }}>
            Building Smart Software Solutions for a{' '}
            <span className="text-gradient animate-gradient-shift bg-[length:200%_200%]">Smarter Business Future.</span>
          </h1>

          <p className="animate-type-line max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg" style={{ animationDelay: '240ms' }}>
            From custom software and web applications to business automation and digital products, Raksh Tech
            helps businesses transform ideas into powerful technology solutions.
          </p>

          <div className="animate-type-line flex flex-col gap-3 sm:flex-row" style={{ animationDelay: '360ms' }}>
            <Button href="#contact" showArrow>
              Start Your Project
            </Button>
            <Button href="#services" variant="ghost">
              Explore Our Services
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

          <div className="animate-type-line flex flex-wrap items-center gap-x-4 gap-y-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur" style={{ animationDelay: '480ms' }}>
            <div className="flex items-center gap-1" aria-label="5 out of 5 stars">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} className="h-4 w-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <p className="text-sm text-slate-200">
              <span className="font-semibold text-white">{BUSINESS.rating.value.toFixed(1)} Google Rating</span>
              <span className="mx-2 text-slate-500" aria-hidden="true">|</span>
              <span className="font-semibold text-white">{BUSINESS.rating.fiveStarCount} Five-Star Reviews</span>
            </p>
          </div>
        </div>

        <div className="relative animate-type-line" style={{ animationDelay: '300ms' }}>
          <DashboardMockup />
        </div>
      </div>
    </section>
  );
}
