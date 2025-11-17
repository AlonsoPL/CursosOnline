import React from "react";
import { useParams } from "react-router-dom";

function CourseViewProfesor() {
  const { id } = useParams();

  return (
    <div className="curso-profesor-vista">
      <h1>Curso #{id} </h1>

      <p>GESTION DE CURSO.</p>

      <div className="acciones-profesor">
        <button>Ver estudiantes inscritos</button>
        <button>Subir material</button>
        <button>Crear nueva clase</button>
        <button>Editar información del curso</button>
      </div>
    </div>
  );
}

export default CourseViewProfesor;
