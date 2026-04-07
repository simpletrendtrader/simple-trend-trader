import SectionTitle from '../components/SectionTitle.jsx';
import SignalCard from '../components/SignalCard.jsx';
import StatCard from '../components/StatCard.jsx';
import { useAuth } from '../context/AuthContext.jsx';
import { useFetch } from '../hooks/useFetch.js';

export default function DashboardPage() {
  const { user } = useAuth();
  const { data, loading, error } = useFetch('/signals');
  const signals = data.signals || [];

  return (
    <div>
      <SectionTitle
        eyebrow="Dashboard"
        title={`Welcome back, ${user?.name}`}
        description="Track today's setups, review your stats, and stay aligned with the SIMPLE TREND TRADER edge."
      />

      <div className="grid gap-4 md:grid-cols-3">
        <StatCard label="Win Rate" value={`${user?.winRate ?? 0}%`} />
        <StatCard label="Trades Logged" value={user?.tradesTaken ?? 0} accent="gold" />
        <StatCard label="Journal Streak" value={user?.journalStreak ?? 0} />
      </div>

      <section className="mt-8">
        <SectionTitle
          eyebrow="Today"
          title="Trade Signals"
          description="Public signals are visible to all members. VIP setups reveal the full execution levels for premium users."
        />
        {loading && <p className="text-sm text-slate-400">Loading signals...</p>}
        {error && <p className="text-sm text-rose-300">{error}</p>}
        <div className="grid gap-4 xl:grid-cols-2">
          {signals.map((signal) => (
            <SignalCard key={signal._id} signal={signal} />
          ))}
        </div>
      </section>
    </div>
  );
}
