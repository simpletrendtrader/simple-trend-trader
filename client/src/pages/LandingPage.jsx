import { motion } from 'framer-motion';
import { ArrowRight, ChartNoAxesCombined, GraduationCap, NotebookPen, Radar, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import IdeaSpotlightCard from '../components/IdeaSpotlightCard.jsx';
import LessonPreviewCard from '../components/LessonPreviewCard.jsx';
import { featuredIdeas, lessonTracks, manifesto, pillars, stats } from '../data/siteContent.js';

const featureCards = [
  { title: 'Trade Idea Publishing', copy: 'Present market ideas with context, invalidation, and clear educational framing.', icon: ChartNoAxesCombined },
  { title: 'Education-First Branding', copy: 'Turn your website into a premium teaching surface, not just a signal board.', icon: GraduationCap },
  { title: 'Journal-Led Discipline', copy: 'Anchor the brand around process, consistency, and modern trader habits.', icon: NotebookPen },
  { title: 'Premium Perception', copy: 'Build a brand experience that feels intentional, elevated, and trustworthy.', icon: Radar }
];

export default function LandingPage() {
  return (
    <div className="px-2 py-10">
      <section className="grid gap-10 lg:grid-cols-[1.02fr,0.98fr] lg:items-center">
        <div>
          <p className="inline-flex rounded-full border border-neon/20 bg-neon/10 px-4 py-2 text-xs uppercase tracking-[0.35em] text-neon">
            Website-First Trading Brand
          </p>
          <p className="editorial-kicker mt-6 text-3xl text-gold">For traders who want calm, clean conviction.</p>
          <h1 className="mt-4 max-w-5xl font-display text-5xl font-semibold leading-[0.95] text-white md:text-7xl">
            A modern trading website for publishing market ideas with style, clarity, and premium presence.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            SIMPLE TREND TRADER is now positioned as a polished educational brand site: a place to share trade
            ideas, explain your thinking, build audience trust, and introduce a future VIP path without needing
            complex infrastructure first.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/trade-ideas"
              className="inline-flex items-center gap-2 rounded-full bg-neon px-6 py-3 font-semibold text-night transition hover:shadow-glow"
            >
              View Trade Ideas
              <ArrowRight size={18} />
            </Link>
            <Link to="/academy" className="rounded-full border border-gold/25 px-6 py-3 font-medium text-gold">
              Explore Academy
            </Link>
            <Link to="/contact" className="rounded-full border border-white/10 px-6 py-3 font-medium text-white">
              Contact / Join
            </Link>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-panel panel-depth relative overflow-hidden rounded-[2rem] p-6 shadow-glow"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(92,255,122,0.18),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(245,201,106,0.18),transparent_26%)]" />
          <div className="relative">
            <div className="mb-6 flex items-center justify-between gap-4 rounded-[1.6rem] border border-white/10 bg-black/20 px-5 py-4">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-neon">Editorial Signal Board</p>
                <h3 className="mt-2 font-display text-2xl text-white">A homepage that feels like a market briefing.</h3>
              </div>
              <Sparkles className="text-gold" />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`rounded-[1.7rem] border border-white/10 p-5 ${index % 2 === 0 ? 'bg-white/5' : 'bg-gold/10'}`}
              >
                <p className="text-xs uppercase tracking-[0.24em] text-slate-400">{stat.label}</p>
                <h3 className="mt-4 font-display text-3xl text-white">{stat.value}</h3>
              </div>
            ))}
            </div>
          </div>
        </motion.div>
      </section>

      <section className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {featureCards.map((card) => {
          const Icon = card.icon;

          return (
            <div key={card.title} className="glass-panel panel-depth rounded-[1.8rem] p-6 transition hover:-translate-y-1 hover:shadow-glow">
              <Icon className="text-gold" />
              <h3 className="mt-5 font-display text-2xl text-white">{card.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">{card.copy}</p>
            </div>
          );
        })}
      </section>

      <section className="mt-12 grid gap-10 lg:grid-cols-[0.92fr,1.08fr] lg:items-center">
        <div className="glass-panel panel-depth rounded-[2rem] p-8 shadow-gold">
          <p className="text-xs uppercase tracking-[0.35em] text-gold">Brand Positioning</p>
          <h2 className="mt-4 font-display text-4xl font-semibold text-white">
            The site should feel like a premium trading journal crossed with a modern editorial publication.
          </h2>
          <div className="mt-6 space-y-3">
            {manifesto.map((line) => (
              <div key={line} className="rounded-full border border-neon/15 bg-neon/5 px-4 py-3 text-sm text-slate-200">
                {line}
              </div>
            ))}
          </div>
          <div className="mt-8 space-y-4">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                <h3 className="text-lg font-semibold text-white">{pillar.title}</h3>
                <p className="mt-2 text-sm text-slate-400">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-neon">Featured Ideas</p>
          <h2 className="mt-4 font-display text-4xl font-semibold text-white">Show your best setups in a way that teaches, not just signals.</h2>
          <div className="mt-6 grid gap-4">
            {featuredIdeas.slice(0, 2).map((idea) => (
              <IdeaSpotlightCard key={idea.pair} idea={idea} />
            ))}
          </div>
        </div>
      </section>

      <section className="mt-12 grid gap-6 lg:grid-cols-[1.15fr,0.85fr]">
        <div className="glass-panel panel-depth rounded-[2rem] p-8">
          <p className="text-xs uppercase tracking-[0.35em] text-gold">Publishing Direction</p>
          <h2 className="mt-4 max-w-3xl font-display text-4xl font-semibold text-white">
            Every market idea should read like a concise trading note, not a noisy signal dump.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300">
            The strongest version of this brand is thoughtful, selective, and visually disciplined. Fewer ideas,
            better framing, more conviction. That is what makes the website memorable.
          </p>
        </div>
        <div className="glass-panel panel-depth rounded-[2rem] p-8 shadow-glow">
          <p className="text-xs uppercase tracking-[0.35em] text-neon">Suggested Rhythm</p>
          <div className="mt-5 space-y-4">
            <div className="rounded-[1.4rem] border border-white/10 bg-black/20 p-4">
              <p className="text-sm text-slate-400">Monday / Wednesday / Friday</p>
              <h3 className="mt-2 font-semibold text-white">Publish your highest-conviction trade idea</h3>
            </div>
            <div className="rounded-[1.4rem] border border-white/10 bg-black/20 p-4">
              <p className="text-sm text-slate-400">Weekend</p>
              <h3 className="mt-2 font-semibold text-white">Drop one educational breakdown or review</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-gold">Education</p>
            <h2 className="mt-4 font-display text-4xl font-semibold text-white">Build authority through simple, elegant teaching tracks.</h2>
          </div>
          <Link to="/academy" className="rounded-full border border-white/10 px-5 py-3 text-sm text-white">
            View All Lessons
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {lessonTracks.map((lesson) => (
            <LessonPreviewCard key={lesson.title} lesson={lesson} />
          ))}
        </div>
      </section>
    </div>
  );
}
