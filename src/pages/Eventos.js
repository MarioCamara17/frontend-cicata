import React from 'react';

const eventos = [
  {
    nombre: "Programación en Arduino",
    fecha: "11 al 15 de julio de 2022",
    horario: "Lunes 10-14, Martes a Viernes 8:30-12:30",
    lugar: "IPN CICATA QRO",
    registro: "https://bit.ly/3QlxjvK",
    ingreso: "https://bit.ly/3QuQWBQ"
  },
  {
    nombre: "Tecnologías adaptativas y 3D",
    fecha: "10 de junio de 2022",
    horario: "10:00 a 12:00",
    lugar: "Online",
    registro: "https://bit.ly/3QlxjvK",
    ingreso: "https://bit.ly/3QuQWBQ"
  }
];

export default function Eventos() {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Eventos</h2>
      {eventos.map((evento, i) => (
        <div key={i} className="border p-4 rounded mb-4 shadow">
          <h3 className="font-semibold">{evento.nombre}</h3>
          <p><strong>Fecha:</strong> {evento.fecha}</p>
          <p><strong>Horario:</strong> {evento.horario}</p>
          <p><strong>Lugar:</strong> {evento.lugar}</p>
          <a href={evento.registro} className="text-blue-600 underline block mt-2">Registro</a>
          <a href={evento.ingreso} className="text-blue-600 underline">Ingreso</a>
        </div>
      ))}
    </div>
  );
}
