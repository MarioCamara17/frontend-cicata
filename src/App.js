import { Rutas } from './routes/Rutas';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Rutas />
    </Router>
  );
}
