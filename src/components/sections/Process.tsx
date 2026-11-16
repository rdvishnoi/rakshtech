import Reveal from '@/components/ui/Reveal';
import SectionHeader from '@/components/ui/SectionHeader';
import { PROCESS_STEPS } from '@/data/content';
import { useInView } from '@/hooks/useInView';

export default function Process() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section id="process" className="relative scroll-mt-20 overflow-hidden bg-white py-24 sm:py-28">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Our Process"
          title="From Idea to Implementation – A Clear Process."
          description="You always know what happens next. Five clear steps take your project from a rough idea to a working product."
        />

        <div ref={ref} className="relative mt-16">
          <div className="absolute left-5 top-0 h-full w-px bg-slate-200 lg:left-0 lg:right-0 lg:top-7 lg:h-px lg:w-full" />
          <div
            className={`absolute left-5 top-0 h-full w-px origin-top bg-gradient-to-b from-accent-400 via-secondary-500 to-highlight-500 transition-transform duration-[1800ms] ease-out lg:left-0 lg:top-7 lg:h-px lg:w-full lg:origin-left lg:bg-gradient-to-r ${
              inView ? 'scale-y-100 lg:scale-x-100' : 'scale-y-0 lg:scale-x-0'
            }`}
          />

          <ol className="relative grid gap-10 lg:grid-cols-5 lg:gap-6">
            {PROCESS_STEPS.map((step, index) => (
              <Reveal key={step.number} as="li" delay={index * 140} className="relative flex gap-5 pl-14 lg:flex-col lg:gap-6 lg:pl-0">
                <span className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full border-2 border-secondary-500 bg-white font-heading text-sm font-bold text-secondary-600 shadow-lg shadow-secondary-500/20 lg:static lg:h-14 lg:w-14 lg:text-base">
                  {step.number}
                </span>
                <div className="flex flex-col gap-3 lg:pt-2">
                  <div className="flex items-center gap-3">
                    <step.icon className="h-5 w-5 text-secondary-500" />
                    <h3 className="font-heading text-xl font-semibold text-primary-950">{step.title}</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-slate-600">{step.description}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
