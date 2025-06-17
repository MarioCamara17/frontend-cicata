// EncuestaSatisfaccion.js
import { useState } from "react";

export default function EncuestaSatisfaccion() {
  const [satisfaccion, setSatisfaccion] = useState(null);

  return (
    <div className="mt-5 text-center">
      <h5>¿Cómo calificarías tu experiencia?</h5>
      <div className="d-flex justify-content-center gap-4 mt-3">
        <button
          className={`btn btn-light ${satisfaccion === "triste" ? "border-primary" : ""}`}
          onClick={() => setSatisfaccion("triste")}
          title="Insatisfecho"
        >
          <span style={{ fontSize: 40 }} role="img" aria-label="Triste">😞</span>
        </button>
        <button
          className={`btn btn-light ${satisfaccion === "neutral" ? "border-primary" : ""}`}
          onClick={() => setSatisfaccion("neutral")}
          title="Neutral"
        >
          <span style={{ fontSize: 40 }} role="img" aria-label="Neutral">😐</span>
        </button>
        <button
          className={`btn btn-light ${satisfaccion === "feliz" ? "border-primary" : ""}`}
          onClick={() => setSatisfaccion("feliz")}
          title="Satisfecho"
        >
          <span style={{ fontSize: 40 }} role="img" aria-label="Feliz">😊</span>
        </button>
      </div>
      {satisfaccion && (
        <div className="mt-3">
          <span className="fw-bold">
            {satisfaccion === "triste" && "¡Lamentamos tu experiencia!"}
            {satisfaccion === "neutral" && "¡Gracias por tu opinión!"}
            {satisfaccion === "feliz" && "¡Nos alegra que estés satisfecho!"}
          </span>
        </div>
      )}
    </div>
  );
}