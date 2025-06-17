import './Navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-menu">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/agenda">Agenda</Link></li>
        <li><Link to="/reservas">Reservas</Link></li>
        <li><Link to="/eventos">Eventos</Link></li>
        <li><Link to="/">Salir</Link></li>
        <li><Link to="inicio">Inicio</Link></li>
        <li><Link to="/AdmonEquipos">Administrar Equipos</Link></li>
      </ul>
    </nav>
  );
}
