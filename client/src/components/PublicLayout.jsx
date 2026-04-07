import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import logo from '../assets/stt-logo.svg';
import LiveTicker from './LiveTicker.jsx';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/trade-ideas', label: 'Trade Ideas' },
  { to: '/academy', label: 'Academy' },
  { to: '/about', label: 'About' },
  { to: '/pricing', label: 'VIP' },
  { to: '/contact', label: 'Contact' }
];

export default function PublicLayout() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen px-4 pb-10 pt-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <LiveTicker />

        <header className="glass-panel panel-depth mt-4 rounded-[2rem] px-5 py-5 shadow-glow">
          <div className="flex items-center justify-between gap-4">
            <Link to="/" className="min-w-0">
              <div className="flex items-center gap-3">
                <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl border border-gold/20 bg-white p-1 shadow-gold">
                  <img src={logo} alt="Simple Trend Trader logo" className="h-full w-full object-contain" />
                </div>
                <div>
                  <p className="font-display text-sm uppercase tracking-[0.45em] text-gold">SIMPLE TREND TRADER</p>
                  <p className="mt-1 text-sm text-slate-400">Trade Smart. Trade Simple.</p>
                </div>
              </div>
            </Link>

            <nav className="hidden items-center gap-2 lg:flex">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `rounded-full px-4 py-2 text-sm transition ${
                      isActive ? 'bg-white/10 text-white' : 'text-slate-400 hover:bg-white/5 hover:text-white'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            <div className="hidden items-center gap-3 lg:flex">
              <Link to="/login" className="rounded-full border border-white/10 px-4 py-2 text-sm text-white">
                Members Login
              </Link>
              <Link to="/contact" className="rounded-full bg-neon px-5 py-2 text-sm font-semibold text-night">
                Work With Me
              </Link>
            </div>

            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              className="rounded-full border border-white/10 p-3 text-white lg:hidden"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>

          {open && (
            <div className="mt-4 space-y-2 border-t border-white/10 pt-4 lg:hidden">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block rounded-2xl px-4 py-3 text-sm ${
                      isActive ? 'bg-white/10 text-white' : 'text-slate-300'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <Link to="/login" className="block rounded-2xl border border-white/10 px-4 py-3 text-sm text-white">
                Members Login
              </Link>
            </div>
          )}
        </header>

        <Outlet />

        <footer className="glass-panel panel-depth mt-10 rounded-[2rem] px-6 py-8">
          <div className="grid gap-8 lg:grid-cols-[1.05fr,0.95fr]">
            <div>
              <p className="font-display text-sm uppercase tracking-[0.45em] text-gold">SIMPLE TREND TRADER</p>
              <h2 className="mt-4 max-w-xl font-display text-3xl font-semibold text-white">
                A modern trading brand focused on clean trade ideas, disciplined execution, and educational clarity.
              </h2>
              <p className="editorial-kicker mt-4 max-w-lg text-2xl text-slate-300">
                Built to feel less like a dashboard and more like a serious market publication.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <FooterLink title="Trade Ideas" copy="Context-rich setups for FX, gold, and crypto." />
              <FooterLink title="Education" copy="Lessons that explain the logic behind the idea." />
              <FooterLink title="VIP Path" copy="Premium brand positioning for future private members." />
              <FooterLink title="Contact" copy="Use the website as your central publishing and lead-gen hub." />
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

function FooterLink({ title, copy }) {
  return (
    <div className="panel-depth rounded-[1.6rem] border border-white/10 bg-white/5 p-4">
      <h3 className="font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm text-slate-400">{copy}</p>
    </div>
  );
}
