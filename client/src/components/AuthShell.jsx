import { Link } from 'react-router-dom';

export default function AuthShell({ title, subtitle, children, alternateLabel, alternateHref }) {
  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-12">
      <div className="grid w-full max-w-6xl overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-2xl lg:grid-cols-[1.15fr,0.85fr]">
        <div className="relative hidden min-h-[640px] overflow-hidden border-r border-white/10 p-10 lg:block">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(92,255,122,0.2),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(245,201,106,0.18),transparent_30%)]" />
          <div className="relative">
            <p className="font-display text-sm uppercase tracking-[0.45em] text-gold">SIMPLE TREND TRADER</p>
            <h1 className="mt-6 max-w-md font-display text-5xl font-semibold leading-tight text-white">
              Pro-grade trading signals, journaling, and education in one platform.
            </h1>
            <p className="mt-5 max-w-lg text-slate-300">
              Build conviction with clear market structure, disciplined execution, and VIP content designed
              for traders who want consistency.
            </p>
          </div>
        </div>

        <div className="p-8 sm:p-10">
          <Link to="/" className="text-sm uppercase tracking-[0.28em] text-neon">
            Trade Smart. Trade Simple.
          </Link>
          <h2 className="mt-6 font-display text-4xl font-semibold text-white">{title}</h2>
          <p className="mt-3 text-slate-400">{subtitle}</p>
          <div className="mt-8">{children}</div>
          <Link to={alternateHref} className="mt-6 inline-block text-sm text-slate-400 transition hover:text-neon">
            {alternateLabel}
          </Link>
        </div>
      </div>
    </div>
  );
}
