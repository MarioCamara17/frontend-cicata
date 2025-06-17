// ConstanciasForm.js
import { useState } from "react";

export default function ConstanciasForm() {
  const [constancias, setConstancias] = useState([]);
  const [nuevaConstancia, setNuevaConstancia] = useState("");

  const agregarConstancia = () => {
    if (nuevaConstancia.trim() === "") return;
    setConstancias([...constancias, nuevaConstancia]);
    setNuevaConstancia("");
  };

  const eliminarConstancia = (nombre) => {
    if (window.confirm(`¿Seguro que deseas eliminar la constancia "${nombre}"?`)) {
      setConstancias(constancias.filter(c => c !== nombre));
    }
  };

  return (
    <div className="mb-4">
      <h5>Constancias</h5>
      <div className="input-group mb-2">
        <input
          type="text"
          className="form-control"
          placeholder="Nombre de la constancia"
          value={nuevaConstancia}
          onChange={e => setNuevaConstancia(e.target.value)}
        />
        <button className="btn btn-success" onClick={agregarConstancia}>
          Agregar
        </button>
      </div>
      <ul className="list-group">
        {constancias.map(c => (
          <li key={c} className="list-group-item d-flex justify-content-between align-items-center">
            {c}
            <button className="btn btn-danger btn-sm" onClick={() => eliminarConstancia(c)}>
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}