// EventosForm.js
import { useState } from "react";

export default function EventosForm() {
  const [eventos, setEventos] = useState([]);
  const [nuevoEvento, setNuevoEvento] = useState("");

  const agregarEvento = () => {
    if (nuevoEvento.trim() === "") return;
    setEventos([...eventos, nuevoEvento]);
    setNuevoEvento("");
  };

  const eliminarEvento = (nombre) => {
    if (window.confirm(`¿Seguro que deseas eliminar el evento "${nombre}"?`)) {
      setEventos(eventos.filter(e => e !== nombre));
    }
  };

  return (
    <div className="mb-4">
      <h5>Eventos</h5>
      <div className="input-group mb-2">
        <input
          type="text"
          className="form-control"
          placeholder="Nombre del evento"
          value={nuevoEvento}
          onChange={e => setNuevoEvento(e.target.value)}
        />
        <button className="btn btn-success" onClick={agregarEvento}>
          Agregar
        </button>
      </div>
      <ul className="list-group">
        {eventos.map(e => (
          <li key={e} className="list-group-item d-flex justify-content-between align-items-center">
            {e}
            <button className="btn btn-danger btn-sm" onClick={() => eliminarEvento(e)}>
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}