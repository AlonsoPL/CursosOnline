import React from "react";
import { useNavigate } from "react-router-dom";

function MisCursosProfesor() {
  const navigate = useNavigate();

  // Ejemplo de cursos del profesor (puedes cambiarlo)
  const misCursos = [
    {
      id: 1,
      nombre: "Marketing Digital",
      descripcion: "Curso sobre estrategias digitales.",
      imagen: "https://cdn-icons-png.flaticon.com/512/2721/2721290.png",
    },
    {
      id: 2,
      nombre: "Fundamentos de Programación",
      descripcion: "Curso básico de lógica y programación.",
      imagen: "https://cdn-icons-png.flaticon.com/512/2721/2721290.png",
    },
  ];

  return (
    <div className="contenedor-profesor">
      <h1 className="titulo-profesor">Mis Cursos</h1>

      <div className="cursos-grid-profesor">
        {misCursos.map((curso) => (
          <div className="curso-card-profesor" key={curso.id}>
            <img
              src={curso.imagen}
              alt={curso.nombre}
              className="curso-imagen-profesor"
            />
            <h3>{curso.nombre}</h3>
            <p>{curso.descripcion}</p>

            <button
              className="btn-profesor"
              onClick={() => navigate(`/teacher/curso/${curso.id}`)}
            >
              Ver Curso
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MisCursosProfesor;
