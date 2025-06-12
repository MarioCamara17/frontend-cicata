import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Simulación de login (esto se reemplazará con conexión a API)
    if (correo === "admin@ipn.mx" && contrasena === "123456") {
      alert("Inicio de sesión exitoso");
      navigate("/"); // Redirige al home o dashboard
    } else {
      alert("Correo o contraseña incorrectos");
    }
  };

  return (
    <div className="container min-vh-100 d-flex flex-column justify-content-center align-items-center bg-light">
      <div className="card shadow-lg p-4" style={{ maxWidth: 420, width: '100%' }}>
        <h2 className="text-center mb-4 fw-bold">Iniciar Sesión</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <input
              type="email"
              placeholder="Correo electrónico"
              className="form-control"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Contraseña"
              className="form-control"
              value={contrasena}
              onChange={(e) => setContrasena(e.target.value)}
              required
            />
          </div>
          <div className="d-flex flex-column gap-2">
            <button
              type="submit"
              className="btn btn-success fw-bold"
            >
              Entrar
            </button>
            <button
              type="button"
              className="btn btn-outline-primary fw-bold"
              onClick={() => navigate("/registro")}
            >
              Crear cuenta nueva
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}