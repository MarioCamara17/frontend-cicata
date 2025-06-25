import Navbar from './components/Navbar/Navbar';
import { Rutas } from './routes/Rutas';
import { EquiposProvider } from './context/EquiposContext';

export default function App() {
  return (
    <EquiposProvider>
      <Navbar />
      <Rutas />
    </EquiposProvider>
  );
}
