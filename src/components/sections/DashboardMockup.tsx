import { BarChart3, CheckCircle2, Package, Workflow } from 'lucide-react';

const CODE_LINES = [
  { tokens: [['text-violet-300', 'const '], ['text-accent-300', 'business'], ['text-slate-400', ' = '], ['text-amber-200', 'await '], ['text-sky-300', 'createSolution'], ['text-slate-400', '({']] },
  { tokens: [['text-slate-400', '  '], ['text-slate-200', 'type: '], ['text-emerald-300', "'custom-software'"], ['text-slate-400', ',']] },
  { tokens: [['text-slate-400', '  '], ['text-slate-200', 'automate: '], ['text-amber-200', 'true'], ['text-slate-400', ',']] },
  { tokens: [['text-slate-400', '  '], ['text-slate-200', 'support: '], ['text-amber-200', 'true'], ['text-slate-400', ',']] },
  { tokens: [['text-slate-400', '});']] },
  { tokens: [['text-slate-500', '// Ready for launch']] },
  { tokens: [['text-violet-300', 'deploy'], ['text-slate-400', '('], ['text-accent-300', 'business'], ['text-slate-400', ');']] },
];

const BARS = [42, 68, 52, 84, 60, 92, 74];

export default function DashboardMockup() {
  return (
    <div className="relative mx-auto aspect-[5/4] w-full max-w-[560px] select-none" aria-hidden="true">
      <div className="absolute -inset-10 rounded-full bg-secondary-500/25 blur-3xl animate-aurora-drift" />
      <div className="absolute -right-6 top-10 h-40 w-40 rounded-full bg-accent-400/20 blur-3xl animate-aurora-drift" />

      <div className="absolute inset-x-0 top-6 overflow-hidden rounded-2xl border border-white/10 bg-primary-900/90 shadow-2xl shadow-black/40 backdrop-blur-xl sm:left-0 sm:right-10">
        <div className="flex items-center gap-2 border-b border-white/10 bg-primary-950/80 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
          <span className="ml-3 rounded-md bg-white/5 px-2.5 py-1 font-mono text-[11px] text-slate-400">solution.ts</span>
        </div>
        <div className="grid grid-cols-[1fr] gap-4 p-5">
          <pre className="overflow-hidden font-mono text-[12px] leading-relaxed sm:text-[13px]">
            {CODE_LINES.map((line, lineIndex) => (
              <div
                key={lineIndex}
                className="animate-type-line whitespace-pre"
                style={{ animationDelay: `${300 + lineIndex * 180}ms` }}
              >
                <span className="mr-4 inline-block w-4 text-right text-slate-600">{lineIndex + 1}</span>
                {line.tokens.map(([cls, text], tokenIndex) => (
                  <span key={tokenIndex} className={cls}>
                    {text}
                  </span>
                ))}
              </div>
            ))}
          </pre>
        </div>
      </div>

      <div className="absolute bottom-0 left-4 right-4 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-primary-800/95 to-primary-900/95 p-4 shadow-2xl shadow-black/40 backdrop-blur-xl sm:left-10 sm:right-0 sm:bottom-2 sm:p-5">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="font-heading text-sm font-semibold text-white">Business Overview</p>
            <p className="text-[11px] text-slate-400">Live dashboard preview</p>
          </div>
          <div className="flex gap-1.5">
            <span className="rounded-md bg-accent-400/15 px-2 py-1 text-[10px] font-medium text-accent-300">Week</span>
            <span className="rounded-md bg-white/5 px-2 py-1 text-[10px] font-medium text-slate-400">Month</span>
          </div>
        </div>
        <div className="flex h-24 items-end gap-2 sm:h-28">
          {BARS.map((height, index) => (
            <div key={index} className="flex-1 origin-bottom">
              <div
                className="animate-bar-grow h-full origin-bottom rounded-t-md bg-gradient-to-t from-secondary-600 to-accent-400/90"
                style={{ height: `${height}%`, animationDelay: `${index * 90}ms` }}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="animate-float absolute -left-2 top-0 flex items-center gap-3 rounded-xl border border-white/10 bg-white/10 px-3.5 py-3 shadow-xl backdrop-blur-xl sm:-left-8">
        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-400/20 text-emerald-300">
          <CheckCircle2 className="h-5 w-5" />
        </span>
        <div>
          <p className="text-xs font-semibold text-white">Invoice generated</p>
          <p className="text-[10px] text-slate-400">Sent to customer</p>
        </div>
      </div>

      <div className="animate-float-slow absolute -right-2 top-[38%] flex items-center gap-3 rounded-xl border border-white/10 bg-white/10 px-3.5 py-3 shadow-xl backdrop-blur-xl sm:-right-6">
        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary-400/20 text-secondary-200">
          <Workflow className="h-5 w-5" />
        </span>
        <div>
          <p className="text-xs font-semibold text-white">Workflow active</p>
          <p className="text-[10px] text-slate-400">Approvals automated</p>
        </div>
      </div>

      <div
        className="animate-float absolute -bottom-4 right-10 flex items-center gap-3 rounded-xl border border-white/10 bg-white/10 px-3.5 py-3 shadow-xl backdrop-blur-xl"
        style={{ animationDelay: '1.5s' }}
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-400/20 text-accent-300">
          <Package className="h-5 w-5" />
        </span>
        <div>
          <p className="text-xs font-semibold text-white">Stock synced</p>
          <p className="text-[10px] text-slate-400">Inventory up to date</p>
        </div>
      </div>

      <div className="absolute -top-4 right-1/3 hidden h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/10 text-accent-300 shadow-lg backdrop-blur sm:flex">
        <BarChart3 className="h-5 w-5" />
      </div>
    </div>
  );
}
