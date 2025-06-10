import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4 flex flex-wrap justify-between items-center shadow-md">
      <div className="text-xl font-bold">SAL-LAB</div>
      <div className="flex gap-4 flex-wrap">
        <Link to="/agenda">Agenda tu visita</Link>
        <Link to="/disponibilidad">Consulta disponibilidad</Link>
        <Link to="/eventos">Eventos</Link>
        <Link to="/capacitacion">Capacitación</Link>
        <Link to="/catalogos">Catálogos</Link>
        <Link to="/reportes">Reportes</Link>
        <Link to="/salir">Salir</Link>
      </div>
    </nav>
  );
}