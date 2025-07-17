// src/contexts/AuthContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';

const API = 'https://ponah-backend.onrender.com/api'; // votre backend Render

const AuthContext = createContext();

export function AuthProvider({ children }) {
  // On initialise à partir du localStorage pour persister la session
  const [user, setUser]   = useState(() => {
    const u = localStorage.getItem('user');
    return u ? JSON.parse(u) : null;
  });
  const [token, setToken] = useState(() => localStorage.getItem('token'));

  // Chaque fois que token/user change, on met à jour le localStorage
  useEffect(() => {
    if (token)   localStorage.setItem('token', token);
    else         localStorage.removeItem('token');

    if (user)    localStorage.setItem('user', JSON.stringify(user));
    else         localStorage.removeItem('user');
  }, [token, user]);

  // Appelle votre API /register
  const register = async ({ name, email, password }) => {
    const res = await fetch(`${API}/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password })
    });
    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.message || 'Échec de l\'inscription');
    }
    const data = await res.json();
    console.log('Données reçues au login:', data);
    // On récupère token + user renvoyés par l'API
    setToken(data.token);
    setUser(data.user);
    return data;
  };

  // Appelle votre API /login
  const login = async ({ email, password }) => {
    const res = await fetch(`${API}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.message || 'Échec de la connexion');
    }
    const data = await res.json();
    setToken(data.token);
    setUser(data.user);
    return data;
  };

  const logout = () => {
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// Hook pour y accéder partout
export function useAuth() {
  return useContext(AuthContext);
}
