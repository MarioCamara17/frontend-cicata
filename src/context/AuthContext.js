// src/context/AuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import API from '../api';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser]       = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate               = useNavigate();

  // Al montar, vemos si tenemos token guardado
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      API.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      setUser({ token });  // aquí podrías decodificar el payload si quieres nombre, rol, etc.
    }
    setLoading(false);
  }, []);

  // Función de login que el Login.js invocará
  const login = async (username, password) => {
    const { data } = await API.post('/Users/authenticate', { username, password });
    const token = data.token;
    localStorage.setItem('token', token);
    API.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    setUser({ token });
    navigate('/reservas');   // redirijo a mis reservas
  };

  const logout = () => {
    localStorage.removeItem('token');
    delete API.defaults.headers.common['Authorization'];
    setUser(null);
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
