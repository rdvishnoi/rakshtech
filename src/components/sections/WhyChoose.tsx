import SectionHeader from '@/components/ui/SectionHeader';
import Reveal from '@/components/ui/Reveal';
import { REASONS } from '@/data/content';

export default function WhyChoose() {
  return (
    <section id="why" className="relative scroll-mt-20 bg-slate-50 py-24 sm:py-28">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Why Choose Us"
          title="Your Technology Partner, Not Just a Software Vendor."
          description="We work alongside you, from the first conversation to long after launch."
        />

        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-slate-200 bg-slate-200 shadow-card sm:grid-cols-2 lg:grid-cols-3">
          {REASONS.map((reason, index) => (
            <Reveal key={reason.title} delay={(index % 3) * 80} className="h-full">
              <div className="group flex h-full flex-col gap-4 bg-white p-8 transition-colors duration-500 hover:bg-gradient-to-br hover:from-white hover:to-secondary-50/60">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-secondary-600 transition-all duration-500 group-hover:bg-secondary-500 group-hover:text-white group-hover:shadow-lg group-hover:shadow-secondary-500/30">
                  <reason.icon className="h-6 w-6" />
                </span>
                <h3 className="font-heading text-lg font-semibold text-primary-950">{reason.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{reason.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
