import { createContext, useContext, useState } from "react";

const EquiposContext = createContext();

export function useEquipos() {
  return useContext(EquiposContext);
}

export function EquiposProvider({ children }) {
  const [equipos, setEquipos] = useState([
    { nombre: 'CNC Router STM', tipo: 'Fabricación', estado: 'Disponible' },
    { nombre: 'Impresora 3D', tipo: 'Fabricación', estado: 'Ocupado' },
    { nombre: 'Cortadora Láser CAM Five', tipo: 'Fabricación', estado: 'Disponible' },
  ]);

  return (
    <EquiposContext.Provider value={{ equipos, setEquipos }}>
      {children}
    </EquiposContext.Provider>
  );
}