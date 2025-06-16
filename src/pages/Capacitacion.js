import React from 'react';

export default function Capacitacion() {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-6">Capacitaciones</h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem', alignItems: 'center' }}>
        <div style={{ width: '100%', maxWidth: 600 }}>
          <h3 className="mb-3" style={{ fontSize: '1.3rem', textAlign: 'center' }}>
            Tutorial para usar Impresora 3D
          </h3>
          <video
            src="/Impresora.mp4"
            controls
            style={{ width: '100%', borderRadius: 12, background: '#000' }}
          >
            Tu navegador no soporta el elemento de video.
          </video>
        </div>
        <div style={{ width: '100%', maxWidth: 600 }}>
          <h3 className="mb-3" style={{ fontSize: '1.3rem', textAlign: 'center' }}>
            Tutorial para usar Cortadora Láser
          </h3>
          <video
            src="/Cortadora.mp4"
            controls
            style={{ width: '100%', borderRadius: 12, background: '#000' }}
          >
            Tu navegador no soporta el elemento de video.
          </video>
        </div>
      </div>
    </div>
  );
}