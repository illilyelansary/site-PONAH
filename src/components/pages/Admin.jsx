// src/components/pages/Admin.jsx
import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';

export default function Admin() {
  const { user, login, register, logout } = useAuth();
  const [mode, setMode] = useState('login'); // 'login' or 'register'
  const [form, setForm] = useState({ name: '', email: '', password: '', confirmPassword: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (mode === 'login') {
        await login({ email: form.email, password: form.password });
      } else {
        if (form.password !== form.confirmPassword) {
          throw new Error('Les mots de passe ne correspondent pas');
        }
        await register({ name: form.name, email: form.email, password: form.password });
        setMode('login');
      }
    } catch (err) {
      setError(err.message || 'Une erreur est survenue');
    } finally {
      setLoading(false);
    }
  };

  // If already logged in, show welcome + logout
  if (user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
        <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-sm w-full">
          <h2 className="text-2xl font-bold mb-4">Bienvenue, {user.name} !</h2>
          <button
            onClick={logout}
            className="mt-4 w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition"
          >
            Déconnexion
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-center mb-4">
          {mode === 'login' ? 'Connexion Admin' : 'Inscription Admin'}
        </h2>

        <div className="flex justify-center mb-6 space-x-4">
          <button
            onClick={() => { setMode('login'); setError(''); }}
            className={`px-4 py-2 rounded ${mode === 'login' ? 'bg-primary text-white' : 'bg-gray-200'}`}
          >
            Connexion
          </button>
          <button
            onClick={() => { setMode('register'); setError(''); }}
            className={`px-4 py-2 rounded ${mode === 'register' ? 'bg-primary text-white' : 'bg-gray-200'}`}
          >
            Inscription
          </button>
        </div>

        {error && <div className="mb-4 text-red-600 text-sm text-center">{error}</div>}

        <form onSubmit={handleSubmit} className="space-y-4">
          {mode === 'register' && (
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Nom complet
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                disabled={loading}
                value={form.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:ring-primary"
              />
            </div>
          )}

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              disabled={loading}
              value={form.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:ring-primary"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium mb-1">
              Mot de passe
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              disabled={loading}
              value={form.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:ring-primary"
            />
          </div>

          {mode === 'register' && (
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium mb-1">
                Confirmer le mot de passe
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                required
                disabled={loading}
                value={form.confirmPassword}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:ring-primary"
              />
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-primary text-white py-2 rounded-lg font-semibold hover:bg-primary/90 transition"
          >
            {loading
              ? 'Veuillez patienter...'
              : mode === 'login'
                ? 'Se connecter'
                : "S'inscrire"}
          </button>
        </form>
      </div>
    </div>
  );
}
