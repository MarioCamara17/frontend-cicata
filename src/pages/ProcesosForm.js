// ProcesosForm.js
import { useState } from "react";

export default function ProcesosForm() {
  const [procesos, setProcesos] = useState([]);
  const [nuevoProceso, setNuevoProceso] = useState("");

  const agregarProceso = () => {
    if (nuevoProceso.trim() === "") return;
    setProcesos([...procesos, nuevoProceso]);
    setNuevoProceso("");
  };

  const eliminarProceso = (nombre) => {
    if (window.confirm(`¿Seguro que deseas eliminar el proceso "${nombre}"?`)) {
      setProcesos(procesos.filter(p => p !== nombre));
    }
  };

  return (
    <div className="mb-4">
      <h5>Procesos</h5>
      <div className="input-group mb-2">
        <input
          type="text"
          className="form-control"
          placeholder="Nombre del proceso"
          value={nuevoProceso}
          onChange={e => setNuevoProceso(e.target.value)}
        />
        <button className="btn btn-success" onClick={agregarProceso}>
          Agregar
        </button>
      </div>
      <ul className="list-group">
        {procesos.map(p => (
          <li key={p} className="list-group-item d-flex justify-content-between align-items-center">
            {p}
            <button className="btn btn-danger btn-sm" onClick={() => eliminarProceso(p)}>
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}