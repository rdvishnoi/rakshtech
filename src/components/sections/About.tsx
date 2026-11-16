import { CheckCircle2, Code2, Database, Eye, Globe, Smartphone, Target, Workflow } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';

const POINTS = [
  'Requirements understood before a single line of code is written',
  'Clear communication and honest project updates',
  'Long-term support after your software goes live',
];

const NODES = [
  { icon: Globe, label: 'Website', className: 'left-0 top-0' },
  { icon: Smartphone, label: 'Mobile App', className: 'right-0 top-0' },
  { icon: Code2, label: 'Web App', className: 'left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2' },
  { icon: Database, label: 'Business Data', className: 'left-0 bottom-0' },
  { icon: Workflow, label: 'Automation', className: 'right-0 bottom-0' },
];

export default function About() {
  return (
    <section id="about" className="relative scroll-mt-20 bg-slate-50 py-24 sm:py-28">
      <div className="section-shell grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
        <div className="flex flex-col gap-6">
          <Reveal>
            <span className="inline-flex items-center rounded-full border border-secondary-500/20 bg-secondary-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-secondary-600">
              About Raksh Tech
            </span>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="font-heading text-display-md font-bold text-primary-950">
              Technology That Moves Your Business Forward.
            </h2>
          </Reveal>
          <Reveal delay={120} className="flex flex-col gap-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            <p>
              At Raksh Tech, we believe technology should make businesses smarter, faster, and more efficient. We build
              practical, scalable, and modern software solutions that help businesses solve real-world problems, improve
              productivity, and grow digitally.
            </p>
            <p>
              Whether you are a startup with a new idea or an established business looking to modernize your operations,
              we focus on understanding your requirements and delivering technology that creates real value.
            </p>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            <Reveal delay={160}>
              <div className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
                <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-secondary-50 text-secondary-600">
                  <Target className="h-5 w-5" />
                </span>
                <h3 className="font-heading text-lg font-semibold text-primary-950">Our Mission</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Help businesses of every size use technology that is practical, reliable and easy to understand.
                </p>
              </div>
            </Reveal>
            <Reveal delay={220}>
              <div className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
                <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-accent-50 text-accent-700">
                  <Eye className="h-5 w-5" />
                </span>
                <h3 className="font-heading text-lg font-semibold text-primary-950">Our Vision</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Be a trusted technology partner for businesses in Rajasthan and beyond, known for quality and long-term support.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={260}>
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="font-heading text-lg font-semibold text-primary-950">Why Choose Raksh Tech</h3>
              <ul className="mt-4 flex flex-col gap-3">
                {POINTS.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm text-slate-600">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal delay={120} className="relative">
          <div className="relative mx-auto aspect-square w-full max-w-lg rounded-[2rem] border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-secondary-50 p-8 shadow-card">
            <div className="grid-bg absolute inset-0 rounded-[2rem] opacity-60" aria-hidden="true" />
            <svg className="absolute inset-8 h-[calc(100%-4rem)] w-[calc(100%-4rem)]" aria-hidden="true" viewBox="0 0 100 100" preserveAspectRatio="none">
              <line x1="12" y1="12" x2="50" y2="50" stroke="#315EFB" strokeOpacity="0.35" strokeWidth="0.4" strokeDasharray="1.5 1.5" />
              <line x1="88" y1="12" x2="50" y2="50" stroke="#315EFB" strokeOpacity="0.35" strokeWidth="0.4" strokeDasharray="1.5 1.5" />
              <line x1="12" y1="88" x2="50" y2="50" stroke="#315EFB" strokeOpacity="0.35" strokeWidth="0.4" strokeDasharray="1.5 1.5" />
              <line x1="88" y1="88" x2="50" y2="50" stroke="#315EFB" strokeOpacity="0.35" strokeWidth="0.4" strokeDasharray="1.5 1.5" />
            </svg>
            {NODES.map((node, index) => (
              <div key={node.label} className={`absolute ${node.className}`}>
                <div className="animate-float flex flex-col items-center gap-2" style={{ animationDelay: `${index * 0.4}s` }}>
                  <span className="flex h-16 w-16 items-center justify-center rounded-2xl border border-slate-200 bg-white text-secondary-600 shadow-lg shadow-secondary-500/10 sm:h-20 sm:w-20">
                    <node.icon className="h-7 w-7" />
                  </span>
                  <span className="rounded-full bg-primary-950 px-3 py-1 text-[11px] font-medium text-white">{node.label}</span>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
