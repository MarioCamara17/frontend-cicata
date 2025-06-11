import React from 'react';

export default function AgendaVisita() {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Registrar tu visita</h2>
      <form className="space-y-3">
        <input type="text" placeholder="Nombre del laboratorio" className="border p-2 w-full rounded" />
        <input type="text" placeholder="Nombre del proceso" className="border p-2 w-full rounded" />
        <input type="text" placeholder="Equipo" className="border p-2 w-full rounded" />
        <textarea placeholder="Descripción del trabajo" className="border p-2 w-full rounded" />
        <button className="bg-blue-600 text-white px-4 py-2 rounded">Guardar visita</button>
      </form>
    </div>
  );
}
