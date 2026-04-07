import { useState } from 'react';
import { Link } from 'react-router-dom';
import AuthShell from '../components/AuthShell.jsx';
import FormInput from '../components/FormInput.jsx';
import { apiRequest } from '../lib/api.js';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [resetUrl, setResetUrl] = useState('');
  const [error, setError] = useState('');

  const submit = async (event) => {
    event.preventDefault();
    setError('');
    setMessage('');

    try {
      const data = await apiRequest('/password/forgot-password', {
        method: 'POST',
        body: { email }
      });
      setMessage(data.message);
      setResetUrl(data.resetUrl || '');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <AuthShell
      title="Reset Password"
      subtitle="Generate a secure reset link for your account."
      alternateLabel="Back to login"
      alternateHref="/login"
    >
      <form onSubmit={submit} className="space-y-4">
        <FormInput
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          required
        />
        {message && <p className="rounded-2xl border border-neon/20 bg-neon/10 px-4 py-3 text-sm text-neon">{message}</p>}
        {resetUrl && (
          <div className="rounded-2xl border border-gold/20 bg-gold/10 px-4 py-3 text-sm text-gold">
            Development reset link:
            <Link to={resetUrl.replace(window.location.origin, '')} className="mt-2 block break-all text-white underline">
              {resetUrl}
            </Link>
          </div>
        )}
        {error && <p className="rounded-2xl border border-rose-500/20 bg-rose-500/10 px-4 py-3 text-sm text-rose-300">{error}</p>}
        <button type="submit" className="w-full rounded-2xl bg-neon px-5 py-3 font-semibold text-night">
          Generate Reset Link
        </button>
      </form>
    </AuthShell>
  );
}
