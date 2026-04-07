export default function PricingCard({ plan, action }) {
  const isVip = plan.id === 'vip';

  return (
    <div
      className={`glass-panel rounded-[2rem] p-6 ${
        isVip ? 'border-gold/30 shadow-gold' : 'border-white/10 shadow-glow'
      }`}
    >
      <p className="text-xs uppercase tracking-[0.32em] text-gold">{plan.name}</p>
      <div className="mt-4 flex items-end gap-2">
        <h3 className="font-display text-5xl font-semibold text-white">{plan.price}</h3>
        <span className="pb-2 text-sm text-slate-400">{plan.interval}</span>
      </div>
      <p className="mt-4 text-sm text-slate-300">{plan.description}</p>
      <div className="mt-6 space-y-3">
        {plan.features.map((feature) => (
          <div key={feature} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200">
            {feature}
          </div>
        ))}
      </div>
      <div className="mt-6">{action}</div>
    </div>
  );
}
