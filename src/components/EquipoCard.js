export default function EquipoCard({ equipo }) {
  return (
    <div className="border rounded shadow p-4 mb-2">
      <h3 className="font-semibold">{equipo.nombre}</h3>
      <p>Tipo: {equipo.tipo}</p>
      <p>Estado: {equipo.estado}</p>
    </div>
  );
}
