import { Link } from 'react-router-dom';
import fondo from '../assets/fablab.jpg'; // Importa la imagen
import '../styles/Home.scss';

export default function Home() {
  return (
    <div
      className="home-bg"
      style={{
        backgroundImage: `url(${fondo})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
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
