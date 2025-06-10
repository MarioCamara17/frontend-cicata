import { useState } from "react";

export default function AgendaVisita() {
  const [form, setForm] = useState({
    laboratorio: "",
    proceso: "",
    equipo: "",
    descripcion: "",
    fecha: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Visita registrada: " + JSON.stringify(form, null, 2));
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Registrar visita</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="laboratorio" placeholder="SAL-LAB" onChange={handleChange} className="input" />
        <input name="proceso" placeholder="Diseño o Fabricación" onChange={handleChange} className="input" />
        <input name="equipo" placeholder="CNC Router STM" onChange={handleChange} className="input" />
        <textarea name="descripcion" placeholder="Descripción del trabajo" onChange={handleChange} className="input" />
        <input type="date" name="fecha" onChange={handleChange} className="input" />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Guardar visita</button>
      </form>
    </div>
  );
}