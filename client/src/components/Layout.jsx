import { CreditCard, LogOut, Shield, BookOpen, ChartCandlestick, NotebookText } from 'lucide-react';
import { NavLink, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';
import TickerBar from './TickerBar.jsx';

const navItems = [
  { to: '/app', label: 'Dashboard', icon: ChartCandlestick, end: true },
  { to: '/app/education', label: 'Education', icon: BookOpen },
  { to: '/app/journal', label: 'Journal', icon: NotebookText },
  { to: '/pricing', label: 'Pricing', icon: CreditCard }
];

export default function Layout() {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen px-4 py-4 sm:px-6 lg:px-8">
      <TickerBar />
      <div className="mx-auto mt-4 grid max-w-7xl gap-4 lg:grid-cols-[260px,1fr]">
        <aside className="glass-panel rounded-3xl p-5 shadow-glow">
          <div className="mb-8">
            <p className="font-display text-xs uppercase tracking-[0.35em] text-gold">SIMPLE TREND TRADER</p>
            <h1 className="mt-3 text-2xl font-bold text-white">Trade Smart. Trade Simple.</h1>
            <div className="mt-4 rounded-2xl border border-neon/20 bg-neon/10 px-4 py-3 text-sm text-neon">
              {user?.membership === 'vip' ? 'VIP Access Active' : 'Free Account'}
            </div>
          </div>

          <nav className="space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;

              return (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.end}
                  className={({ isActive }) =>
                    `flex items-center gap-3 rounded-2xl px-4 py-3 text-sm transition ${
                      isActive
                        ? 'bg-white/10 text-neon shadow-glow'
                        : 'text-slate-300 hover:bg-white/5 hover:text-white'
                    }`
                  }
                >
                  <Icon size={18} />
                  {item.label}
                </NavLink>
              );
            })}

            {user?.role === 'admin' && (
              <NavLink
                to="/app/admin"
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-2xl px-4 py-3 text-sm transition ${
                    isActive
                      ? 'bg-gold/10 text-gold shadow-gold'
                      : 'text-slate-300 hover:bg-white/5 hover:text-white'
                  }`
                }
              >
                <Shield size={18} />
                Admin Panel
              </NavLink>
            )}
          </nav>

          <div className="mt-8 rounded-3xl border border-gold/20 bg-gold/10 p-4">
            <p className="text-sm text-slate-300">Account</p>
            <h2 className="mt-1 text-lg font-semibold">{user?.name}</h2>
            <p className="text-xs uppercase tracking-[0.3em] text-gold">{user?.role}</p>
            <button
              type="button"
              onClick={logout}
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-2xl border border-white/10 px-4 py-3 text-sm text-white transition hover:border-neon/30 hover:text-neon"
            >
              <LogOut size={16} />
              Logout
            </button>
          </div>
        </aside>

        <main className="glass-panel rounded-3xl p-4 sm:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
