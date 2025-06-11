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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-4">Iniciar Sesión</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Correo electrónico"
            className="w-full border p-2 rounded"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Contraseña"
            className="w-full border p-2 rounded"
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700"
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}
