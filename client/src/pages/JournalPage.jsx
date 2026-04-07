import { useState } from 'react';
import FormInput from '../components/FormInput.jsx';
import SectionTitle from '../components/SectionTitle.jsx';
import { useAuth } from '../context/AuthContext.jsx';
import { useFetch } from '../hooks/useFetch.js';
import { apiRequest } from '../lib/api.js';

const initialState = {
  date: new Date().toISOString().slice(0, 10),
  mood: 'Focused',
  tradesTaken: 0,
  pnl: 0,
  mistakes: '',
  lessons: '',
  plan: ''
};

export default function JournalPage() {
  const { token, setUser } = useAuth();
  const { data, loading, error, setData } = useFetch('/journal');
  const [form, setForm] = useState(initialState);
  const [message, setMessage] = useState('');

  const submit = async (event) => {
    event.preventDefault();
    const payload = await apiRequest('/journal', {
      method: 'POST',
      token,
      body: {
        ...form,
        tradesTaken: Number(form.tradesTaken),
        pnl: Number(form.pnl)
      }
    });

    setData((prev) => ({
      ...prev,
      entries: [payload.entry, ...(prev.entries || []).filter((item) => item._id !== payload.entry._id)]
    }));

    const profile = await apiRequest('/auth/me', { token });
    setUser(profile.user);
    setMessage('Journal saved successfully.');
  };

  return (
    <div className="grid gap-8 xl:grid-cols-[0.9fr,1.1fr]">
      <section>
        <SectionTitle
          eyebrow="Journal"
          title="Daily Trading Log"
          description="Capture emotions, execution quality, and your next-session plan so your data compounds."
        />
        <form onSubmit={submit} className="space-y-4 rounded-[2rem] border border-white/10 bg-white/5 p-5">
          <div className="grid gap-4 sm:grid-cols-2">
            <FormInput label="Date" type="date" value={form.date} onChange={(e) => setForm((prev) => ({ ...prev, date: e.target.value }))} />
            <FormInput label="Mood" value={form.mood} onChange={(e) => setForm((prev) => ({ ...prev, mood: e.target.value }))} />
            <FormInput label="Trades Taken" type="number" value={form.tradesTaken} onChange={(e) => setForm((prev) => ({ ...prev, tradesTaken: e.target.value }))} />
            <FormInput label="P&L" type="number" value={form.pnl} onChange={(e) => setForm((prev) => ({ ...prev, pnl: e.target.value }))} />
          </div>
          <TextArea label="Mistakes" value={form.mistakes} onChange={(e) => setForm((prev) => ({ ...prev, mistakes: e.target.value }))} />
          <TextArea label="Lessons" value={form.lessons} onChange={(e) => setForm((prev) => ({ ...prev, lessons: e.target.value }))} />
          <TextArea label="Tomorrow's Plan" value={form.plan} onChange={(e) => setForm((prev) => ({ ...prev, plan: e.target.value }))} />
          {message && <p className="rounded-2xl border border-neon/20 bg-neon/10 px-4 py-3 text-sm text-neon">{message}</p>}
          <button type="submit" className="rounded-2xl bg-neon px-5 py-3 font-semibold text-night">
            Save Journal
          </button>
        </form>
      </section>

      <section>
        <SectionTitle
          eyebrow="History"
          title="Performance Timeline"
          description="Review daily trading decisions and how your edge is evolving over time."
        />
        {loading && <p className="text-sm text-slate-400">Loading journal entries...</p>}
        {error && <p className="text-sm text-rose-300">{error}</p>}
        <div className="space-y-4">
          {(data.entries || []).map((entry) => (
            <div key={entry._id} className="glass-panel rounded-3xl p-5">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-gold">{entry.date}</p>
                  <h3 className="mt-2 text-xl font-semibold">{entry.mood}</h3>
                </div>
                <div className={`rounded-full px-3 py-1 text-sm ${entry.pnl >= 0 ? 'bg-neon/10 text-neon' : 'bg-rose-500/10 text-rose-300'}`}>
                  {entry.pnl >= 0 ? '+' : ''}
                  {entry.pnl}
                </div>
              </div>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                <MiniStat label="Trades" value={entry.tradesTaken} />
                <MiniStat label="Mistakes" value={entry.mistakes || 'None'} />
                <MiniStat label="Plan" value={entry.plan || 'No note'} />
              </div>
              <p className="mt-4 text-sm text-slate-400">{entry.lessons}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function TextArea({ label, ...props }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm text-slate-300">{label}</span>
      <textarea
        {...props}
        rows={4}
        className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-neon/40 focus:shadow-glow"
      />
    </label>
  );
}

function MiniStat({ label, value }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
      <p className="text-xs uppercase tracking-[0.24em] text-slate-500">{label}</p>
      <p className="mt-2 text-sm text-white">{value}</p>
    </div>
  );
}
