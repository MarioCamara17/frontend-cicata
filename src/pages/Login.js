// src/pages/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Login() {
  const [correo, setCorreo]         = useState('');
  const [contrasena, setContrasena] = useState('');
  const [error, setError]           = useState(null);
  const { login }                   = useAuth();
  const navigate                    = useNavigate();

  // Esta es la función que usaremos en el onSubmit:
  const handleSubmit = async e => {
    e.preventDefault();
    setError(null);

    try {
      await login(correo, contrasena);
      navigate('/reservas');  
    } catch {
      setError('Credenciales inválidas');
    }
  };

  return (
    <div className="container min-vh-100 d-flex flex-column justify-content-center align-items-center bg-light">
      <div className="card shadow-lg p-4" style={{ maxWidth: 420, width: '100%' }}>
        <h2 className="text-center mb-4 fw-bold">Iniciar Sesión</h2>

        {error && <div className="alert alert-danger">{error}</div>}

        {/* Asegúrate de usar handleSubmit aquí */}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="email"
              placeholder="Correo electrónico"
              className="form-control"
              value={correo}
              onChange={e => setCorreo(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Contraseña"
              className="form-control"
              value={contrasena}
              onChange={e => setContrasena(e.target.value)}
              required
            />
          </div>
          <div className="d-flex flex-column gap-2">
            <button type="submit" className="btn btn-success fw-bold">
              Entrar
            </button>
            <button
              type="button"
              className="btn btn-outline-primary fw-bold"
              onClick={() => navigate('/registro')}
            >
              Crear cuenta nueva
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
