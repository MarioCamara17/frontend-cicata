import React from 'react';
import { Routes, Route } from 'react-router-dom';

// páginas públicas
import Login from '../pages/Login';
import Registro from '../pages/Registro';
import { Inicio } from '../pages/Inicio';

// layout y ruta privada
import PrivateRoute from '../components/PrivateRoute';
import { Layout } from '../components/Layout/Layout';

// páginas dentro del layout
import Home from '../screens/Home';
import Reservas from '../pages/Reservas';
import Eventos from '../pages/Eventos';
import Capacitacion from '../pages/Capacitacion';
import ConsultaDisponibilidad from '../pages/ConsultaDisponibilidad';
import Reportes from '../pages/Reportes';
import AgendaVisita from '../pages/AgendaVisita';
import Catalogo from '../pages/Catalogo';
import AdmonEquipos from '../pages/AdmonEquipos';

// formularios individuales
import UsuariosForm from '../pages/UsuariosForm';
import LaboratoriosForm from '../pages/LaboratoriosForm';
import ProcesosForm from '../pages/ProcesosForm';
import CursosForm from '../pages/CursosForm';
import AlumnosForm from '../pages/AlumnosForm';
import InstructoresForm from '../pages/InstruccionesForm';
import ConstanciasForm from '../pages/ConstanciasForm';
import EventosForm from '../pages/EventosForm';
import CapacitacionesForm from '../pages/CapacitacionesForm';
import EncuestaSatisfaccion from '../pages/EncuestasSatisfaccion';

export function Rutas() {
  return (
    <Routes>
      {/** Rutas públicas **/}
      <Route path="/login"    element={<Login />} />
      <Route path="/registro" element={<Registro />} />
      <Route path="/inicio"   element={<Inicio />} />

      {/** Rutas protegidas **/}
      <Route
        path="/*"
        element={
          <PrivateRoute>
            <Layout />
          </PrivateRoute>
        }
      >
        {/** Dentro de Layout **/}
        <Route index                        element={<Home />} />
        <Route path="reservas"              element={<Reservas />} />
        <Route path="eventos"               element={<Eventos />} />
        <Route path="capacitacion"          element={<Capacitacion />} />
        <Route path="disponibilidad"        element={<ConsultaDisponibilidad />} />
        <Route path="reportes"              element={<Reportes />} />
        <Route path="agenda"                element={<AgendaVisita />} />
        <Route path="catalogo"              element={<Catalogo />} />
        <Route path="admon-equipos"         element={<AdmonEquipos />} />

        {/** Formularios individuales **/}
        <Route path="usuarios"     element={<UsuariosForm />} />
        <Route path="laboratorios" element={<LaboratoriosForm />} />
        <Route path="procesos"     element={<ProcesosForm />} />
        <Route path="cursos"       element={<CursosForm />} />
        <Route path="alumnos"      element={<AlumnosForm />} />
        <Route path="instructores" element={<InstructoresForm />} />
        <Route path="constancias"  element={<ConstanciasForm />} />
        <Route path="eventosform"  element={<EventosForm />} />
        <Route path="capacitaciones" element={<CapacitacionesForm />} />
        <Route path="encuesta"     element={<EncuestaSatisfaccion />} />
      </Route>
    </Routes>
  );
}
