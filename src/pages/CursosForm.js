// CursosForm.js
import { useState } from "react";

export default function CursosForm() {
  const [cursos, setCursos] = useState([]);
  const [nuevoCurso, setNuevoCurso] = useState("");

  const agregarCurso = () => {
    if (nuevoCurso.trim() === "") return;
    setCursos([...cursos, nuevoCurso]);
    setNuevoCurso("");
  };

  const eliminarCurso = (nombre) => {
    if (window.confirm(`¿Seguro que deseas eliminar el curso "${nombre}"?`)) {
      setCursos(cursos.filter(c => c !== nombre));
    }
  };

  return (
    <div className="mb-4">
      <h5>Cursos</h5>
      <div className="input-group mb-2">
        <input
          type="text"
          className="form-control"
          placeholder="Nombre del curso"
          value={nuevoCurso}
          onChange={e => setNuevoCurso(e.target.value)}
        />
        <button className="btn btn-success" onClick={agregarCurso}>
          Agregar
        </button>
      </div>
      <ul className="list-group">
        {cursos.map(c => (
          <li key={c} className="list-group-item d-flex justify-content-between align-items-center">
            {c}
            <button className="btn btn-danger btn-sm" onClick={() => eliminarCurso(c)}>
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}