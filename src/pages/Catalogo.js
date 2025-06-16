import React from 'react';

export default function Catalogo() {
  return (
    <div className="container py-4" style={{ maxWidth: 900, margin: '0 auto' }}>
      <h2 className="mb-5" style={{ textAlign: 'center', fontWeight: 'bold' }}>Catálogo de Equipos del Laboratorio</h2>

      {/* Impresora 3D */}
      <section className="mb-5">
        <h3 style={{ color: '#1d3557' }}>Impresora 3D</h3>
        <img
          src="/impresora3D.png"
          alt="Impresora 3D"
          style={{ width: '100%', maxWidth: 400, display: 'block', margin: '20px auto', borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}
        />
        <p>
          <strong>Funcionalidad:</strong> Permite la fabricación de objetos tridimensionales a partir de modelos digitales, utilizando materiales plásticos como PLA o ABS. Es ideal para prototipado rápido, piezas funcionales, maquetas, soportes y componentes personalizados.
        </p>
        <ul>
          <li><strong>Tecnología:</strong> FDM (Modelado por Deposición Fundida)</li>
          <li><strong>Materiales compatibles:</strong> PLA, ABS, PETG, TPU</li>
          <li><strong>Volumen de impresión:</strong> 220 x 220 x 250 mm</li>
          <li><strong>Precisión:</strong> ±0.1 mm</li>
          <li><strong>Aplicaciones:</strong> Prototipos, piezas mecánicas, modelos educativos, arte y diseño</li>
        </ul>
      </section>

      {/* Cortadora Láser CAM Five */}
      <section className="mb-5">
        <h3 style={{ color: '#1d3557' }}>Cortadora Láser CAM Five</h3>
        <img
          src="/cortadora.png"
          alt="Cortadora Láser CAM Five"
          style={{ width: '100%', maxWidth: 400, display: 'block', margin: '20px auto', borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}
        />
        <p>
          <strong>Funcionalidad:</strong> Utiliza un haz láser de alta precisión para cortar, grabar o marcar materiales como madera, acrílico, cartón, tela, cuero y algunos plásticos. Permite realizar cortes limpios y grabados detallados en 2D.
        </p>
        <ul>
          <li><strong>Potencia del láser:</strong> 60W</li>
          <li><strong>Área de trabajo:</strong> 600 x 400 mm</li>
          <li><strong>Materiales compatibles:</strong> Madera, acrílico, MDF, cartón, cuero, tela</li>
          <li><strong>Precisión:</strong> ±0.05 mm</li>
          <li><strong>Aplicaciones:</strong> Maquetas arquitectónicas, señalética, souvenirs, prototipos, grabados personalizados</li>
        </ul>
      </section>

      {/* CNC Router */}
      <section className="mb-5">
        <h3 style={{ color: '#1d3557' }}>CNC Router</h3>
        <img
          src="/cnc.png"
          alt="CNC Router"
          style={{ width: '100%', maxWidth: 400, display: 'block', margin: '20px auto', borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}
        />
        <p>
          <strong>Funcionalidad:</strong> Máquina de control numérico computarizado para el corte, tallado y fresado de materiales sólidos como madera, plásticos, aluminio y MDF. Permite crear piezas complejas en 2D y 3D con alta precisión.
        </p>
        <ul>
          <li><strong>Área de trabajo:</strong> 1200 x 1200 x 150 mm</li>
          <li><strong>Materiales compatibles:</strong> Madera, MDF, acrílico, aluminio, plásticos</li>
          <li><strong>Precisión:</strong> ±0.1 mm</li>
          <li><strong>Aplicaciones:</strong> Fabricación de muebles, moldes, letreros, piezas industriales, arte y decoración</li>
        </ul>
      </section>
    </div>
  );
}