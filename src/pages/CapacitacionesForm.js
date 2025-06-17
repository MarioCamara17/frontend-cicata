// CapacitacionesForm.js
import { useState } from "react";

export default function CapacitacionesForm() {
  const [capacitaciones, setCapacitaciones] = useState([]);
  const [nuevaCapacitacion, setNuevaCapacitacion] = useState("");

  const agregarCapacitacion = () => {
    if (nuevaCapacitacion.trim() === "") return;
    setCapacitaciones([...capacitaciones, nuevaCapacitacion]);
    setNuevaCapacitacion("");
  };

  const eliminarCapacitacion = (nombre) => {
    if (window.confirm(`¿Seguro que deseas eliminar la capacitación "${nombre}"?`)) {
      setCapacitaciones(capacitaciones.filter(c => c !== nombre));
    }
  };

  return (
    <div className="mb-4">
      <h5>Capacitaciones</h5>
      <div className="input-group mb-2">
        <input
          type="text"
          className="form-control"
          placeholder="Nombre de la capacitación"
          value={nuevaCapacitacion}
          onChange={e => setNuevaCapacitacion(e.target.value)}
        />
        <button className="btn btn-success" onClick={agregarCapacitacion}>
          Agregar
        </button>
      </div>
      <ul className="list-group">
        {capacitaciones.map(c => (
          <li key={c} className="list-group-item d-flex justify-content-between align-items-center">
            {c}
            <button className="btn btn-danger btn-sm" onClick={() => eliminarCapacitacion(c)}>
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}