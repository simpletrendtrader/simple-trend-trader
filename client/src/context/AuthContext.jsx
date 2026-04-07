import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { apiRequest } from '../lib/api.js';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem('stt_token'));
  const [user, setUser] = useState(() => {
    const raw = localStorage.getItem('stt_user');
    return raw ? JSON.parse(raw) : null;
  });
  const [loading, setLoading] = useState(Boolean(token));

  useEffect(() => {
    if (!token) {
      setLoading(false);
      return;
    }

    apiRequest('/auth/me', { token })
      .then((data) => setUser(data.user))
      .catch(() => logout())
      .finally(() => setLoading(false));
  }, [token]);

  const persist = (payload) => {
    localStorage.setItem('stt_token', payload.token);
    localStorage.setItem('stt_user', JSON.stringify(payload.user));
    setToken(payload.token);
    setUser(payload.user);
  };

  const login = async (credentials) => {
    const data = await apiRequest('/auth/login', {
      method: 'POST',
      body: credentials
    });
    persist(data);
  };

  const signup = async (payload) => {
    const data = await apiRequest('/auth/signup', {
      method: 'POST',
      body: payload
    });
    persist(data);
  };

  const logout = () => {
    localStorage.removeItem('stt_token');
    localStorage.removeItem('stt_user');
    setToken(null);
    setUser(null);
    setLoading(false);
  };

  const value = useMemo(
    () => ({
      token,
      user,
      loading,
      login,
      signup,
      logout,
      setUser
    }),
    [token, user, loading]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);
