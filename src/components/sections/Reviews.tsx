import { ExternalLink, Star } from 'lucide-react';
import Button from '@/components/ui/Button';
import Reveal from '@/components/ui/Reveal';
import SectionHeader from '@/components/ui/SectionHeader';
import { BUSINESS } from '@/config/business';

const GOOGLE_LETTERS = [
  { char: 'G', className: 'text-[#4285F4]' },
  { char: 'o', className: 'text-[#EA4335]' },
  { char: 'o', className: 'text-[#FBBC05]' },
  { char: 'g', className: 'text-[#4285F4]' },
  { char: 'l', className: 'text-[#34A853]' },
  { char: 'e', className: 'text-[#EA4335]' },
];

const BREAKDOWN = [5, 4, 3, 2, 1];

export default function Reviews() {
  const fiveStarShare = BUSINESS.rating.count > 0 ? (BUSINESS.rating.fiveStarCount / BUSINESS.rating.count) * 100 : 0;

  return (
    <section id="reviews" className="relative scroll-mt-20 bg-white py-24 sm:py-28">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Customer Reviews"
          title="Trusted by Customers. Driven by Results."
          description="Our reputation is built on the feedback of the businesses we work with."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-[1.1fr_1fr]">
          <Reveal className="relative overflow-hidden rounded-3xl bg-primary-950 p-8 text-white shadow-2xl shadow-primary-950/30 sm:p-12">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-secondary-500/30 blur-3xl" aria-hidden="true" />
            <div className="absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-accent-400/20 blur-3xl" aria-hidden="true" />

            <div className="relative flex flex-col gap-6">
              <p className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-accent-300">Google Rating</p>
              <div className="flex items-end gap-4">
                <span className="font-heading text-7xl font-bold leading-none sm:text-8xl">
                  {BUSINESS.rating.value.toFixed(1)}
                </span>
                <span className="pb-2 font-heading text-2xl text-slate-400">/ 5.0</span>
              </div>
              <div className="flex items-center gap-1" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-7 w-7 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-lg text-slate-200">
                <span className="font-semibold text-white">{BUSINESS.rating.count} Google Reviews</span> – All Five Stars.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120} className="flex flex-col justify-between gap-8 rounded-3xl border border-slate-200 bg-slate-50 p-8 sm:p-10">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-2 font-heading text-2xl font-bold tracking-tight" aria-label="Google">
                {GOOGLE_LETTERS.map((letter, index) => (
                  <span key={index} className={letter.className}>
                    {letter.char}
                  </span>
                ))}
                <span className="font-medium text-slate-500">Reviews</span>
              </div>

              <div className="flex flex-col gap-4">
                {BREAKDOWN.map((stars) => {
                  const share = stars === 5 ? fiveStarShare : 0;
                  return (
                    <div key={stars} className="flex items-center gap-3 text-sm">
                      <span className="flex w-12 items-center gap-1 font-medium text-slate-700">
                        {stars}
                        <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                      </span>
                      <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-slate-200">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-accent-400 to-secondary-500 transition-all duration-[1400ms] ease-out"
                          style={{ width: `${share}%` }}
                        />
                      </div>
                      <span className="w-10 text-right text-slate-600">
                        {stars === 5 ? BUSINESS.rating.fiveStarCount : 0}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <Button href={BUSINESS.googleReviewsUrl} external variant="secondary" className="w-full sm:w-auto">
                View Our Google Reviews
                <ExternalLink className="h-4 w-4" />
              </Button>
              <p className="text-xs text-slate-500">Opens our Google listing in a new tab.</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
