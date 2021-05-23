import { useState, useEffect } from 'react';

import api from '../../services/api';
import history from '../../services/history';

export default function useAuth() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState({ 'error': '' });

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
      api.defaults.withCredentials = true;
      setAuthenticated(true);
    }

    setLoading(false);
  }, []);

  async function handleLogin(e, email, password) {
    e.preventDefault();

    try {
      const { data } = await api.post('/auth', { email, password });
      let cookie = data.token;
      localStorage.setItem('token', JSON.stringify(cookie));
      localStorage.setItem('user', JSON.stringify(data.user));
      api.defaults.headers.Authorization = `Bearer ${cookie}`;
      api.defaults.xsrfCookieName = 'csrftoken';
      api.defaults.xsrfHeaderName = 'X-CSRFToken';
      api.defaults.withCredentials = true;

      setAuthenticated(true);
      setErrors({ 'error': '' });
      history.push('/establishments');
    } catch (error) {
      console.log(error);
      console.log('Ooops! Houve um error.', error.message || error);
      setErrors({ 'error': 'Não foi possível fazer o login.' });
      return;
    }
  }

  function handleLogout() {
    setAuthenticated(false);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    api.defaults.headers.Authorization = undefined;

    history.push('/');
  }

  return { authenticated, loading, handleLogin, handleLogout, errors };
}
