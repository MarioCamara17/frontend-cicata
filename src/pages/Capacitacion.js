import React from 'react';

const capacitaciones = [
  {
    titulo: "Programación en Arduino",
    fecha: "11 al 15 de julio de 2022",
    horario: "Lunes 10-14, Martes a Viernes 8:30-12:30",
    instructores: "Dr. Francisco Ornelas",
    materiales: ["video1.mp4", "tutorial1.pdf"]
  }
];

export default function Capacitacion() {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Capacitaciones</h2>
      {capacitaciones.map((cap, index) => (
        <div key={index} className="border p-4 rounded shadow mb-4">
          <h3 className="font-semibold">{cap.titulo}</h3>
          <p><strong>Fecha:</strong> {cap.fecha}</p>
          <p><strong>Horario:</strong> {cap.horario}</p>
          <p><strong>Instructor:</strong> {cap.instructores}</p>
          <ul className="mt-2 list-disc pl-5">
            {cap.materiales.map((mat, i) => (
              <li key={i}>{mat}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
