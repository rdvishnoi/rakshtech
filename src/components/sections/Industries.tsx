import Reveal from '@/components/ui/Reveal';
import SectionHeader from '@/components/ui/SectionHeader';
import { INDUSTRIES } from '@/data/content';

export default function Industries() {
  return (
    <section id="industries" className="relative scroll-mt-20 bg-slate-50 py-24 sm:py-28">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Industries We Serve"
          title="Software That Fits the Way Your Industry Works."
          description="We support businesses across many sectors, from neighbourhood shops to growing companies."
        />

        <ul className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {INDUSTRIES.map((industry, index) => (
            <Reveal key={industry.title} as="li" delay={(index % 4) * 70} className="h-full">
              <div className="group flex h-full items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent-400/60 hover:shadow-card-hover">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-secondary-50 to-accent-50 text-secondary-600 transition-transform duration-300 group-hover:scale-110">
                  <industry.icon className="h-6 w-6" />
                </span>
                <span className="font-heading text-base font-semibold leading-snug text-primary-950">
                  {industry.title}
                </span>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
