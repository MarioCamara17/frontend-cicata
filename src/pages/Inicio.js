import React from 'react';
import { useNavigate } from 'react-router-dom';

export function Inicio() {
  const navigate = useNavigate();

  return (
    <div className="container min-vh-100 d-flex flex-column justify-content-center align-items-center bg-light">
      <div className="row w-100 justify-content-center mb-3">
        <div className="col-6 col-md-3 mb-3">
          <button className="btn btn-primary w-100 py-4" style={{ fontSize: "1rem", height: "300px" , width: 120,}} onClick={() => navigate('/agenda')}>
            <img src="/agenda.png" alt="Agenda" style={{ width: 250, height: 250, marginRight: 0}} />
            Agenda tu visita
          </button>
        </div>
        <div className="col-6 col-md-3 mb-3">
          <button className="btn btn-success w-100 py-3" style={{ fontSize: "1rem", height: "300px" , width: 120,}} onClick={() => navigate('/disponibilidad')}>
            <img src="/disponibilidad.png" alt="Disponibilidad" style={{ width: 250, height: 250, marginRight: 0}} />
            Consulta disponibilidad
          </button>
        </div>
        <div className="col-6 col-md-3 mb-3">
          <button className="btn btn-warning w-100 py-3" style={{ fontSize: "1rem", height: "300px" , width: 120,}} onClick={() => navigate('/eventos')}>
            <img src="/eventos.png" alt="Eventos" style={{ width: 250, height: 250, marginRight: 0}} />
            Eventos
          </button>
        </div>
        <div className="col-6 col-md-3 mb-3">
          <button className="btn btn-danger w-100 py-3" onClick={() => navigate('/capacitacion')}>
             <img src="/capacitacion.png" alt="Capacitacion" style={{ width: 250, height: 250, marginRight: 0}} />
            Capacitación
          </button>
        </div>
      </div>
      <div className="row w-100 justify-content-center">
        <div className="col-6 col-md-3 mb-3">
          <button className="btn btn-info w-100 py-3" style={{ fontSize: "1rem", height: "300px" , width: 120,}} onClick={() => navigate('/Catalogo')}>
             <img src="/catalogo.png" alt="Catalogo" style={{ width: 250, height: 250, marginRight: 0}} />
            Catálogo de servicios
          </button>
        </div>
        <div className="col-6 col-md-3 mb-3">
          <button className="btn btn-secondary w-100 py-3" style={{ fontSize: "1rem", height: "300px" , width: 120,}} onClick={() => navigate('/pagina6')}>
             <img src="/reportes.png" alt="reportes" style={{ width: 250, height: 250, marginRight: 0}} />
            Reportes
          </button>
        </div>
      </div>
    </div>
  );
}