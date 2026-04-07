import { motion } from 'framer-motion';
import { ArrowRight, Crown, ShieldCheck, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const featureCards = [
  {
    title: 'Live Signal Room',
    copy: 'Track directional setups, entry zones, stop loss, and targets with clean execution logic.'
  },
  {
    title: 'VIP Education Vault',
    copy: 'Build repeatable strategy with curated trading videos, structure lessons, and mindset sessions.'
  },
  {
    title: 'Journal & Analytics',
    copy: 'Log your trades daily, track consistency, and see whether your edge is improving.'
  }
];

export default function LandingPage() {
  return (
    <div className="px-4 pb-10 pt-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <header className="glass-panel flex items-center justify-between rounded-full px-6 py-4">
          <div>
            <p className="font-display text-sm uppercase tracking-[0.45em] text-gold">SIMPLE TREND TRADER</p>
            <p className="text-sm text-slate-400">Trade Smart. Trade Simple.</p>
          </div>
          <div className="flex gap-3">
            <Link to="/login" className="rounded-full border border-white/10 px-5 py-2 text-sm text-white">
              Login
            </Link>
            <Link to="/signup" className="rounded-full bg-neon px-5 py-2 text-sm font-semibold text-night">
              Join Now
            </Link>
          </div>
        </header>

        <section className="grid gap-10 px-2 py-12 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-neon/20 bg-neon/10 px-4 py-2 text-xs uppercase tracking-[0.35em] text-neon">
              Pro Trading SaaS Platform
            </p>
            <h1 className="mt-6 max-w-4xl font-display text-5xl font-semibold leading-tight text-white md:text-7xl">
              Precision signals, premium education, and trader discipline in one premium cockpit.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-slate-300">
              SIMPLE TREND TRADER gives your community a polished members-only experience with protected
              signals, a premium library, and daily performance tracking.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/signup"
                className="inline-flex items-center gap-2 rounded-full bg-neon px-6 py-3 font-semibold text-night transition hover:shadow-glow"
              >
                Start Free
                <ArrowRight size={18} />
              </Link>
              <Link to="/login" className="rounded-full border border-gold/25 px-6 py-3 font-medium text-gold">
                Access Dashboard
              </Link>
              <Link to="/pricing" className="rounded-full border border-white/10 px-6 py-3 font-medium text-white">
                View Pricing
              </Link>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-panel rounded-[2rem] p-6 shadow-glow"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <ShieldCheck className="text-neon" />
                <p className="mt-5 text-sm text-slate-400">Protected members dashboard</p>
                <h3 className="mt-1 text-2xl font-semibold">JWT Auth</h3>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <Crown className="text-gold" />
                <p className="mt-5 text-sm text-slate-400">Premium monetization flow</p>
                <h3 className="mt-1 text-2xl font-semibold">VIP Locks</h3>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5 sm:col-span-2">
                <Sparkles className="text-neon" />
                <p className="mt-5 text-sm text-slate-400">Responsive glassmorphism experience</p>
                <h3 className="mt-1 text-3xl font-semibold">Admin + Education + Journal</h3>
              </div>
            </div>
          </motion.div>
        </section>

        <section className="grid gap-5 md:grid-cols-3">
          {featureCards.map((card) => (
            <div key={card.title} className="glass-panel rounded-[1.8rem] p-6 transition hover:-translate-y-1 hover:shadow-glow">
              <p className="text-xs uppercase tracking-[0.3em] text-gold">Feature</p>
              <h3 className="mt-4 font-display text-2xl">{card.title}</h3>
              <p className="mt-3 text-sm text-slate-400">{card.copy}</p>
            </div>
          ))}
        </section>

        <section className="mt-10 grid gap-6 lg:grid-cols-[0.9fr,1.1fr]">
          <div className="glass-panel rounded-[2rem] p-8">
            <p className="text-xs uppercase tracking-[0.35em] text-gold">VIP Access</p>
            <h2 className="mt-4 font-display text-4xl font-semibold text-white">Monetize your edge with a premium tier.</h2>
            <p className="mt-4 text-slate-300">
              Offer VIP-only trade levels, members-only execution lessons, and a premium billing path using
              Stripe payment links.
            </p>
            <Link to="/pricing" className="mt-6 inline-flex rounded-full bg-gold px-6 py-3 font-semibold text-night">
              Explore Membership
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="glass-panel rounded-[2rem] p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-neon">Free</p>
              <h3 className="mt-3 text-3xl font-semibold">$0</h3>
              <p className="mt-4 text-sm text-slate-400">Public signals, journal access, and starter lessons.</p>
            </div>
            <div className="glass-panel rounded-[2rem] border-gold/25 p-6 shadow-gold">
              <p className="text-xs uppercase tracking-[0.3em] text-gold">VIP</p>
              <h3 className="mt-3 text-3xl font-semibold">$49/mo</h3>
              <p className="mt-4 text-sm text-slate-400">Premium signals, VIP lessons, and member upgrade flow.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
