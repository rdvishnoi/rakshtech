import { ArrowUpRight, Check } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import Reveal from '@/components/ui/Reveal';
import { SERVICES } from '@/data/content';
import { buildWhatsAppUrl } from '@/lib/whatsapp';

export default function Services() {
  return (
    <section id="services" className="relative scroll-mt-20 bg-white py-24 sm:py-28">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Our Services"
          title="Complete Technology Solutions Under One Roof."
          description="From your first idea to long-term support, we cover the full range of digital services that small and growing businesses need."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, index) => (
            <Reveal key={service.id} delay={(index % 4) * 80} className="h-full">
              <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 shadow-card transition-all duration-500 hover:-translate-y-1.5 hover:border-secondary-300 hover:shadow-card-hover">
                <div className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-gradient-to-r from-accent-400 via-secondary-500 to-highlight-500 transition-transform duration-700 group-hover:scale-x-100" />
                <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-to-br from-accent-400/20 to-secondary-500/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

                <span className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-secondary-500 to-accent-400 text-white shadow-lg shadow-secondary-500/25 transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110">
                  <service.icon className="h-6 w-6" />
                </span>

                <h3 className="relative mt-6 font-heading text-lg font-semibold leading-snug text-primary-950">
                  {service.title}
                </h3>
                <p className="relative mt-3 text-sm leading-relaxed text-slate-600">{service.summary}</p>

                <ul className="relative mt-5 flex flex-col gap-2.5">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-start gap-2.5 text-sm text-slate-700">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-secondary-500" strokeWidth={2.5} />
                      {point}
                    </li>
                  ))}
                </ul>

                <a
                  href={buildWhatsAppUrl(service.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative mt-auto inline-flex items-center gap-1.5 self-start pt-7 text-sm font-semibold text-secondary-600 transition-colors duration-300 hover:text-secondary-800"
                  aria-label={`Discuss your ${service.title} project on WhatsApp`}
                >
                  Discuss Your Project
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
