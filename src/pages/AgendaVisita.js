import React, { useState } from 'react';

function generarFolio() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

const horasDisponibles = [];
for (let h = 9; h <= 19; h++) {
  horasDisponibles.push(h.toString().padStart(2, '0') + ':00');
}

const esFinDeSemana = (fecha) => {
  const dia = new Date(fecha).getDay();
  return dia === 0 || dia === 6;
};

function horaAMinutos(hora) {
  const [h, m] = hora.split(':').map(Number);
  return h * 60 + m;
}

// Función para comparar si dos rangos de fechas se solapan
function rangosSeSolapan(inicio1, fin1, inicio2, fin2) {
  return !(fin1 < inicio2 || inicio1 > fin2);
}

export default function ReservaImpresora() {
  const [equipo, setEquipo] = useState('');
  const [fecha, setFecha] = useState('');
  const [fechaFin, setFechaFin] = useState('');
  const [horaInicio, setHoraInicio] = useState('');
  const [horaFin, setHoraFin] = useState('');
  const [reservas, setReservas] = useState([]);
  const [mensaje, setMensaje] = useState('');

  // Validar si en la fecha y equipo hay conflicto de horarios (solo para impresora 3D)
  const hayConflicto = (fecha, hi, hf, folioExcluir = null) => {
    const inicioMin = horaAMinutos(hi);
    const finMin = horaAMinutos(hf);

    return reservas.some(r => {
      if (r.equipo !== equipo) return false;
      if (r.fecha !== fecha) return false;
      if (r.folio === folioExcluir) return false;
      if (!r.horaInicio || !r.horaFin) return false;

      const inicioReserva = horaAMinutos(r.horaInicio);
      const finReserva = horaAMinutos(r.horaFin);

      return inicioMin < finReserva && finMin > inicioReserva;
    });
  };

  // Validar solapamiento de días para las otras máquinas
  const haySolapamientoDias = (equipo, inicio, fin) => {
    const inicioDate = new Date(inicio);
    const finDate = new Date(fin);

    return reservas.some(r => {
      if (r.equipo !== equipo) return false;
      if (!r.fecha || !r.fechaFin) return false;
      const rInicio = new Date(r.fecha);
      const rFin = new Date(r.fechaFin);
      return rangosSeSolapan(inicioDate, finDate, rInicio, rFin);
    });
  };

  const handleAgregarReserva = () => {
    setMensaje('');
    if (!equipo) {
      setMensaje('Selecciona un equipo');
      return;
    }

    // IMPRESORA 3D: solo pide una fecha y horas
    if (equipo === 'Impresora 3D') {
      if (!fecha) {
        setMensaje('Selecciona una fecha');
        return;
      }
      if (esFinDeSemana(fecha)) {
        setMensaje('No se permiten sábados ni domingos');
        return;
      }
      if (!horaInicio || !horaFin) {
        setMensaje('Selecciona hora inicio y fin');
        return;
      }
      if (horaFin <= horaInicio) {
        setMensaje('La hora fin debe ser mayor que la de inicio');
        return;
      }
      if (hayConflicto(fecha, horaInicio, horaFin)) {
        setMensaje('El horario se solapa con otra reserva');
        return;
      }

      const nuevo = {
        folio: generarFolio(),
        equipo,
        fecha,
        fechaFin: fecha, // Para uniformidad
        horaInicio,
        horaFin,
      };

      setReservas([...reservas, nuevo]);
      setMensaje(`Reserva agregada. Folio: ${nuevo.folio}`);
      setHoraInicio('');
      setHoraFin('');
      setEquipo('');
      setFecha('');
      setFechaFin('');
      return;
    }

    // OTRAS MÁQUINAS: pide fecha inicio y fecha fin
    if (!fecha || !fechaFin) {
      setMensaje('Selecciona fecha de inicio y fecha de fin');
      return;
    }
    if (new Date(fechaFin) < new Date(fecha)) {
      setMensaje('La fecha de fin debe ser igual o posterior a la de inicio');
      return;
    }
    // No permitir sábados ni domingos en el rango
    let d = new Date(fecha);
    const end = new Date(fechaFin);
    while (d <= end) {
      if (esFinDeSemana(d.toISOString().split('T')[0])) {
        setMensaje('No se permiten sábados ni domingos en el rango de fechas');
        return;
      }
      d.setDate(d.getDate() + 1);
    }
    if (haySolapamientoDias(equipo, fecha, fechaFin)) {
      setMensaje('Ya existe una reserva para alguno de esos días');
      return;
    }

    const nuevo = {
      folio: generarFolio(),
      equipo,
      fecha,
      fechaFin,
      horaInicio: null,
      horaFin: null,
    };

    setReservas([...reservas, nuevo]);
    setMensaje(`Reserva agregada. Folio: ${nuevo.folio}`);
    setEquipo('');
    setFecha('');
    setFechaFin('');
    setHoraInicio('');
    setHoraFin('');
  };

  const cancelarReserva = (folio) => {
    setReservas(reservas.filter(r => r.folio !== folio));
    setMensaje(`Reserva con folio ${folio} cancelada`);
  };

  return (
    <div
      className="container py-4 overflow-auto"
      style={{
        maxWidth: '900px',
        width: '100%',
        maxHeight: '80vh',
        background: 'white',
        borderRadius: '16px',
        boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
        padding: '48px 32px',
        margin: '32px auto'
      }}
    >
      <h2 className="mb-4" style={{ fontSize: '2rem', textAlign: 'center' }}>
        Reservar equipo
      </h2>

      <div className="mb-4" style={{ fontSize: '1.2rem' }}>
        <label>Equipo:</label>
        <select value={equipo} onChange={e => setEquipo(e.target.value)} className="form-select form-select-lg">
          <option value="">-- Selecciona --</option>
          <option value="Impresora 3D">Impresora 3D</option>
          <option value="Cortadora Laser CAM Five">Cortadora Laser CAM Five</option>
          <option value="CNC Router">CNC Router</option>
        </select>
      </div>

      {/* Para impresora 3D: solo una fecha y horas */}
      {equipo === 'Impresora 3D' && (
        <>
          <div className="mb-4" style={{ fontSize: '1.2rem' }}>
            <label>Fecha:</label>
            <input
              type="date"
              className="form-control form-control-lg"
              value={fecha}
              onChange={e => setFecha(e.target.value)}
              min={new Date().toISOString().split('T')[0]}
            />
          </div>
          <div className="mb-4" style={{ fontSize: '1.2rem' }}>
            <label>Hora inicio:</label>
            <select
              className="form-select form-select-lg"
              value={horaInicio}
              onChange={e => setHoraInicio(e.target.value)}
            >
              <option value="">-- Selecciona --</option>
              {horasDisponibles.slice(0, -1).map(h => (
                <option key={h} value={h}>{h}</option>
              ))}
            </select>
          </div>
          <div className="mb-4" style={{ fontSize: '1.2rem' }}>
            <label>Hora fin:</label>
            <select
              className="form-select form-select-lg"
              value={horaFin}
              onChange={e => setHoraFin(e.target.value)}
              disabled={!horaInicio}
            >
              <option value="">-- Selecciona --</option>
              {horaInicio
                ? horasDisponibles.filter(h => h > horaInicio).map(h => (
                    <option key={h} value={h}>{h}</option>
                  ))
                : null}
            </select>
          </div>
        </>
      )}

      {/* Para otras máquinas: rango de fechas */}
      {(equipo === 'Cortadora Laser CAM Five' || equipo === 'CNC Router') && (
        <>
          <div className="mb-4" style={{ fontSize: '1.2rem' }}>
            <label>Fecha inicio:</label>
            <input
              type="date"
              className="form-control form-control-lg"
              value={fecha}
              onChange={e => setFecha(e.target.value)}
              min={new Date().toISOString().split('T')[0]}
            />
          </div>
          <div className="mb-4" style={{ fontSize: '1.2rem' }}>
            <label>Fecha fin:</label>
            <input
              type="date"
              className="form-control form-control-lg"
              value={fechaFin}
              onChange={e => setFechaFin(e.target.value)}
              min={fecha || new Date().toISOString().split('T')[0]}
            />
          </div>
        </>
      )}

      <button className="btn btn-primary btn-lg mb-4" onClick={handleAgregarReserva}>
        Agregar Reserva
      </button>

      {mensaje && <div className="alert alert-info">{mensaje}</div>}

      <h3 style={{ fontSize: '1.5rem' }}>Reservas actuales</h3>
      {reservas.length === 0 ? (
        <p>No hay reservas</p>
      ) : (
        <div style={{ overflowX: 'auto' }}>
          <table className="table table-lg" style={{ fontSize: '1.1rem' }}>
            <thead>
              <tr>
                <th>Folio</th>
                <th>Equipo</th>
                <th>Fecha inicio</th>
                <th>Fecha fin</th>
                <th>Hora inicio</th>
                <th>Hora fin</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {reservas.map(r => (
                <tr key={r.folio}>
                  <td>{r.folio}</td>
                  <td>{r.equipo}</td>
                  <td>{r.fecha}</td>
                  <td>{r.fechaFin}</td>
                  <td>{r.horaInicio || '-'}</td>
                  <td>{r.horaFin || '-'}</td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm me-2"
                      onClick={() => cancelarReserva(r.folio)}
                    >
                      Cancelar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}