import { ArrowUpRight } from 'lucide-react';

export default function IdeaSpotlightCard({ idea }) {
  return (
    <div className="glass-panel rounded-[2rem] p-6 transition hover:-translate-y-1 hover:border-neon/30 hover:shadow-glow">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-gold">{idea.bias}</p>
          <h3 className="mt-3 font-display text-3xl text-white">{idea.pair}</h3>
        </div>
        <span className="rounded-full border border-neon/20 bg-neon/10 px-3 py-1 text-xs uppercase tracking-[0.22em] text-neon">
          {idea.timeframe}
        </span>
      </div>
      <p className="mt-5 text-sm leading-7 text-slate-300">{idea.thesis}</p>
      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        <Metric label="Entry Zone" value={idea.entryZone} />
        <Metric label="Invalidation" value={idea.invalidation} />
        <Metric label="Target" value={idea.target} />
      </div>
      <div className="mt-5 inline-flex items-center gap-2 text-sm text-gold">
        Educational idea, not financial advice
        <ArrowUpRight size={16} />
      </div>
    </div>
  );
}

function Metric({ label, value }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <p className="text-xs uppercase tracking-[0.24em] text-slate-500">{label}</p>
      <p className="mt-2 text-sm text-white">{value}</p>
    </div>
  );
}
