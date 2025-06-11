import EquipoCard from '../components/EquipoCard';

const datos = [
  { nombre: 'CNC Router STM', tipo: 'Fabricación', estado: 'Disponible' },
  { nombre: 'Impresora 3D', tipo: 'Fabricación', estado: 'Ocupado' },
];

export default function ReservasScreen() {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Reservas</h2>
      {datos.map((equipo, index) => (
        <EquipoCard key={index} equipo={equipo} />
      ))}
    </div>
  );
}
