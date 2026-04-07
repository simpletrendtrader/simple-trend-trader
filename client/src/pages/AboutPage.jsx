import SectionTitle from '../components/SectionTitle.jsx';
import { pillars, stats } from '../data/siteContent.js';

export default function AboutPage() {
  return (
    <div className="px-2 py-10">
      <SectionTitle
        eyebrow="About"
        title="A Modern Brand Built Around Clarity"
        description="SIMPLE TREND TRADER is positioned as a disciplined trading education brand, focused on showing the why behind the move instead of adding noise."
      />
      <div className="grid gap-5 lg:grid-cols-[1fr,0.9fr]">
        <div className="glass-panel rounded-[2rem] p-8">
          <h3 className="font-display text-3xl text-white">The website-first approach</h3>
          <p className="mt-5 text-sm leading-7 text-slate-300">
            This version prioritizes brand presence, storytelling, trust, and beautifully presented market ideas.
            It gives you a site that already feels premium, while leaving room to add a real members area later.
          </p>
          <div className="mt-8 grid gap-4">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="rounded-[1.6rem] border border-white/10 bg-white/5 p-5">
                <h4 className="text-lg font-semibold text-white">{pillar.title}</h4>
                <p className="mt-2 text-sm text-slate-400">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="grid gap-4">
          {stats.map((stat) => (
            <div key={stat.label} className="glass-panel rounded-[1.8rem] p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-gold">{stat.label}</p>
              <p className="mt-4 font-display text-3xl text-white">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
