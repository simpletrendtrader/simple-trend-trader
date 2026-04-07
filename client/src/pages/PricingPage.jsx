import { Link } from 'react-router-dom';
import PricingCard from '../components/PricingCard.jsx';
import SectionTitle from '../components/SectionTitle.jsx';
import { memberships } from '../data/siteContent.js';

export default function PricingPage() {
  return (
    <div className="px-2 py-10">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="VIP Positioning"
          title="Show A Premium Path Without Needing Complex Tech First"
          description="This page gives your brand a monetization-ready feel today. You can add payments and gated access later when you want to scale it."
        />
        <div className="grid gap-5 md:grid-cols-2">
          {memberships.map((plan) => (
            <PricingCard
              key={plan.name}
              plan={plan}
              action={
                <Link
                  to="/contact"
                  className={`block w-full rounded-2xl px-5 py-3 text-center font-semibold ${
                    plan.name === 'VIP Circle' ? 'bg-gold text-night' : 'border border-white/10 text-white'
                  }`}
                >
                  {plan.name === 'VIP Circle' ? 'Request VIP Access' : 'Explore The Site'}
                </Link>
              }
            />
          ))}
        </div>
        <div className="mt-8 glass-panel rounded-[2rem] p-8">
          <p className="text-xs uppercase tracking-[0.35em] text-gold">Recommended rollout</p>
          <h3 className="mt-4 font-display text-3xl text-white">Launch the brand website first, then add private members later.</h3>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300">
            This keeps the experience beautiful and low-friction right now. Once your content cadence is strong
            and audience demand is clear, the site can expand into a proper VIP product with gated lessons and
            premium market commentary.
          </p>
        </div>
      </div>
    </div>
  );
}
