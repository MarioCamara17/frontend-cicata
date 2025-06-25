import React, { useState } from 'react';
import API from '../api'; // nuestro cliente Axios

export default function Registro() {
  const [form, setForm] = useState({
    correo:     '',
    contrasena: '',
    confirmar:  '',
    telefono:   '',
    rol:        'Estudiante',
  });
  const [error, setError] = useState(null);

  // Mapa de nombres de rol a roleId que tu API espera
  const roleMap = {
    Administrador:        1,
    Profesor:             2,
    Instructor:           3,
    Empresario:           4,
    'Visitante / Externo': 5,
    Estudiante:           6,
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (form.contrasena !== form.confirmar) {
      setError('Las contraseñas no coinciden');
      return;
    }

    try {
      await API.post('/Users', {
        username: form.correo,
        email:    form.correo,
        password: form.contrasena,
        roleId:   roleMap[form.rol] || 6
      });
      alert('Registro exitoso. Ahora puedes iniciar sesión.');
      window.location.href = '/login';
    } catch (err) {
      console.error('Error al registrar:', err);
      setError('No se pudo completar el registro');
    }
  };

  return (
    <div className="container min-vh-100 d-flex flex-column justify-content-center align-items-center bg-light">
      <div className="card shadow-lg p-4" style={{ maxWidth: 420, width: '100%' }}>
        <h2 className="text-center mb-4 fw-bold">Crear Cuenta Nueva</h2>

        {error && <div className="alert alert-danger">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="correo" className="form-label">Correo electrónico</label>
            <input
              type="email"
              name="correo"
              id="correo"
              className="form-control"
              placeholder="Correo electrónico"
              value={form.correo}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="contrasena" className="form-label">Contraseña</label>
            <input
              type="password"
              name="contrasena"
              id="contrasena"
              className="form-control"
              placeholder="Contraseña"
              value={form.contrasena}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="confirmar" className="form-label">Confirmar contraseña</label>
            <input
              type="password"
              name="confirmar"
              id="confirmar"
              className="form-control"
              placeholder="Confirmar contraseña"
              value={form.confirmar}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="telefono" className="form-label">Número de teléfono</label>
            <input
              type="tel"
              name="telefono"
              id="telefono"
              className="form-control"
              placeholder="Número de teléfono"
              value={form.telefono}
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="rol" className="form-label">Rol</label>
            <select
              name="rol"
              id="rol"
              className="form-select"
              value={form.rol}
              onChange={handleChange}
            >
              <option>Estudiante</option>
              <option>Visitante / Externo</option>
              <option>Empresario</option>
              <option>Instructor</option>
              <option>Profesor</option>
              <option>Administrador</option>
            </select>
          </div>

          <button type="submit" className="btn btn-primary w-100 fw-bold">
            Registrarse
          </button>
        </form>
      </div>
    </div>
  );
}
