// InstructoresForm.js
import { useState } from "react";

export default function InstructoresForm() {
  const [instructores, setInstructores] = useState([]);
  const [nuevoInstructor, setNuevoInstructor] = useState("");

  const agregarInstructor = () => {
    if (nuevoInstructor.trim() === "") return;
    setInstructores([...instructores, nuevoInstructor]);
    setNuevoInstructor("");
  };

  const eliminarInstructor = (nombre) => {
    if (window.confirm(`¿Seguro que deseas eliminar el instructor "${nombre}"?`)) {
      setInstructores(instructores.filter(i => i !== nombre));
    }
  };

  return (
    <div className="mb-4">
      <h5>Instructores</h5>
      <div className="input-group mb-2">
        <input
          type="text"
          className="form-control"
          placeholder="Nombre del instructor"
          value={nuevoInstructor}
          onChange={e => setNuevoInstructor(e.target.value)}
        />
        <button className="btn btn-success" onClick={agregarInstructor}>
          Agregar
        </button>
      </div>
      <ul className="list-group">
        {instructores.map(i => (
          <li key={i} className="list-group-item d-flex justify-content-between align-items-center">
            {i}
            <button className="btn btn-danger btn-sm" onClick={() => eliminarInstructor(i)}>
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}