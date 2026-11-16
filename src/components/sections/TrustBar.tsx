import { Headphones, Cpu, Heart, Star, Users } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import { BUSINESS } from '@/config/business';
import { useCountUp, useInView } from '@/hooks/useInView';

export default function TrustBar() {
  const { ref, inView } = useInView<HTMLDivElement>();
  const rating = useCountUp(BUSINESS.rating.value, inView);
  const reviews = useCountUp(BUSINESS.rating.fiveStarCount, inView);

  const items = [
    {
      icon: Star,
      value: rating.toFixed(1),
      label: 'Google Rating',
      iconClass: 'bg-amber-100 text-amber-500',
    },
    {
      icon: Users,
      value: Math.round(reviews).toString(),
      label: 'Five-Star Reviews',
      iconClass: 'bg-secondary-50 text-secondary-600',
    },
    {
      icon: Heart,
      value: 'Customer-Focused',
      label: 'Solutions',
      iconClass: 'bg-rose-50 text-rose-500',
    },
    {
      icon: Cpu,
      value: 'Modern',
      label: 'Technology',
      iconClass: 'bg-accent-50 text-accent-600',
    },
    {
      icon: Headphones,
      value: 'Reliable',
      label: 'Support',
      iconClass: 'bg-emerald-50 text-emerald-600',
    },
  ];

  return (
    <section aria-label="Trust and credibility" className="relative z-10 bg-white">
      <div className="section-shell">
        <div
          ref={ref}
          className="-mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-slate-200 bg-slate-200 shadow-card lg:grid-cols-5"
        >
          {items.map((item, index) => (
            <Reveal key={item.label} delay={index * 80} className="h-full">
              <div className="group flex h-full flex-col items-start gap-3 bg-white p-6 transition-colors duration-300 hover:bg-slate-50 sm:p-7">
                <span
                  className={`flex h-11 w-11 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110 ${item.iconClass}`}
                >
                  <item.icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-heading text-xl font-bold text-primary-950 sm:text-2xl">{item.value}</p>
                  <p className="text-sm text-slate-600">{item.label}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
