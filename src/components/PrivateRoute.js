import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function PrivateRoute({ children }) {
  const { user, loading } = useAuth();

  // Mientras verificamos el token:
  if (loading) return <div>Cargando…</div>;

  // Si no hay usuario, back al login
  if (!user) return <Navigate to="/login" replace />;

  return children;
}
