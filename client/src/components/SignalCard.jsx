import { Lock } from 'lucide-react';
import { motion } from 'framer-motion';

export default function SignalCard({ signal }) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.01 }}
      className="glass-panel rounded-3xl border p-5 transition hover:border-neon/30 hover:shadow-glow"
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-gold">{signal.bias}</p>
          <h3 className="mt-2 text-xl font-semibold">{signal.pair}</h3>
        </div>
        <span
          className={`rounded-full px-3 py-1 text-xs ${
            signal.vipOnly ? 'bg-gold/10 text-gold' : 'bg-neon/10 text-neon'
          }`}
        >
          {signal.vipOnly ? 'VIP' : 'Public'}
        </span>
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        <Metric label="Entry" value={signal.entry} />
        <Metric label="Stop Loss" value={signal.stopLoss} />
        <Metric label="Target" value={signal.target} />
      </div>

      <div className="mt-4 flex items-center justify-between">
        <p className="text-sm text-slate-400">{signal.notes || 'Momentum-based setup'}</p>
        <p className="text-xs uppercase tracking-[0.25em] text-slate-500">{signal.status}</p>
      </div>

      {signal.locked && (
        <div className="mt-4 flex items-center gap-2 rounded-2xl border border-gold/20 bg-gold/10 px-4 py-3 text-sm text-gold">
          <Lock size={16} />
          Upgrade to VIP to reveal precise trade levels.
        </div>
      )}
    </motion.div>
  );
}

function Metric({ label, value }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
      <p className="text-xs uppercase tracking-[0.24em] text-slate-500">{label}</p>
      <p className="mt-2 text-lg font-semibold text-white">{value}</p>
    </div>
  );
}
