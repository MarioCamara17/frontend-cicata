import { Routes, Route ,} from "react-router-dom";
import Eventos from '../pages/Eventos';
import Capacitacion from '../pages/Capacitacion';
import ConsultaDisponibilidad from '../pages/ConsultaDisponibilidad';
import Reportes from '../pages/Reportes';
import Home from '../screens/Home'
import Registro from "../pages/Registro";
import Login from "../pages/Login";

export function Rutas() {
  return (
    <Routes>
      <Route path="/eventos" element={<Eventos />} />
      <Route path="/capacitacion" element={<Capacitacion />} />
      <Route path="/disponibilidad" element={<ConsultaDisponibilidad />} />
      <Route path="/reportes" element={<Reportes />} />
      <Route path="/" element={<Home/>} />
        <Route path="/registro" element={<Registro/>} />
        <Route path="/login" element={<Login/>} />
    </Routes>
  );
}


