// LaboratoriosForm.js
import { useState } from "react";

export default function LaboratoriosForm() {
  const [laboratorios, setLaboratorios] = useState([]);
  const [nuevoLaboratorio, setNuevoLaboratorio] = useState("");

  const agregarLaboratorio = () => {
    if (nuevoLaboratorio.trim() === "") return;
    setLaboratorios([...laboratorios, nuevoLaboratorio]);
    setNuevoLaboratorio("");
  };

  const eliminarLaboratorio = (nombre) => {
    if (window.confirm(`¿Seguro que deseas eliminar el laboratorio "${nombre}"?`)) {
      setLaboratorios(laboratorios.filter(l => l !== nombre));
    }
  };

  return (
    <div className="mb-4">
      <h5>Laboratorios</h5>
      <div className="input-group mb-2">
        <input
          type="text"
          className="form-control"
          placeholder="Nombre del laboratorio"
          value={nuevoLaboratorio}
          onChange={e => setNuevoLaboratorio(e.target.value)}
        />
        <button className="btn btn-success" onClick={agregarLaboratorio}>
          Agregar
        </button>
      </div>
      <ul className="list-group">
        {laboratorios.map(l => (
          <li key={l} className="list-group-item d-flex justify-content-between align-items-center">
            {l}
            <button className="btn btn-danger btn-sm" onClick={() => eliminarLaboratorio(l)}>
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}