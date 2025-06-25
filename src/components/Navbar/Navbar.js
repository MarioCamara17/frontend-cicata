import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import './Navbar.css';

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="navbar">
      <ul className="navbar-menu">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/agenda">Agenda</Link></li>
        <li><Link to="/reservas">Reservas</Link></li>
        <li><Link to="/eventos">Eventos</Link></li>
        <li><Link to="/capacitacion">Capacitación</Link></li>
        <li><Link to="/disponibilidad">Disponibilidad</Link></li>
        <li><Link to="/reportes">Reportes</Link></li>
        <li><Link to="/catalogo">Catálogo</Link></li>
        <li><Link to="/admon-equipos">Administrar Equipos</Link></li>
        {user && (
          <li>
            <button
              onClick={logout}
              className="nav-link btn btn-link"
              style={{ padding: 0 }}
            >
              Salir
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
}
