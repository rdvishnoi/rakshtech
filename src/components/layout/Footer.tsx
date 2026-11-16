import { useState } from 'react';
import { Facebook, Instagram, Linkedin, Mail, MapPin, MessageCircle, Phone, Youtube } from 'lucide-react';
import Logo from '@/components/ui/Logo';
import LegalDialog from '@/components/layout/LegalDialog';
import { BUSINESS } from '@/config/business';
import { NAV_LINKS, SERVICES } from '@/data/content';
import { PRIVACY_SECTIONS, TERMS_SECTIONS } from '@/data/legal';
import { WHATSAPP_MESSAGES, buildWhatsAppUrl } from '@/lib/whatsapp';

const SOCIALS = [
  { label: 'Instagram', href: BUSINESS.social.instagram, icon: Instagram },
  { label: 'LinkedIn', href: BUSINESS.social.linkedin, icon: Linkedin },
  { label: 'Facebook', href: BUSINESS.social.facebook, icon: Facebook },
  { label: 'YouTube', href: BUSINESS.social.youtube, icon: Youtube },
];

const linkClass = 'text-sm text-slate-400 transition-colors duration-300 hover:text-white';

type LegalKind = 'privacy' | 'terms' | null;

export default function Footer() {
  const [legal, setLegal] = useState<LegalKind>(null);

  return (
    <footer className="relative overflow-hidden bg-primary-950 pt-20 text-slate-300">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-secondary-500/60 to-transparent" aria-hidden="true" />
      <div className="absolute -top-40 left-1/2 h-80 w-[50rem] -translate-x-1/2 rounded-full bg-secondary-600/10 blur-[120px]" aria-hidden="true" />

      <div className="section-shell relative grid gap-12 pb-14 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
        <div className="flex flex-col gap-5 lg:col-span-4">
          <Logo tone="dark" />
          <p className="max-w-sm text-sm leading-relaxed text-slate-400">
            Raksh Tech builds custom software, websites, web applications, mobile apps and business automation for
            businesses across the globe.
          </p>
          <div className="flex items-center gap-2">
            {SOCIALS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-400 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-400/50 hover:text-accent-300"
              >
                <social.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <nav aria-label="Footer quick links" className="flex flex-col gap-4 lg:col-span-2 lg:col-start-6">
          <h3 className="font-heading text-sm font-semibold uppercase tracking-[0.16em] text-white">Quick Links</h3>
          <ul className="flex flex-col gap-2.5">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={linkClass}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Footer services" className="flex flex-col gap-4 lg:col-span-2">
          <h3 className="font-heading text-sm font-semibold uppercase tracking-[0.16em] text-white">Services</h3>
          <ul className="flex flex-col gap-2.5">
            {SERVICES.map((service) => (
              <li key={service.id}>
                <a href="#services" className={linkClass}>
                  {service.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-col gap-4 lg:col-span-3">
          <h3 className="font-heading text-sm font-semibold uppercase tracking-[0.16em] text-white">Contact</h3>
          <ul className="flex flex-col gap-3.5 text-sm">
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent-300" />
              <a href={`tel:${BUSINESS.phoneTel}`} className="transition-colors hover:text-white">
                {BUSINESS.phoneDisplay}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent-300" />
              <span className="leading-relaxed">
                Sector-H, Shastri Nagar, Jodhpur, Rajasthan 342003, India
              </span>
            </li>
            <li>
              <a
                href={buildWhatsAppUrl(WHATSAPP_MESSAGES.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-medium text-emerald-300 transition-colors hover:text-emerald-200"
              >
                <MessageCircle className="h-4 w-4" />
                Chat with us on WhatsApp
              </a>
            </li>
            {BUSINESS.email && (
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent-300" />
                <a href={`mailto:${BUSINESS.email}`} className="transition-colors hover:text-white">
                  {BUSINESS.email}
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="section-shell flex flex-col gap-4 py-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>{BUSINESS.copyright}</p>
          <div className="flex items-center gap-5">
            <button type="button" onClick={() => setLegal('privacy')} className="transition-colors hover:text-white">
              Privacy Policy
            </button>
            <button type="button" onClick={() => setLegal('terms')} className="transition-colors hover:text-white">
              Terms &amp; Conditions
            </button>
          </div>
        </div>
      </div>

      {legal === 'privacy' && (
        <LegalDialog title="Privacy Policy" sections={PRIVACY_SECTIONS} onClose={() => setLegal(null)} />
      )}
      {legal === 'terms' && (
        <LegalDialog title="Terms & Conditions" sections={TERMS_SECTIONS} onClose={() => setLegal(null)} />
      )}
    </footer>
  );
}
