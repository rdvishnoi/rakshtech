import { MapPin, MessageCircle, Phone } from 'lucide-react';
import Button from '@/components/ui/Button';
import Reveal from '@/components/ui/Reveal';
import SectionHeader from '@/components/ui/SectionHeader';
import ContactForm from '@/components/sections/ContactForm';
import { BUSINESS } from '@/config/business';
import { WHATSAPP_MESSAGES, buildWhatsAppUrl } from '@/lib/whatsapp';

export default function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-20 bg-white py-24 sm:py-28">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Contact Us"
          title="Have an Idea? Let's Build Something Great."
          description="Tell us about your business requirements. Our team would love to discuss how technology can help you grow."
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          <div className="flex flex-col gap-6">
            <Reveal className="flex flex-col gap-6 rounded-3xl bg-primary-950 p-8 text-white shadow-2xl shadow-primary-950/25 sm:p-10">
              <div className="flex flex-col gap-1">
                <p className="font-heading text-sm font-semibold uppercase tracking-[0.16em] text-accent-300">Business Information</p>
                <p className="font-heading text-2xl font-bold">{BUSINESS.name}</p>
              </div>

              <ul className="flex flex-col gap-5">
                <li className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-accent-300">
                    <Phone className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-slate-400">Phone</p>
                    <a href={`tel:${BUSINESS.phoneTel}`} className="text-base font-medium text-white underline-offset-4 transition-colors hover:text-accent-300 hover:underline">
                      {BUSINESS.phoneDisplay}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-accent-300">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-slate-400">Location</p>
                    <p className="text-base leading-relaxed text-white">
                      Sector-H, Shastri Nagar
                      <br />
                      Jodhpur, Rajasthan 342003, India
                    </p>
                  </div>
                </li>
              </ul>

              <Button href={buildWhatsAppUrl(WHATSAPP_MESSAGES.consultation)} external variant="whatsapp" className="w-full">
                <MessageCircle className="h-4 w-4" />
                Discuss on WhatsApp
              </Button>
            </Reveal>

            <Reveal delay={100} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-card">
              <iframe
                title="Raksh Tech location on Google Maps"
                src={BUSINESS.mapEmbedUrl}
                className="h-72 w-full border-0 sm:h-80"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </Reveal>
          </div>

          <Reveal delay={120}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
