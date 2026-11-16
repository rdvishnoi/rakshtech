import { useId, useState } from 'react';
import { Plus } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import SectionHeader from '@/components/ui/SectionHeader';
import Button from '@/components/ui/Button';
import { FAQS } from '@/data/content';

function FaqItem({ question, answer, open, onToggle }: { question: string; answer: string; open: boolean; onToggle: () => void }) {
  const id = useId();
  return (
    <div className={`rounded-2xl border bg-white transition-all duration-300 ${open ? 'border-secondary-300 shadow-card-hover' : 'border-slate-200 shadow-sm hover:border-slate-300'}`}>
      <h3>
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={open}
          aria-controls={`${id}-panel`}
          id={`${id}-button`}
          className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
        >
          <span className={`font-heading text-base font-semibold sm:text-lg ${open ? 'text-secondary-600' : 'text-primary-950'}`}>
            {question}
          </span>
          <span
            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
              open ? 'rotate-45 bg-secondary-500 text-white' : 'bg-slate-100 text-slate-600'
            }`}
          >
            <Plus className="h-4 w-4" />
          </span>
        </button>
      </h3>
      <div
        id={`${id}-panel`}
        role="region"
        aria-labelledby={`${id}-button`}
        className={`grid transition-[grid-template-rows,opacity] duration-500 ease-out ${open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-6 text-sm leading-relaxed text-slate-600 sm:text-base">{answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative scroll-mt-20 bg-slate-50 py-24 sm:py-28">
      <div className="section-shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="flex flex-col gap-6 lg:sticky lg:top-32 lg:self-start">
          <SectionHeader
            eyebrow="FAQ"
            title="Questions? We have answers."
            description="Everything you need to know before starting a conversation with us. Can't find your answer? Just reach out."
            align="left"
          />
          <Reveal delay={120}>
            <Button href="#contact" variant="light" showArrow>
              Contact Raksh Tech
            </Button>
          </Reveal>
        </div>

        <Reveal delay={80} className="flex flex-col gap-3">
          {FAQS.map((faq, index) => (
            <FaqItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
              open={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </Reveal>
      </div>
    </section>
  );
}
