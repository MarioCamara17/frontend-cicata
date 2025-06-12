import { Link } from 'react-router-dom';
import '../styles/Home.scss';

export default function Home() {
  return (
    <div className="home-bg">
      <div className="home-panel">
        <h2>
          Laboratorio de Sistemas Autónomos Ligeros
        </h2>
        <div className="home-buttons">
          <Link to="/registro" className="btn blue">Crear Cuenta Nueva</Link>
          <Link to="/login" className="btn green">Iniciar Sesión</Link>
        </div>
      </div>
    </div>
  );
}
