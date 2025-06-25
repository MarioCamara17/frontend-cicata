import React, { useState } from 'react';

const equipos = ['Equipo 1', 'Equipo 2', 'Equipo 3'];
const dias = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];
const horas = Array.from({ length: 12 }, (_, i) => `${i + 9}:00`);

const disponibilidadInicial = {};
equipos.forEach(equipo => {
  disponibilidadInicial[equipo] = {};
  dias.forEach(dia => {
    disponibilidadInicial[equipo][dia] = Array(12).fill(true); // true = disponible
  });
});

export function Disponibilidad() {
  const [disponibilidad, setDisponibilidad] = useState(disponibilidadInicial);

  // Ejemplo de función para reservar un horario
  const reservar = (equipo, dia, horaIdx) => {
    setDisponibilidad(prev => ({
      ...prev,
      [equipo]: {
        ...prev[equipo],
        [dia]: prev[equipo][dia].map((disp, idx) =>
          idx === horaIdx ? false : disp
        ),
      },
    }));
  };

  return (
    <div>
      <h2>Disponibilidad de Equipos</h2>
      {equipos.map(equipo => (
        <div key={equipo} style={{ marginBottom: 32 }}>
          <h3>{equipo}</h3>
          <table border="1" cellPadding="4">
            <thead>
              <tr>
                <th>Hora</th>
                {dias.map(dia => (
                  <th key={dia}>{dia}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {horas.map((hora, horaIdx) => (
                <tr key={hora}>
                  <td>{hora}</td>
                  {dias.map(dia => (
                    <td
                      key={dia}
                      style={{
                        background: disponibilidad[equipo][dia][horaIdx]
                          ? '#b6fcb6'
                          : '#fcb6b6',
                        cursor: disponibilidad[equipo][dia][horaIdx]
                          ? 'pointer'
                          : 'not-allowed',
                      }}
                      onClick={() =>
                        disponibilidad[equipo][dia][horaIdx] &&
                        reservar(equipo, dia, horaIdx)
                      }
                    >
                      {disponibilidad[equipo][dia][horaIdx]
                        ? 'Disponible'
                        : 'Ocupado'}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}