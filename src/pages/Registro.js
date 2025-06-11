import { useState } from 'react';

export default function Registro() {
  const [form, setForm] = useState({
    correo: '',
    contrasena: '',
    confirmar: '',
    rol: 'Estudiante',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.contrasena !== form.confirmar) {
      alert('Las contraseñas no coinciden');
      return;
    }
    console.log('Datos enviados:', form);
    // Aquí conectaremos a la API más adelante
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-4">Crear Cuenta Nueva</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="correo"
            placeholder="Correo electrónico"
            className="w-full border p-2 rounded"
            value={form.correo}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="contrasena"
            placeholder="Contraseña"
            className="w-full border p-2 rounded"
            value={form.contrasena}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="confirmar"
            placeholder="Confirmar contraseña"
            className="w-full border p-2 rounded"
            value={form.confirmar}
            onChange={handleChange}
            required
          />

          <select
            name="rol"
            className="w-full border p-2 rounded"
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

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
          >
            Registrarse
          </button>
        </form>
      </div>
    </div>
  );
}
