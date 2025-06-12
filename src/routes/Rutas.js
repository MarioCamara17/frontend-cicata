import { Routes, Route } from "react-router-dom";
import Eventos from "../pages/Eventos";
import Capacitacion from "../pages/Capacitacion";
import ConsultaDisponibilidad from "../pages/ConsultaDisponibilidad";
import Reportes from "../pages/Reportes";
import Home from "../screens/Home";
import Registro from "../pages/Registro";
import Login from "../pages/Login";
import { Layout } from "../components/Layout/Layout";
import { Inicio } from "../pages/Inicio";

export function Rutas() {
  return (
    <Routes>
      {/* Rutas que usan el layout */}
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/eventos" element={<Eventos />} />
        <Route path="/capacitacion" element={<Capacitacion />} />
        <Route path="/disponibilidad" element={<ConsultaDisponibilidad />} />
        <Route path="/reportes" element={<Reportes />} />
      </Route>

      {/* Rutas que no usan el layout */}
      <Route path="/registro" element={<Registro />} />
      <Route path="/login" element={<Login />} />
      <Route path="/Inicio"element={<Inicio />} />
    </Routes>
  );
}


