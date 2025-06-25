import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Home() {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" replace />;
  return (
    <div>
      <h1>Bienvenido, {user.username}</h1>
      <p>Desde aquí puedes ir a <a href="/reservas">tus reservas</a>.</p>
    </div>
  );
}
