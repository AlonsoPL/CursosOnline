import React from "react";
import { useNavigate } from "react-router-dom";

function CursosProfesor() {
  const navigate = useNavigate();

  const cursos = [
    {
      id: 1,
      nombre: "Marketing Digital",
      imagen: "https://cdn-icons-png.flaticon.com/512/2721/2721290.png",
    },
    {
      id: 2,
      nombre: "Fundamentos de Programación",
      imagen: "https://cdn-icons-png.flaticon.com/512/2721/2721290.png",
    },
    {
      id: 3,
      nombre: "Diseño UX/UI",
      imagen: "https://cdn-icons-png.flaticon.com/512/2721/2721290.png",
    },
  ];

  return (
    <div className="contenedor-profesor">
      <h1 className="titulo-profesor">Cursos Activos</h1>

      <div className="cursos-grid-profesor">
        {cursos.map((curso) => (
          <div className="curso-card-profesor" key={curso.id}>
            <img
              src={curso.imagen}
              alt={curso.nombre}
              className="curso-imagen-profesor"
            />
            <h3>{curso.nombre}</h3>
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

export default CursosProfesor;


