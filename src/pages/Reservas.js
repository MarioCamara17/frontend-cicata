import React, { useEffect, useState } from 'react';
import API from '../api';
import dayjs from 'dayjs';

export default function Reservas() {
  const [labs, setLabs]       = useState([]);
  const [devices, setDevices] = useState([]);
  const [form, setForm]       = useState({
    labId: '',
    deviceId: '',
    startTime: '',
    endTime: '',
    observations: ''
  });
  const [reservas, setReservas] = useState([]);
  const [error, setError]       = useState(null);

  // 1) Traer labs y reservas al montar
  useEffect(() => {
    API.get('/Labs')
      .then(r => setLabs(r.data))
      .catch(() => setError('No se pudo cargar laboratorios'));
    fetchReservas();
  }, []);

  function fetchReservas() {
    API.get('/Reservations')
      .then(r => setReservas(r.data))
      .catch(() => setError('No se pudo cargar tus reservas'));
  }

  // 2) Cuando cambia lab, traer sus dispositivos
  useEffect(() => {
    if (form.labId) {
      API.get(`/Devices/by-lab/${form.labId}`)
        .then(r => setDevices(r.data))
        .catch(() => setError('No pude cargar dispositivos'));
    }
  }, [form.labId]);

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setError(null);

    try {
      await API.post('/Reservations', {
        deviceId:     form.deviceId,
        startTime:    dayjs(form.startTime).toISOString(),
        endTime:      dayjs(form.endTime).toISOString(),
        observations: form.observations
      });
      fetchReservas();
      setForm({ labId:'', deviceId:'', startTime:'', endTime:'', observations:'' });
    } catch {
      setError('Error al crear la reserva');
    }
  };

  return (
    <div className="container py-4">
      <h1>Mis Reservas</h1>
      {error && <div className="alert alert-danger">{error}</div>}

      <form onSubmit={handleSubmit} className="row g-2 mb-4">
        <div className="col-md-3">
          <select
            name="labId"
            value={form.labId}
            onChange={handleChange}
            className="form-select"
            required
          >
            <option value="">Seleccione laboratorio</option>
            {labs.map(l => (
              <option key={l.id} value={l.id}>{l.name}</option>
            ))}
          </select>
        </div>

        <div className="col-md-3">
          <select
            name="deviceId"
            value={form.deviceId}
            onChange={handleChange}
            className="form-select"
            required
          >
            <option value="">Seleccione dispositivo</option>
            {devices.map(d => (
              <option key={d.id} value={d.id}>{d.name}</option>
            ))}
          </select>
        </div>

        <div className="col-md-2">
          <input
            type="datetime-local"
            name="startTime"
            value={form.startTime}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="col-md-2">
          <input
            type="datetime-local"
            name="endTime"
            value={form.endTime}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="col-md-2 d-grid">
          <button className="btn btn-primary">Reservar</button>
        </div>
      </form>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Equipo</th>
            <th>Inicio</th>
            <th>Fin</th>
            <th>Estado</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {reservas.map(r => (
            <tr key={r.id}>
              <td>{r.id}</td>
              <td>{r.device.name}</td>
              <td>{dayjs(r.startTime).format('DD/MM/YYYY HH:mm')}</td>
              <td>{dayjs(r.endTime).format('DD/MM/YYYY HH:mm')}</td>
              <td>{r.status}</td>
              <td>
                {r.status === 'Pendiente' && (
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() =>
                      API.put(`/Reservations/${r.id}/cancel`)
                         .then(fetchReservas)
                    }
                  >
                    Cancelar
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
