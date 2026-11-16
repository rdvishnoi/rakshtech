import { Check } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import SectionHeader from '@/components/ui/SectionHeader';
import Button from '@/components/ui/Button';
import { PRODUCTS, type Product } from '@/data/content';

const ACCENTS: Record<Product['accent'], { tile: string; bar: string; glow: string }> = {
  royal: {
    tile: 'bg-secondary-500/20 text-secondary-200',
    bar: 'from-secondary-500 to-secondary-300',
    glow: 'group-hover:shadow-secondary-500/30',
  },
  cyan: {
    tile: 'bg-accent-400/15 text-accent-300',
    bar: 'from-accent-500 to-accent-300',
    glow: 'group-hover:shadow-accent-400/30',
  },
  violet: {
    tile: 'bg-highlight-500/20 text-highlight-300',
    bar: 'from-highlight-600 to-highlight-400',
    glow: 'group-hover:shadow-highlight-500/30',
  },
};

const PREVIEW_BARS = [55, 80, 40, 90, 65];

function ProductPreview({ product }: { product: Product }) {
  const accent = ACCENTS[product.accent];
  return (
    <div className="relative h-36 overflow-hidden rounded-xl border border-white/10 bg-primary-950/70 p-3" aria-hidden="true">
      <div className="mb-3 flex items-center justify-between">
        <div className="flex gap-1.5">
          <span className="h-2 w-2 rounded-full bg-white/20" />
          <span className="h-2 w-2 rounded-full bg-white/20" />
          <span className="h-2 w-2 rounded-full bg-white/20" />
        </div>
        <span className={`rounded-md px-2 py-0.5 text-[10px] font-medium ${accent.tile}`}>Preview</span>
      </div>
      <div className="flex h-[calc(100%-1.75rem)] gap-3">
        <div className="flex w-1/3 flex-col gap-2">
          {[0, 1, 2, 3].map((row) => (
            <div key={row} className={`h-2 rounded-full ${row === 0 ? 'bg-white/30' : 'bg-white/10'}`} />
          ))}
        </div>
        <div className="flex flex-1 items-end gap-1.5">
          {PREVIEW_BARS.map((height, index) => (
            <div key={index} className="flex-1 rounded-t-sm bg-white/5">
              <div
                className={`w-full rounded-t-sm bg-gradient-to-t ${accent.bar} transition-all duration-700 group-hover:opacity-100`}
                style={{ height: `${height}%` }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Products() {
  return (
    <section id="products" className="relative scroll-mt-20 overflow-hidden bg-primary-950 py-24 sm:py-28">
      <div className="absolute inset-0 -z-0">
        <div className="absolute left-1/2 top-0 h-80 w-[60rem] -translate-x-1/2 rounded-full bg-secondary-600/15 blur-[120px]" />
        <div className="grid-bg absolute inset-0 opacity-40" />
      </div>

      <div className="section-shell relative">
        <SectionHeader
          eyebrow="Digital Solutions"
          title="Powerful Digital Products for Modern Businesses."
          description="Explore the kinds of solutions we build. Each category is designed around your business and can be tailored to your exact needs."
          tone="dark"
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((product, index) => {
            const accent = ACCENTS[product.accent];
            return (
              <Reveal key={product.id} delay={(index % 3) * 90} className="h-full">
                <article
                  className={`group flex h-full flex-col gap-5 rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-xl shadow-black/20 backdrop-blur transition-all duration-500 hover:-translate-y-1.5 hover:border-white/20 hover:bg-white/[0.07] hover:shadow-2xl ${accent.glow}`}
                >
                  <ProductPreview product={product} />

                  <div className="flex items-center gap-3">
                    <span className={`flex h-10 w-10 items-center justify-center rounded-lg ${accent.tile}`}>
                      <product.icon className="h-5 w-5" />
                    </span>
                    <h3 className="font-heading text-lg font-semibold text-white">{product.title}</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-slate-300">{product.description}</p>

                  <ul className="mt-auto flex flex-col gap-2">
                    {product.capabilities.map((capability) => (
                      <li key={capability} className="flex items-center gap-2 text-sm text-slate-300">
                        <Check className="h-4 w-4 text-accent-400" strokeWidth={2.5} />
                        {capability}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={120} className="mt-14 flex justify-center">
          <Button href="#contact" showArrow>
            Explore Your Requirements
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
