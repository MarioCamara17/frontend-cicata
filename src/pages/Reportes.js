import React from 'react';

const reportes = [
  "Visitas efectivas",
  "Procesos y equipos más usados",
  "Encuestas respondidas",
  "Historial de usuarios",
  "Equipos en mantenimiento"
];

export default function Reportes() {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Reportes</h2>
      <ul className="list-disc pl-6">
        {reportes.map((r, i) => (
          <li key={i}>{r}</li>
        ))}
      </ul>
    </div>
  );
}
