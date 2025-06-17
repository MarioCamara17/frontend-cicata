// UsuariosForm.js
import { useState } from "react";

export default function UsuariosForm() {
  const [usuarios, setUsuarios] = useState([]);
  const [nuevoUsuario, setNuevoUsuario] = useState({ nombre: "", correo: "" });

  const agregarUsuario = () => {
    if (nuevoUsuario.nombre.trim() === "" || nuevoUsuario.correo.trim() === "") return;
    setUsuarios([...usuarios, nuevoUsuario]);
    setNuevoUsuario({ nombre: "", correo: "" });
  };

  const eliminarUsuario = (correo) => {
    if (window.confirm(`¿Seguro que deseas eliminar el usuario "${correo}"?`)) {
      setUsuarios(usuarios.filter(u => u.correo !== correo));
    }
  };

  return (
    <div className="mb-4">
      <h5>Usuarios</h5>
      <div className="input-group mb-2">
        <input
          type="text"
          className="form-control"
          placeholder="Nombre del usuario"
          value={nuevoUsuario.nombre}
          onChange={e => setNuevoUsuario({ ...nuevoUsuario, nombre: e.target.value })}
        />
        <input
          type="email"
          className="form-control"
          placeholder="Correo electrónico"
          value={nuevoUsuario.correo}
          onChange={e => setNuevoUsuario({ ...nuevoUsuario, correo: e.target.value })}
        />
        <button className="btn btn-success" onClick={agregarUsuario}>
          Agregar
        </button>
      </div>
      <ul className="list-group">
        {usuarios.map(u => (
          <li key={u.correo} className="list-group-item d-flex justify-content-between align-items-center">
            {u.nombre} ({u.correo})
            <button className="btn btn-danger btn-sm" onClick={() => eliminarUsuario(u.correo)}>
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}