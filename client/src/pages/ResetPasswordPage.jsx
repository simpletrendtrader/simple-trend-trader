import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import AuthShell from '../components/AuthShell.jsx';
import FormInput from '../components/FormInput.jsx';
import { apiRequest } from '../lib/api.js';

export default function ResetPasswordPage() {
  const { token } = useParams();
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const submit = async (event) => {
    event.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const data = await apiRequest(`/password/reset-password/${token}`, {
        method: 'POST',
        body: { password }
      });
      setMessage(data.message);
      setTimeout(() => navigate('/login'), 1200);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <AuthShell
      title="Choose A New Password"
      subtitle="Set a new password and return to your dashboard."
      alternateLabel="Back to login"
      alternateHref="/login"
    >
      <form onSubmit={submit} className="space-y-4">
        <FormInput
          label="New Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <FormInput
          label="Confirm Password"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        {message && <p className="rounded-2xl border border-neon/20 bg-neon/10 px-4 py-3 text-sm text-neon">{message}</p>}
        {error && <p className="rounded-2xl border border-rose-500/20 bg-rose-500/10 px-4 py-3 text-sm text-rose-300">{error}</p>}
        <button type="submit" className="w-full rounded-2xl bg-neon px-5 py-3 font-semibold text-night">
          Update Password
        </button>
      </form>
    </AuthShell>
  );
}
