import { useEffect, useState } from 'react';
import { ArrowUpRight, MessageCircle, X } from 'lucide-react';
import { WHATSAPP_MESSAGES, buildWhatsAppUrl } from '@/lib/whatsapp';

const TOPICS = [
  { label: 'General inquiry', message: WHATSAPP_MESSAGES.general },
  { label: 'Website development', message: WHATSAPP_MESSAGES.website },
  { label: 'Custom software', message: WHATSAPP_MESSAGES.customSoftware },
  { label: 'Mobile app development', message: WHATSAPP_MESSAGES.mobileApp },
  { label: 'Business automation', message: WHATSAPP_MESSAGES.automation },
  { label: 'Project consultation', message: WHATSAPP_MESSAGES.consultation },
];

export default function FloatingWhatsApp() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      <div
        id="whatsapp-topics"
        className={`w-72 origin-bottom-right overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl transition-all duration-300 ${
          open ? 'visible scale-100 opacity-100' : 'invisible scale-95 opacity-0'
        }`}
        aria-hidden={!open}
      >
        <div className="flex items-center justify-between bg-emerald-700 px-5 py-4 text-white">
          <div>
            <p className="font-heading text-base font-semibold">Chat with Raksh Tech</p>
            <p className="text-xs text-emerald-100">Choose a topic to start</p>
          </div>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close WhatsApp topics"
            tabIndex={open ? 0 : -1}
            className="flex h-8 w-8 items-center justify-center rounded-full transition-colors hover:bg-white/15"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        <ul className="flex flex-col p-2">
          {TOPICS.map((topic) => (
            <li key={topic.label}>
              <a
                href={buildWhatsAppUrl(topic.message)}
                target="_blank"
                rel="noopener noreferrer"
                tabIndex={open ? 0 : -1}
                className="group flex items-center justify-between rounded-xl px-3.5 py-3 text-sm font-medium text-primary-950 transition-colors hover:bg-emerald-50 hover:text-emerald-800"
              >
                {topic.label}
                <ArrowUpRight className="h-4 w-4 text-slate-400 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-emerald-700" />
              </a>
            </li>
          ))}
        </ul>
      </div>

      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls="whatsapp-topics"
        aria-label={open ? 'Close WhatsApp chat options' : 'Chat with us on WhatsApp'}
        className="group relative flex h-14 items-center gap-2 rounded-full bg-emerald-700 pl-4 pr-5 text-white shadow-xl shadow-emerald-700/40 transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-600 active:scale-95"
      >
        {!open && (
          <span className="absolute inset-0 -z-10 animate-ping-soft rounded-full bg-emerald-500/60" aria-hidden="true" />
        )}
        <MessageCircle className="h-6 w-6" />
        <span className="hidden text-sm font-semibold sm:inline">{open ? 'Close' : 'Chat with us'}</span>
      </button>
    </div>
  );
}
