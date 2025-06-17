import { useState } from "react";
import { useEquipos } from "../context/EquiposContext";

export default function AdmonEquipos() {
  const { equipos, setEquipos } = useEquipos();
  const [nuevoNombre, setNuevoNombre] = useState("");
  const [nuevoTipo, setNuevoTipo] = useState("Fabricación");

  const cambiarEstado = (nombre, nuevoEstado) => {
    setEquipos(equipos.map(eq =>
      eq.nombre === nombre ? { ...eq, estado: nuevoEstado } : eq
    ));
  };

  const agregarEquipo = () => {
    if (nuevoNombre.trim() === "") return;
    setEquipos([
      ...equipos,
      { nombre: nuevoNombre, tipo: nuevoTipo, estado: "Disponible" }
    ]);
    setNuevoNombre("");
  };

  return (
    <div className="container mt-5">
      <div className="card shadow p-4 mx-auto" style={{ maxWidth: 600 }}>
        <h3 className="mb-4 text-center">Administrar Equipos</h3>
        <table className="table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Tipo</th>
              <th>Estado</th>
              <th>Cambiar estado</th>
            </tr>
          </thead>
          <tbody>
            {equipos.map(eq => (
              <tr key={eq.nombre}>
                <td>{eq.nombre}</td>
                <td>{eq.tipo}</td>
                <td>{eq.estado}</td>
                <td>
                  <select
                    className="form-select"
                    value={eq.estado}
                    onChange={e => cambiarEstado(eq.nombre, e.target.value)}
                  >
                    <option>Disponible</option>
                    <option>Ocupado</option>
                    <option>En mantenimiento</option>
                    <option>Fuera de servicio</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-4">
          <h5>Dar de alta nuevo equipo</h5>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Nombre del nuevo equipo"
              value={nuevoNombre}
              onChange={e => setNuevoNombre(e.target.value)}
            />
            <select
              className="form-select"
              value={nuevoTipo}
              onChange={e => setNuevoTipo(e.target.value)}
            >
              <option>Fabricación</option>
              <option>Medición</option>
              <option>Otro</option>
            </select>
            <button className="btn btn-success" onClick={agregarEquipo}>
              Agregar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}