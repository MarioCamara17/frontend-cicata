import './Home.scss';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div
      className="home-container"
      style={{
        backgroundImage: "url('/laboratorio.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Logos */}
      <img src="/educacion.jpg" alt="Educación Pública" className="home-logo logo-left" />
      <img src="/cicata.jpg" alt="IPN" className="home-logo logo-right" />

      {/* Títulos */}
      <h1 className="home-title">
        Centro de Investigación en Ciencia Aplicada y Tecnología Avanzada Unidad Querétaro
      </h1>
      <h2 className="home-subtitle">
        Laboratorio de Sistemas Autónomos Ligeros
      </h2>

      {/* Botones */}
      <div className="home-buttons">
        <Link to="/registro" className="blue">Crear Cuenta Nueva</Link>
        <Link to="/login" className="green">Iniciar Sesión</Link>
      </div>
    </div>
  );
}
