import React from 'react';

const disponibilidad = [
  { fecha: '2025-06-15', equipo: 'CNC Router', proceso: 'Diseño', estado: 'Alta' },
  { fecha: '2025-06-16', equipo: 'Impresora 3D', proceso: 'Fabricación', estado: 'Poca' },
  { fecha: '2025-06-17', equipo: 'Laser CAM Five', proceso: 'Fabricación', estado: 'Sin' }
];

export default function ConsultaDisponibilidad() {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Disponibilidad</h2>
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border">Fecha</th>
            <th className="p-2 border">Equipo</th>
            <th className="p-2 border">Proceso</th>
            <th className="p-2 border">Estado</th>
          </tr>
        </thead>
        <tbody>
          {disponibilidad.map((item, i) => (
            <tr key={i}>
              <td className="p-2 border">{item.fecha}</td>
              <td className="p-2 border">{item.equipo}</td>
              <td className="p-2 border">{item.proceso}</td>
              <td className="p-2 border">{item.estado}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
