import { useEffect, useId } from 'react';
import { X } from 'lucide-react';
import type { LegalSection } from '@/data/legal';

interface LegalDialogProps {
  title: string;
  sections: LegalSection[];
  onClose: () => void;
}

export default function LegalDialog({ title, sections, onClose }: LegalDialogProps) {
  const titleId = useId();

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[70] flex items-end justify-center p-0 sm:items-center sm:p-6" role="presentation">
      <div className="animate-type-line absolute inset-0 bg-primary-950/70 backdrop-blur-sm" onClick={onClose} aria-hidden="true" />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative flex max-h-[85vh] w-full flex-col overflow-hidden rounded-t-3xl bg-white shadow-2xl sm:max-w-2xl sm:rounded-3xl"
      >
        <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5 sm:px-8">
          <h2 id={titleId} className="font-heading text-xl font-bold text-primary-950">
            {title}
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="flex h-10 w-10 items-center justify-center rounded-full text-slate-600 transition-colors hover:bg-slate-100 hover:text-primary-950"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="overflow-y-auto px-6 py-6 sm:px-8">
          <div className="flex flex-col gap-6">
            {sections.map((section) => (
              <section key={section.heading} className="flex flex-col gap-2">
                <h3 className="font-heading text-base font-semibold text-primary-950">{section.heading}</h3>
                {section.body.map((paragraph) => (
                  <p key={paragraph} className="text-sm leading-relaxed text-slate-600">
                    {paragraph}
                  </p>
                ))}
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
