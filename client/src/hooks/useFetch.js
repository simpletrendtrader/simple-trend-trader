import { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext.jsx';
import { apiRequest } from '../lib/api.js';

export function useFetch(path) {
  const { token } = useAuth();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let active = true;

    apiRequest(path, { token })
      .then((payload) => {
        if (!active) {
          return;
        }

        setData(payload);
      })
      .catch((err) => {
        if (active) {
          setError(err.message);
        }
      })
      .finally(() => {
        if (active) {
          setLoading(false);
        }
      });

    return () => {
      active = false;
    };
  }, [path, token]);

  return { data, loading, error, setData };
}
