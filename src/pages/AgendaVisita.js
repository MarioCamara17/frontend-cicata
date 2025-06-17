import { useState } from "react";
import { useEquipos } from "../context/EquiposContext";

export default function ReservaMaquina() {
  const { equipos } = useEquipos();
  const [form, setForm] = useState({
    maquina: "",
    fecha: "",
    hora: "",
    descripcion: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Reserva realizada para la máquina: ${form.maquina}\nDía: ${form.fecha}${form.hora ? ` a las ${form.hora}` : ""}\nDescripción: ${form.descripcion}`
    );
  };

  return (
    <div className="container mt-5">
      <div className="card shadow p-4 mx-auto" style={{ maxWidth: 500 }}>
        <h3 className="mb-4 text-center">Reservar Máquina</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label" htmlFor="maquina">
              Selecciona la máquina <span className="text-danger">*</span>
            </label>
            <select
              id="maquina"
              name="maquina"
              className="form-select"
              value={form.maquina}
              onChange={handleChange}
              required
            >
              <option value="">Selecciona una opción</option>
              {equipos.map((eq, i) => (
                <option
                  key={i}
                  value={eq.nombre}
                  disabled={eq.estado !== "Disponible"}
                >
                  {eq.nombre} - {eq.estado}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="fecha">
              Fecha de reserva <span className="text-danger">*</span>
            </label>
            <input
              type="date"
              id="fecha"
              name="fecha"
              className="form-control"
              value={form.fecha}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="hora">
              Hora de llegada (opcional)
            </label>
            <input
              type="time"
              id="hora"
              name="hora"
              className="form-control"
              value={form.hora}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="descripcion">
              Breve descripción del trabajo <span className="text-danger">*</span>
            </label>
            <textarea
              id="descripcion"
              name="descripcion"
              className="form-control"
              rows={3}
              placeholder="Describe brevemente el trabajo que vas a realizar"
              value={form.descripcion}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100 fw-bold">
            Reservar
          </button>
        </form>
      </div>
    </div>
  );
}