import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import AgendaVisita from "./pages/AgendaVisita";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/agenda" element={<AgendaVisita />} />
          {/* Puedes agregar más rutas aquí */}
          <Route
            path="/"
            element={
              <header className="App-header">
                <p>
                  Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn React
                </a>
              </header>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
