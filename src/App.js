import { Rutas } from './routes/Rutas';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import { EquiposProvider } from './context/EquiposContext';

export default function App() {
  return (
    <Router>
      <EquiposProvider>
        <Navbar />
        <Rutas />
      </EquiposProvider>
    </Router>
  );
}