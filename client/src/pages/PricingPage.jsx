import { useNavigate } from 'react-router-dom';
import PricingCard from '../components/PricingCard.jsx';
import SectionTitle from '../components/SectionTitle.jsx';
import { useAuth } from '../context/AuthContext.jsx';
import { useFetch } from '../hooks/useFetch.js';
import { apiRequest } from '../lib/api.js';

export default function PricingPage() {
  const navigate = useNavigate();
  const { user, token } = useAuth();
  const { data, loading, error } = useFetch('/billing/plans');

  const startUpgrade = async () => {
    if (!user) {
      navigate('/signup');
      return;
    }

    const response = await apiRequest('/billing/checkout', {
      method: 'POST',
      token,
      body: { plan: 'vip' }
    });

    window.location.href = response.checkoutUrl;
  };

  const openPortal = async () => {
    const response = await apiRequest('/billing/portal', {
      method: 'POST',
      token
    });

    window.location.href = response.portalUrl;
  };

  return (
    <div className="px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="Membership"
          title="Choose Your Trading Access"
          description="Start free, then upgrade to VIP when you want premium signals and the full education vault."
        />
        {loading && <p className="text-sm text-slate-400">Loading plans...</p>}
        {error && <p className="rounded-2xl border border-rose-500/20 bg-rose-500/10 px-4 py-3 text-sm text-rose-300">{error}</p>}
        <div className="grid gap-5 md:grid-cols-2">
          {(data.plans || []).map((plan) => (
            <PricingCard
              key={plan.id}
              plan={plan}
              action={
                plan.id === 'vip' ? (
                  user?.membership === 'vip' ? (
                    <button
                      type="button"
                      onClick={openPortal}
                      className="w-full rounded-2xl border border-gold/25 bg-gold/10 px-5 py-3 font-semibold text-gold"
                    >
                      Manage Billing
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={startUpgrade}
                      className="w-full rounded-2xl bg-gold px-5 py-3 font-semibold text-night"
                    >
                      Upgrade to VIP
                    </button>
                  )
                ) : (
                  <button
                    type="button"
                    onClick={() => navigate(user ? '/app' : '/signup')}
                    className="w-full rounded-2xl border border-white/10 px-5 py-3 font-semibold text-white"
                  >
                    {user ? 'Open Dashboard' : 'Start Free'}
                  </button>
                )
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}
