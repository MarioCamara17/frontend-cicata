// AlumnosForm.js
import { useState } from "react";

export default function AlumnosForm() {
  const [alumnos, setAlumnos] = useState([]);
  const [nuevoAlumno, setNuevoAlumno] = useState("");

  const agregarAlumno = () => {
    if (nuevoAlumno.trim() === "") return;
    setAlumnos([...alumnos, nuevoAlumno]);
    setNuevoAlumno("");
  };

  const eliminarAlumno = (nombre) => {
    if (window.confirm(`¿Seguro que deseas eliminar el alumno "${nombre}"?`)) {
      setAlumnos(alumnos.filter(a => a !== nombre));
    }
  };

  return (
    <div className="mb-4">
      <h5>Alumnos</h5>
      <div className="input-group mb-2">
        <input
          type="text"
          className="form-control"
          placeholder="Nombre del alumno"
          value={nuevoAlumno}
          onChange={e => setNuevoAlumno(e.target.value)}
        />
        <button className="btn btn-success" onClick={agregarAlumno}>
          Agregar
        </button>
      </div>
      <ul className="list-group">
        {alumnos.map(a => (
          <li key={a} className="list-group-item d-flex justify-content-between align-items-center">
            {a}
            <button className="btn btn-danger btn-sm" onClick={() => eliminarAlumno(a)}>
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}