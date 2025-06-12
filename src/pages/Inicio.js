import React from 'react';
import { useNavigate } from 'react-router-dom';

export function Inicio() {
  const navigate = useNavigate();

  return (
    <div className="container min-vh-100 d-flex flex-column justify-content-center align-items-center bg-light">
      <div className="row w-100 justify-content-center mb-3">
        <div className="col-6 col-md-3 mb-3">
          <button className="btn btn-primary w-100 py-3" onClick={() => navigate('/agenda')}>
            Agenda tu visita
          </button>
        </div>
        <div className="col-6 col-md-3 mb-3">
          <button className="btn btn-success w-100 py-3" onClick={() => navigate('/disponibilidad')}>
            Consulta disponibilidad
          </button>
        </div>
        <div className="col-6 col-md-3 mb-3">
          <button className="btn btn-warning w-100 py-3" onClick={() => navigate('/eventos')}>
            Eventos
          </button>
        </div>
        <div className="col-6 col-md-3 mb-3">
          <button className="btn btn-danger w-100 py-3" onClick={() => navigate('/pagina4')}>
            Capacitación
          </button>
        </div>
      </div>
      <div className="row w-100 justify-content-center">
        <div className="col-6 col-md-3 mb-3">
          <button className="btn btn-info w-100 py-3" onClick={() => navigate('/pagina5')}>
            Catálogo de servicios
          </button>
        </div>
        <div className="col-6 col-md-3 mb-3">
          <button className="btn btn-secondary w-100 py-3" onClick={() => navigate('/pagina6')}>
            Reportes
          </button>
        </div>
      </div>
    </div>
  );
}