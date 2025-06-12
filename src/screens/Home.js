import { Link } from 'react-router-dom';
import './Home.scss';

export default function Home() {
  return (
    <div className="home-bg">
      <div
        className="home-panel"
        style={{
          background: 'rgba(0,0,0,0.7)',
          padding: '60px 20px',
          borderRadius: '12px',
          color: '#fff',
          textAlign: 'center',
          minWidth: '320px',
          boxShadow: '0 4px 32px rgba(0,0,0,0.7)',
        }}
      >
        <h2 style={{ fontSize: '26px', marginBottom: '30px', textShadow: '1px 1px 3px #000' }}>
          Laboratorio de Sistemas Autónomos Ligeros
        </h2>
        <div className="home-buttons" style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
          <Link to="/registro" className="btn blue">Crear Cuenta Nueva</Link>
          <Link to="/login" className="btn green">Iniciar Sesión</Link>
        </div>
      </div>
    </div>
  );
}

