import React from 'react';
import { Outlet } from 'react-router-dom';
import './Layout.css';

export function Layout() {
  return (
    <div className="layout-container">
      {/* Encabezado */}
      <header className="layout-header">
        <div className="header-content">
          <img src="/educacion.jpg" alt="SEP" className="logo" />
          <img src="/cicata.jpg" alt="IPN" className="logo" />
          <div className="titulo-institucion">
            <h1>Instituto Politécnico Nacional</h1>
            <p>"La Técnica al Servicio de la Patria"</p>
          </div>
        </div>
        <div className="franja-centro">
          Centro de Investigación en Ciencia Aplicada y Tecnología Avanzada, Unidad Querétaro
        </div>
      </header>

      {/* Contenido principal con scroll solo aquí */}
      <main className="layout-body">
        <div className="content-panel">
          <Outlet /> {/* Aquí se renderiza AgendaVisita */}
        </div>
      </main>

      {/* Footer */}
      <footer className="layout-footer">
        © 2025 Laboratorio SAL-LAB · Instituto Politécnico Nacional
      </footer>
    </div>
  );
}
