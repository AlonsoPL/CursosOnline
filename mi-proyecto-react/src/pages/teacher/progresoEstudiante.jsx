import React from "react";
import NavProfesor from "../../components/nav_profesor"; // ✔ IMPORT CORRECTO

const ProgresoEstudiante = () => {
  const estudiantes = [
    { id: 1, nombre: "Juan Pérez", progreso: "80%" },
    { id: 2, nombre: "Ana Gómez", progreso: "55%" },
    { id: 3, nombre: "Carlos Ruiz", progreso: "92%" },
  ];

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <NavProfesor />

      {/* Contenido principal */}
      <div className="progresoEstudiante contenido-principal px-4 py-3">
        <h2>Progreso del Estudiante</h2>

        <table className="tabla-progreso">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Progreso</th>
            </tr>
          </thead>
          <tbody>
            {estudiantes.map((est) => (
              <tr key={est.id}>
                <td>{est.nombre}</td>
                <td>{est.progreso}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProgresoEstudiante;
