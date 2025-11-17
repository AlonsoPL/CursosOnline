import React from "react";
import { Link } from "react-router-dom";
import NavProfesor from "../../components/nav_profesor"; // ✔ IMPORT CORRECTO

const MisCursosProfesor = () => {
  const cursos = [
    {
      id: 1,
      titulo: "Marketing Digital",
      lecciones: 25,
      duracion: "6 hrs",
      img: "https://img.freepik.com/free-photo/digital-marketing-graphic-design_53876-120072.jpg"
    },
    {
      id: 2,
      titulo: "Fundamentos de Programación",
      lecciones: 30,
      duracion: "8 hrs",
      img: "https://img.freepik.com/free-photo/programming-background-collage_23-2149901784.jpg"
    },
    {
      id: 3,
      titulo: "Diseño UX/UI",
      lecciones: 18,
      duracion: "5 hrs",
      img: "https://th.bing.com/th/id/OIP.RUkED6YM1_G1hBPBhIaX8QHaEv?w=295&h=189"
    }
  ];

  return (
    <div className="d-flex">
      <NavProfesor />

      <div className="misCursosProfesor contenido-principal px-4 py-3">
        <h2>Mis Cursos</h2>

        <div className="cursos-grid">
          {cursos.map((curso) => (
            <div className="curso-card" key={curso.id}>
              <img src={curso.img} alt={curso.titulo} />

              <h3>{curso.titulo}</h3>

              <p><strong>Lecciones:</strong> {curso.lecciones}</p>
              <p><strong>Duración:</strong> {curso.duracion}</p>

              <Link to={`/teacher/curso/${curso.id}`} className="btn-curso">
                Ver Curso
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MisCursosProfesor;
